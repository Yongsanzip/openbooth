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
    Button, Video, Imgslide
} from "../../../../components";

import dummyImg from "../../../../assets/img/bg-dummy.png";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../../../modules";
import {getCompanyDetailDataReducer} from "../../../../modules/exhibition/exhibition";

// import { getBoothListReducer, getSelectedExhibitCategoryReducer } from "../../../../modules/exhibition/exhibition";


function Companydetail(props) {
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
    const companyInfo = {
        img: dummyImg,
        name: 'Company',
        email: 'abcdef@ghijklmnopqr.com',
        ltd: 'Global Co., Ltd',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.',
        country: 'Republic of Korea',
        phone: '+82-10-1234-1234',
        company: 'Bank of America',
        department: 'Design team',
        position: 'UI/UX designer'
    };
    const documentList = [{
        title: 'Company Co, ltd. Company Introduction_2020.04.31.pdf'
    },{
        title: 'Phasellus dignissin vitae velit.pdf'
    }];
    const accessModalData = {
        title: 'To enter another mentoring room'
    };
    const questionList = [{
        question: 'Company Co, ltd. Company Introduction_2020.04.31.pdf',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.'
    },{
        question: 'Phasellus dignissin vitae velit.pdf',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.'
    }];
    const businessInfo = [{
        'fieldname': 'Business model',
        'value': 'B2B, B2G, B2C'
    },{
        'fieldname': 'Currnet entry area',
        'value': '동북아시아, 대한민국, 중국, 일본'
    },{
        'fieldname': 'Desired entry area',
        'value': '유럽, 북아메리카, 영국, 프랑스, 미국'
    },{
        'fieldname': 'Sell, contract condition',
        'value': '단품 판매'
    },{
        'fieldname': 'Desired investment stage',
        'value': 'Series-A'
    }];
    const thumbList = [{
        src: ''
    },{
        src: ''
    },{
        src: ''
    },{
        src: ''
    },{
        src: ''
    },{
        src: ''
    },{
        src: ''
    },{
        src: ''
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
            <Detailmenubar data={companyInfo} title={companyInfo.name} />
            <CompanyDetailTitleComp src={companyDetailData != null? companyDetailData.main_banner : null}>
                {/*<Img src={companyInfo.img} width="100%" height="1016px"/>*/}
                <div className={'info'}>
                    <div>Company name</div>
                    <h1>Lorem ipsum dolor sit amet Pellentesque vitae</h1>
                    <div>
                        <span className={'category'}>#category</span>
                        <span className={'category'}>#category</span>
                        <span className={'category'}>#category</span>
                    </div>
                    <div>Vestibulum tincidunt mattis nunc, sit amet iaculis dui varius eu. Morbi efficitur semper velit sit amet euismod. Proin scelerisque suscipit aliquam.</div>
                    <div className={'btns'}>
                        <Button fill={'fill'} width={160} height={48}>Now Live!</Button>
                        <Button type={'whiteLine'} width={160} height={48}>View Information</Button>
                    </div>
                </div>
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
                                    <Imgslide list={companyDetailData != null ? companyDetailData.thumbnails : null}/>
                                    : null
                                }
                            </div>
                            {companyDetailData != null? <Profile data={companyDetailData} type='company' /> : null }
                        </CompanyNamePannel>
                        <div className='border'>
                            <Pannel title="Exhibitor description">
                                {companyDetailData != null && companyDetailData.exhibitor_description != null?
                                    companyDetailData.exhibitor_description.map((component, key)=> {
                                        switch(component.type){
                                            case "text":
                                                return <div key={key} className='text'>{component.value}</div>;
                                            case "video":
                                                return <Video key={key} height={'480px'} src={component.value}/>;
                                            case "thumbnails":
                                                return <Thumblist key={key} list={component.value} /> ;
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
                                            <TabContent component={tab.component} />
                                        </div>
                                    })
                                    : null
                                }
                                <div className='product1 hide'>
                                    <Pannel noPadding>
                                        <Video height={'480px'} />
                                        <div className='text'>product 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum Phasellus sed augue ex. Vestibulum est urna.</div>
                                        <Thumblist list={thumbList} />
                                    </Pannel>
                                </div>
                                <div className='product2 hide'>
                                    <Pannel noPadding>
                                        <div className='text'>product 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum Phasellus sed augue ex. Vestibulum est urna.</div>
                                        <Video height={'480px'} />
                                        <Thumblist list={thumbList} />
                                    </Pannel>
                                </div>
                            </Tabpannel>
                        </div>
                        <div className='border'>
                            <Pannel title="Business information">
                                <Infofields list={businessInfo} />
                            </Pannel>
                        </div>
                        {companyDetailData != null && companyDetailData.documents != null?
                            <div className='border'>
                                <Documentlist title="Mentoring documents" list={companyDetailData.documents} />
                            </div>
                            : null
                        }
                        {companyDetailData != null && companyDetailData.questions != null?
                            <div className='border'>
                                <Qnalist title="Frequently asked questions" list={companyDetailData.questions} />
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
                    <div className='panelTitle'>Related online booth</div>
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
> .info{
    position: absolute;
    top: 50%;
    left: calc(100vw/4);
    width: 620px;
    height: 400px;
    margin-top: -200px;
    overflow: hidden;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: #FFFFFF;
    > * {
        margin-bottom: 32px;
        :last-child { margin-bottom: 0 }
        &.btns {
            margin-top: 16px;
            > * {
                display: inline-block;
                margin-right: 16px;
                :last-child { margin-right: 0 }
            }
        }
    }
    > h1 {
        font-weight: 800;
        font-size: 40px;
        line-height: 52px;
    }
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
        margin-bottom: 100px;
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