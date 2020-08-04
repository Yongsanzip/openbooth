import React, {Component, createRef, useEffect, useRef} from 'react';
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
    Button, Video, Imgslide, LiveCompanyBox
} from "../../../../components";

import dummyImg from "../../../../assets/img/bg-dummy.png";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../../../modules";
import {getCompanyDetailDataReducer} from "../../../../modules/exhibition/exhibition";

// import { getBoothListReducer, getSelectedExhibitCategoryReducer } from "../../../../modules/exhibition/exhibition";


function Companydetail(props) {
    let languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const dispatch = useDispatch();
    //company detail data
    let companyDetailData = useSelector((state: RootState) => state.exhibitionReducer.companyDetail);
    if(companyDetailData == null){
        const params = {};
        dispatch(getCompanyDetailDataReducer(params));
    }
    console.log("companyDetailData::", companyDetailData);

    const requestFormBoxRef = useRef(null);
    const bottomPanelRef = useRef(null);
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

    useEffect(() => {
        window.addEventListener('scroll', _isSubmenuTop);
        return () => {
            window.removeEventListener('scroll', _isSubmenuTop);
        };
    }, []);

    const _isSubmenuTop = ()=> {
        let formBox:any;
        if (typeof requestFormBoxRef !== 'undefined' &&
            typeof requestFormBoxRef.current !== 'undefined') {
            formBox = requestFormBoxRef.current;
        }
        let bottomPanel:any;
        if (typeof bottomPanelRef !== 'undefined' &&
            typeof bottomPanelRef.current !== 'undefined') {
            bottomPanel = bottomPanelRef.current;
        }
        if(formBox == null || bottomPanel == null) return;

        if(window.scrollY + 40 > formBox.parentElement.previousElementSibling.offsetTop){
            if(window.scrollY + 40 > bottomPanel.offsetTop - formBox.clientHeight) {
                formBox.classList.remove('fixedOnTopForm');
                formBox.style.position = 'absolute';
                formBox.style.top = bottomPanel.offsetTop - formBox.clientHeight + 'px';
            }
            else{
                formBox.style.position = '';
                formBox.style.top = '56px';
                formBox.classList.add('fixedOnTopForm');
            }
        }
        else{
            formBox.classList.remove('fixedOnTopForm');
        }
    }

    let tabItem = [];
    let tabList: any;
    if(companyDetailData != null && companyDetailData.item != null){
        tabItem = companyDetailData.item.length != null? companyDetailData.item : new Array(companyDetailData.item);
        tabItem.forEach(function(tab: any, idx){
            if(tabList == null) tabList = new Array();
            tabList.push({
                title: tab.item_name,
                name: idx
            })
        })
    }

    //전체 부스 목록
    let boothList = useSelector((state: RootState) => state.exhibitionReducer.boothList);
    //선택한 전시 카테고리
    const selectedCategory = useSelector((state: RootState) => state.exhibitionReducer.selectedExhibit);

    //전체 목록 중 랜덤표시 vs 선택한 카테고리의 부스 중 랜덤 표시
    if(true){
        if(boothList != null && boothList.length == null){
            boothList = new Array(boothList);
        }
    }
    else{
        let boothList = selectedCategory.booth;
        if(typeof boothList.length == 'undefined'){
            boothList = new Array(boothList);
        }
    }

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    let randomNumbs = new Array();
    if(boothList != null && boothList.length != null){
        let i = 0;
        let rand = 0;
        while(i < 4){
            rand = getRandomInt(0, boothList.length);
            if(randomNumbs.length > 0 && randomNumbs.indexOf(rand) > -1){
                continue;
            }
            randomNumbs.push(rand);
            i++;
        }
    }

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
                            <div style={{background: '#000'}}>
                                {companyDetailData != null && companyDetailData.thumbnails.length > 0 ?
                                    <Imgslide list={companyDetailData != null ? companyDetailData.thumbnails : null} companyData={companyDetailData} />
                                    : null
                                }
                            </div>
                            {companyDetailData != null? <Profile data={companyDetailData} type='company' /> : null }
                        </CompanyNamePannel>
                        <div className='border'>
                            <Pannel title={languageData==null? '' : languageData.ExhibitorDescription}>
                                {companyDetailData != null && companyDetailData.exhibitor_description != null?
                                    companyDetailData.exhibitor_description.map((component, key)=> {
                                        switch(component.type){
                                            case "text":
                                                return <div key={key} className='text'>{component.value}</div>;
                                            case "video":
                                                return <Video key={key} height={'480px'} src={component.value}/>;
                                            case "thumbnails":
                                                return <Thumblist key={key} list={component.value} companyData={companyDetailData} /> ;
                                        }
                                    }): null
                                }
                            </Pannel>
                        </div>
                        <div className='border'>
                            <Tabpannel tabs={tabList} >
                                {tabItem != null && tabItem.length > 0?
                                    tabItem.map((tab: any, key)=> {
                                        return <div key={key} className={key+' hide'}>
                                            <TabContent component={tab.component} companyData={companyDetailData} />
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
                                <Documentlist title={languageData.mentoringDocument} list={companyDetailData.documents} />
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
        </CompanyDetailComp>
    )
}

interface CompanyDetailTitleCompProps {
    src: any
}
const CompanyDetailTitleComp = styled.div`
position: relative;
width: 100%;
height: 1016px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(props: CompanyDetailTitleCompProps) => (props.src != null ? props.src : '')});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
> *{
    position: absolute;
    top: 50%;
    left: calc(100vw/4);
}
`;
const CompanyNamePannel = styled.div`
width: 100%;
height: 455px;
> * {
    display: inline-block;
    vertical-align: top;
    width: 455px;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 8px;
    
    :first-child { margin-right: 40px; border: 0; }
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
        :first-child { margin-top: 40px; }
        :nth-child(2) { display: flex; }
        & .companyContents {
            flex: 1;
            width: 950px;
            & > * {
                margin-top: 40px;
            }
        }
        & .requestBox {
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
        padding-top: 80px;
        padding-bottom: 100px;
        & .panelTitle {
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            color: #000000;
        }
        & .boothList {
            padding-top: 40px;
            > * {
                display: inline-block;
                margin-right: 40px;
                :last-child { margin-right: 0; }
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