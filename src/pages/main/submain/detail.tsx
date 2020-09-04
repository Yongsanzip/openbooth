import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules";
import {
    getItroductionReducer,
    getVisitorsReducer,
    setItroductionReducer, setVisitorsReducer
} from "../../../modules/introduction/introduction";

import {
    Tabpannel,
    Pannel,
    Infofields,
    Thumblist,
    Documentlist,
    Boardlist,
    Namecard, UserinfoModal, Sendmsg, Video, Img
} from './../../../components/index'
import {getBrowserSize, textLineBreak} from "../../../common/common";

function Detail(props){
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const dispatch = useDispatch();
    const introductionData = useSelector((state: RootState) => state.introductionReducer.data);
    const visitorsData = useSelector((state: RootState) => state.introductionReducer.visitors);
    useEffect(()=>{
        if(introductionData == null){
            dispatch(getItroductionReducer());
        }
        if(visitorsData == null){
            dispatch(getVisitorsReducer());
        }
    }, [introductionData, visitorsData]);
    useEffect(()=>{
        return()=>{
            dispatch(setItroductionReducer(null));
            dispatch(setVisitorsReducer(null));
        }
    }, []);

    useEffect(() => {
        _setDeviceType();
        window.addEventListener('resize', _setDeviceType);
        return () => {
            window.removeEventListener('resize', _setDeviceType);
        };
    }, []);

    const [activeTab, setActiveTab] = useState(0);
    const [selectedVisitor, setSelectedVisitor] = useState(null);
    const [showUserInfoModal, setShowUserInfoModal] = useState(false);
    const [showSendMsgModal, setShowSendMsgModal] = useState(false);
    const numberOfVisitorPage = 16;
    const [visitorsLimit, setVisitorsLimit] = useState(16);
    const [deviceType, setDeviceType] = useState('pc');

    const _setDeviceType = () => {
        setDeviceType(getBrowserSize());
    };


    const tabList = [{
        title: languageData.exhibitionDetails,
        name: 'details'
    }, {
        title: languageData.registerdVisitors,
        name: 'visitors'
    }];
    const exhibitInfo = [{
        'fieldname': languageData.name,
        'value': introductionData != null? introductionData.exhibition_name : ''
    },{
        'fieldname': languageData.exhibits,
        'value': introductionData != null? introductionData.exhibition_category  : ''
    },{
        'fieldname': languageData.date,
        'value': introductionData != null? introductionData.start_date + "~" + introductionData.end_date : ''
    },{
        'fieldname': languageData.hosted,
        'value': introductionData != null? introductionData.hosted  : ''
    },{
        'fieldname': languageData.organized,
        'value': introductionData != null? introductionData.organized  : ''
    },{
        'fieldname': languageData.operated,
        'value': introductionData != null? introductionData.operated  : ''
    }];
    const msgModalData = {
        name: introductionData != null? introductionData.exhibition_name : '',
        email: introductionData != null? introductionData.exhibition_email : ''
    };

    const _sentMsg = () => {
        console.log("_sentMsg");
        setShowSendMsgModal(false);
    };

    const _setActiveTab = (idx) => {
        console.log("_setActiveTab::", idx);
        setActiveTab(idx);
    };

    const _onShowUserInfoModal = (data) => {
        setSelectedVisitor(data);
        setShowUserInfoModal(true);
    };
    const _onCloseUserInfoModal = () => {
        setShowUserInfoModal(false);
    };

    const width = 840;

    const _setPanelContent = (component, key) => {
        switch(component.type){
            case "text":
                return <div key={key} className='text'>{textLineBreak(component.value)}</div>;
            case "video":
                return <Video key={key} height={'480px'} src={component.value}/>;
            case "thumbnails":
                return <Thumblist key={key} list={component.value} size={deviceType !== 'pc'? null : {width: 144, height: 144}} marginRight={deviceType !== 'pc'? 6 : 18} isMobile={deviceType !== 'pc'} /> ;
        }
    };

    return (
        <div>
            <DescriptionComp width={width}>
                <div>
                    <Img src={introductionData != null? introductionData.exhibition_thumbnail : ''} width={'100%'} height={'250px'} />
                    <div className='title'>{introductionData != null? introductionData.exhibition_name : ''}</div>
                    {introductionData != null && introductionData.exhibition_description != null? textLineBreak(introductionData.exhibition_description) : ''}
                    <div className='sendMailBtn' onClick={()=>setShowSendMsgModal(true)}>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V4L8.94 8.34C9.59 8.75 10.41 8.75 11.06 8.34L18 4V13C18 13.55 17.55 14 17 14ZM10 7L2 2H18L10 7Z" fill="#999999"/>
                        </svg>
                    </div>
                </div>
            </DescriptionComp>
            <TabpanelComp width={width}>
                <Tabpannel tabs={tabList} activeTab={activeTab} _onChangeTab={_setActiveTab} width={width} titleBg={'#ffffff'} contentBg={'#E5E5E5'}>
                    <div className='tabContent details hide'>
                        <div className='border'>
                            <Pannel title={languageData.exhibitionInformation}>
                                <Infofields list={exhibitInfo} fieldWidth={110}/>
                            </Pannel>
                        </div>
                        <div className='border'>
                            <Pannel title={languageData.exhibitionIntroduction}>
                                { introductionData != null && introductionData.introduction != null && introductionData.introduction.length > 0 ?
                                    introductionData.introduction.map((component, key)=> {
                                        return _setPanelContent(component, key);
                                    })
                                    : null
                                }
                            </Pannel>
                        </div>
                        <div className='border'>
                            <Pannel title={languageData.pressRelease}>
                                <Boardlist list={introductionData != null? introductionData.press_release : []}/>
                            </Pannel>
                        </div>
                        <div className='border'>
                            <Documentlist title={languageData.exhibitDocuments} list={introductionData != null? introductionData.documents : []} isMobile={deviceType !== 'pc'}/>
                        </div>
                    </div>
                    <div className='tabContent visitors hide'>
                        <div className='visitorCount'>
                            {languageData.numberOfVisitors} : {visitorsData != null? visitorsData.length : 0}
                        </div>
                        <div className='visitorList'>
                            {visitorsData != null && visitorsData.length > 0 ?
                                deviceType !== 'pc'?
                                    visitorsData.slice(0, visitorsLimit).map((el, key) => {
                                        return (
                                            <div key={key}><Namecard data={el} showMoreinfoBtn={()=>_onShowUserInfoModal(el)} /></div>
                                        )
                                    })
                                    :
                                    visitorsData.map((el, key) => {
                                        return (
                                            <div key={key}><Namecard data={el} showMoreinfoBtn={()=>_onShowUserInfoModal(el)} /></div>
                                        )
                                    })
                                : null
                            }
                        </div>
                        {deviceType !== 'pc' && visitorsData.length > visitorsLimit?
                            <div className={'showMore'} onClick={()=>setVisitorsLimit(visitorsLimit + numberOfVisitorPage)}>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.41 0.589843L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L-6.16331e-08 1.99984L1.41 0.589843Z" fill="#999999"/>
                                </svg>
                            </div>
                            : null
                        }
                    </div>
                </Tabpannel>
            </TabpanelComp>
            <UserinfoModal data={selectedVisitor} showModal={showUserInfoModal} handleCloseModal={_onCloseUserInfoModal} />
            <Sendmsg showModal={showSendMsgModal} data={msgModalData} closeModal={()=>setShowSendMsgModal(false)} sentMsgToMentor={_sentMsg} />
        </div>
    )
}

interface TabpanelCompProps {
    width: any
}
const TabpanelComp = styled.div`
.tabContent {
    background: #f7f7f9;
    > * {
        width: ${(props: TabpanelCompProps) => (props.width != null ? props.width+'px;' : '100%')};
        margin: 0 auto;
        ${({theme}) => theme.media.desktop`
        padding-top: 40px;
        `}
        ${({theme}) => theme.media.mobile`
        padding-top: 0;
        width: 100%;
        `}
    }
    & .border {
        ${({theme}) => theme.media.desktop`
        padding-top: 40px;
        `}
        ${({theme}) => theme.media.mobile`
        padding-top: 16px;
        `}
        > * {
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
            overflow: hidden;
        }
        :last-child {
            ${({theme}) => theme.media.desktop`
            padding-bottom: 120px;
            `}
            ${({theme}) => theme.media.mobile`
            padding-bottom: 40px;
            `}
        }
    }
    & .visitors {
        position: relative;
        & > * {
            ${({theme}) => theme.media.desktop`
            padding-top: 40px;
            `}
            ${({theme}) => theme.media.mobile`
            padding-top: 16px;
            `}
        }
        & .visitorCount{
            font-weight: bold;
            color: #999999;
            ${({theme}) => theme.media.desktop`
            font-size: 16px;
            line-height: 24px;
            `}
            ${({theme}) => theme.media.mobile`
            font-size: 12px;
            line-height: 20px;
            `}
        }
        & .visitorList {
             > * {
                display: inline-block;
                :nth-child(2n) { margin-right: 0; }
                ${({theme}) => theme.media.desktop`
                width: 400px;
                margin-right: 40px;
                margin-bottom: 40px;
                :last-child { padding-bottom: 80px;margin-bottom: 0; }
                `}
                ${({theme}) => theme.media.mobile`
                width: 100%;
                margin-right: 16px;
                margin-bottom: 20px;
                :last-child { padding-bottom: 40px;margin-bottom: 0; }
                `}
             }
        }
        & .showMore {
            position: absolute;
            bottom: 0;
            height: 40px;
            line-height: 40px;
            padding: 0;
            text-align: center;
        }
    }
}
`;

interface DescriptionCompProps {
    width: any
}
const DescriptionComp = styled.div`
width: 100%;
background: #ffffff;
> div {
    position: relative;
    max-width: ${(props: DescriptionCompProps) => (props.width != null ? props.width+'px;' : '100%')};
    ${({theme}) => theme.media.desktop`
    padding: 40px 0 80px 0;
    `}
    ${({theme}) => theme.media.mobile`
    padding: 24px 20px 40px 20px;
    `}
    margin: 0 auto;
    text-align: center;
    font-weight: normal;
    color: #999999;
    ${({theme}) => theme.media.desktop`
    font-size: 16px;
    line-height: 24px;
    `}
    ${({theme}) => theme.media.mobile`
    font-size: 12px;
    line-height: 20px;
    `}
    & .title {
        font-weight: bold;
        color: #000000;
        ${({theme}) => theme.media.desktop`
        margin-top: 32px;
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 24px;
        `}
        ${({theme}) => theme.media.mobile`
        margin-top: 24px;
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 22px;
        `}
    }
    & .sendMailBtn {
        position: absolute;
        top: 40px;
        right: 0;
    }
}
`;

export default Detail;
