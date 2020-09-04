import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {
    Detailmenubar,
    Profile,
    Pannel,
    Documentlist,
    Qnalist,
    RequestToExhibitor,
    Infofields,
    Booth,
    Thumblist,
    Tabpannel,
    TabContent,
    Video, Imgslide, LiveCompanyBox
} from "../../../../components";

import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../../../modules";
import {getBoothListReducer, getCompanyDetailDataReducer} from "../../../../modules/exhibition/exhibition";
import {getBrowserSize, useClientRect} from "../../../../common/common";

function Companydetail(props) {
    let languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const dispatch = useDispatch();
    //company detail data
    const companyDetailData = useSelector((state: RootState) => state.exhibitionReducer.companyDetail);
    const [tabList, setTabList] = useState([]);
    const [tabItems, setTabItems] = useState([]);
    useEffect(()=>{
        if(companyDetailData == null){
            dispatch(getCompanyDetailDataReducer({}));
        }
        else{
            let tabListTmp: any = [];
            if(companyDetailData.item != null){
                const tabItemsTmp = companyDetailData.item.length > 0? companyDetailData.item : new Array(companyDetailData.item);
                setTabItems(tabItemsTmp);
                tabItemsTmp.forEach((tab: any, idx)=>{
                    tabListTmp.push({
                        title: tab.item_name,
                        name: idx
                    });
                });
                setTabList(tabListTmp);
            }
        }
    }, [companyDetailData]);

    const [requestFormBoxEl, requestFormBoxRef] = useClientRect(null);
    const [bottomPanelEl, bottomPanelRef] = useClientRect(null);
    const businessInfo = [{
        'fieldname': languageData == null? '' : languageData.businessModel,
        'value': companyDetailData == null? '' : companyDetailData.business_information.business_model
    },{
        'fieldname': languageData == null? '' : languageData.currentEntryArea,
        'value': companyDetailData == null? '' : companyDetailData.business_information.current_entry_area
    },{
        'fieldname': languageData == null? '' : languageData.desiredEntryArea,
        'value': companyDetailData == null? '' : companyDetailData.business_information.desired_entry_area
    },{
        'fieldname': languageData == null? '' : languageData.sell,
        'value': companyDetailData == null? '' : companyDetailData.business_information.contract_condition
    },{
        'fieldname': languageData == null? '' : languageData.desiredInvestment,
        'value': companyDetailData == null? '' : companyDetailData.business_information.investment_stage
    }];
    const [deviceType, setDeviceType] = useState('pc');
    const _setDeviceType = () => {
        setDeviceType(getBrowserSize());
    };

    useEffect(() => {
        _setDeviceType();
        window.addEventListener('scroll', _isSubmenuTop);
        window.addEventListener('resize', _setDeviceType);
        return () => {
            window.removeEventListener('scroll', _isSubmenuTop);
            window.removeEventListener('resize', _setDeviceType);
        };
    }, []);

    const _isSubmenuTop = ()=> {
        if(requestFormBoxEl == null || requestFormBoxEl.current == null) return;
        if(bottomPanelEl == null || bottomPanelEl.current == null) return;

        if(window.scrollY + 40 > requestFormBoxEl.parentElement.previousElementSibling.offsetTop){
            if(window.scrollY + 40 > bottomPanelEl.offsetTop - requestFormBoxEl.clientHeight) {
                requestFormBoxEl.classList.remove('fixedOnTopForm');
                requestFormBoxEl.style.position = 'absolute';
                requestFormBoxEl.style.top = bottomPanelEl.offsetTop - requestFormBoxEl.clientHeight + 'px';
            }
            else{
                requestFormBoxEl.style.position = '';
                requestFormBoxEl.style.top = '56px';
                requestFormBoxEl.classList.add('fixedOnTopForm');
            }
        }
        else{
            requestFormBoxEl.classList.remove('fixedOnTopForm');
        }
    };


    //전체 부스 목록
    const allBoothList = useSelector((state: RootState) => state.exhibitionReducer.boothList);
    useEffect(()=>{
        if(allBoothList == null){
            dispatch(getBoothListReducer({}));
        }
        else{

        }
    });
    //선택한 전시 카테고리
    const selectedCategory = useSelector((state: RootState) => state.exhibitionReducer.selectedExhibit);

    const defaultValue:any = null;
    const isShowAllView = true;
    const [boothList, setBoothList] = useState(defaultValue);
    useEffect(()=>{
        //전체 목록 중 랜덤표시 vs 선택한 카테고리의 부스 중 랜덤 표시
        if(isShowAllView){
            //전체 부스 목록
            if(allBoothList != null){
                if(typeof allBoothList.length == "number"){
                    setBoothList(allBoothList);
                }
                else {
                    setBoothList([allBoothList]);
                }
            }
        }
        else{
            //선택한 카테고리 부스 목록
            if(selectedCategory != null){
                if(typeof selectedCategory.length == "number"){
                    setBoothList(selectedCategory.booth);
                }
                else {
                    setBoothList([selectedCategory.booth]);
                }
            }
        }
    }, [isShowAllView, allBoothList, selectedCategory]);

    const [randomNumbs, setRandomNumbs] = useState(defaultValue);
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    };

    useEffect(()=>{
        let randomNumbsTmp:any = [];
        if(boothList != null && boothList.length > 0){
            let i = 0;
            let rand = 0;
            while(i < 4){
                rand = getRandomInt(0, boothList.length);
                if(randomNumbsTmp.length > 0 && randomNumbsTmp.indexOf(rand) > -1){
                    continue;
                }
                randomNumbsTmp.push(rand);
                i++;
            }
        }
        setRandomNumbs(randomNumbsTmp);
    }, [boothList]);

    const _setPanelContent = (component, key) => {
        switch(component.type){
            case "text":
                return <div key={key} className='text'>{component.value}</div>;
            case "video":
                return <Video key={key} height={deviceType !== 'pc'? '160px' : '480px'} src={component.value}/>;
            case "thumbnails":
                return <Thumblist key={key} list={component.value} companyData={companyDetailData} isMobile={deviceType !== 'pc'} /> ;
        }
    };

    return (
        <CompanyDetailComp>
            <Detailmenubar data={companyDetailData} title={companyDetailData == null? '' : companyDetailData.company_name} />
            <CompanyDetailTitleComp src={companyDetailData != null? companyDetailData.main_banner : null}>
                <LiveCompanyBox />
            </CompanyDetailTitleComp>
            <div className='content'>
                <div>
                    <Video isShowCase={true} />
                </div>
                <div>
                    <div className='companyContents'>
                        <CompanyNamePannel>
                            <div className="companyThumbs">
                                {companyDetailData != null && companyDetailData.thumbnails.length > 0 ?
                                    <Imgslide list={companyDetailData != null ? companyDetailData.thumbnails : null} companyData={companyDetailData} />
                                    : null
                                }
                            </div>
                            {companyDetailData != null? <Profile data={companyDetailData} type='company' isMobile={deviceType !== 'pc'}/> : null }
                        </CompanyNamePannel>
                        <div className='border'>
                            <Pannel title={languageData==null? '' : languageData.ExhibitorDescription}>
                                {companyDetailData != null && companyDetailData.exhibitor_description != null?
                                    companyDetailData.exhibitor_description.map((component, key)=> {
                                        return _setPanelContent(component, key);
                                    }): null
                                }
                            </Pannel>
                        </div>
                        <div className='border'>
                            <Tabpannel tabs={tabList}>
                                {tabItems != null && tabItems.length > 0?
                                    tabItems.map((tab: any, key)=> {
                                        return <div key={key} className={key+' hide'}>
                                            <TabContent component={tab.component} companyData={companyDetailData} isMobile={deviceType !== 'pc'} />
                                        </div>
                                    })
                                    : null
                                }
                            </Tabpannel>
                        </div>
                        {companyDetailData != null && companyDetailData.business_information != null?
                            <div className='border'>
                                <Pannel title="Business information">
                                    <Infofields list={businessInfo} />
                                </Pannel>
                            </div>
                            : null
                        }
                        {companyDetailData != null && companyDetailData.documents != null?
                            <div className='border'>
                                <Documentlist title={languageData.mentoringDocument} list={companyDetailData.documents} isMobile={deviceType !== 'pc'} />
                            </div>
                            : null
                        }
                        {companyDetailData != null && companyDetailData.questions != null?
                            <div className='border'>
                                <Qnalist title={languageData.frequentlyQuestionsTitle} list={companyDetailData.questions} />
                            </div>
                            : null
                        }
                    </div>
                    <div className='requestBox'>
                        <div ref={requestFormBoxRef}>
                            <RequestToExhibitor/>
                        </div>
                    </div>
                </div>
                <div className='bottomContent' ref={bottomPanelRef}>
                    <div className='panelTitle'>{languageData.relatedOnlineBooth}</div>
                    <div className='boothList'>
                        <div>
                        {randomNumbs != null && randomNumbs.length > 0?
                            randomNumbs.map((numb, key)=> {
                                return (
                                    <Booth data={boothList[numb]} key={key} type={'sub'} noHash={true} />
                                )
                            }): null
                        }
                        </div>
                    </div>
                </div>
            </div>
        </CompanyDetailComp>
    )
}

interface CompanyDetailTitleCompProps {
    src: any
}
const CompanyDetailTitleComp = styled.div`
position: relative;
width: 100%;
${({theme}) => theme.media.desktop`
height: 1016px;
`}
${({theme}) => theme.media.mobile`
height: 190px;
`}
background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(props: CompanyDetailTitleCompProps) => (props.src != null ? props.src : '')});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
> *{
    ${({theme}) => theme.media.mobile`
        display: none;
    `}
    position: absolute;
    top: 50%;
    left: calc(100vw/4);
}
`;
const CompanyNamePannel = styled.div`
width: 100%;
${({theme}) => theme.media.desktop`
height: 455px;
`}
${({theme}) => theme.media.mobile`
height: auto;
`}
> * {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 8px;
    ${({theme}) => theme.media.desktop`
    width: 455px;
    `}
    ${({theme}) => theme.media.mobile`
    width: 100%;
    `}
    
    :first-child { margin-right: 40px; border: 0; }
    &.companyThumbs {
        ${({theme}) => theme.media.desktop`
        `}
        ${({theme}) => theme.media.mobile`
        display: none;
        `}
    }
}
`;

const CompanyDetailComp = styled.div`
width: 100%;
background: #f7f7f9;
> div.content {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    > div {
        ${({theme}) => theme.media.desktop`
        :first-child { margin-top: 40px; }
        `}
        ${({theme}) => theme.media.mobile`
        :first-child {
            margin-top: 0;
            > * {
                > * {
                    border-radius: 0;
                }
            }
        }
        `}
        :nth-child(2) { display: flex; }
        & .companyContents {
            flex: 1;
            ${({theme}) => theme.media.desktop`
            width: 950px;
            `}
            ${({theme}) => theme.media.mobile`
            width: 100%;
            padding: 0 20px;
            `}
            & > * {
                ${({theme}) => theme.media.desktop`
                margin-top: 40px;
                `}
                ${({theme}) => theme.media.mobile`
                margin-top: 16px;
                `}
            }
        }
        & .requestBox {
            ${({theme}) => theme.media.mobile`
            display: none;
            `}
            margin-top: 40px;
            width: 330px;
            > div {
                width: 310px;
                margin-left:20px;
                border: 1px solid #E9E9E9;
                box-sizing: border-box;
                border-radius: 8px;
                // overflow: hidden;
            }
        }
    }
    & .bottomContent {
        overflow: hidden;
        ${({theme}) => theme.media.desktop`
        padding-top: 80px;
        padding-bottom: 100px;
        `}
        ${({theme}) => theme.media.mobile`
        padding-top: 40px;
        padding-bottom: 40px;
        `}
        & .panelTitle {
            font-weight: bold;
            color: #000000;
            ${({theme}) => theme.media.desktop`
            font-size: 24px;
            line-height: 32px;
            `}
            ${({theme}) => theme.media.mobile`
            font-size: 14px;
            line-height: 22px;
            margin-left: 20px;
            `}
        }
        & .boothList {
            ${({theme}) => theme.media.desktop`
            padding-top: 40px;
            `}
            ${({theme}) => theme.media.mobile`
            padding-top: 16px;
            overflow-x: auto;
            overflow-y: hidden;
            `}
            > div {
                ${({theme}) => theme.media.mobile`
                display: flex;
                width: fit-content;
                padding: 0 20px;
                `}
                > * {
                    display: inline-block;
                    :last-child { margin-right: 0; }
                    ${({theme}) => theme.media.desktop`
                    margin-right: 40px;
                    `}
                    ${({theme}) => theme.media.mobile`
                    margin-right: 8px;
                    `}
                }
            }
        }
    }
}
.border {
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
}
.fixedOnTopForm {
    position: fixed;
    top: 56px;
    margin-top: 40px;
}
`;

export default Companydetail;