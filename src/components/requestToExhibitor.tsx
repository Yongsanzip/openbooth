import React, {useState} from 'react';
import styled from "styled-components";
import base64 from 'base-64';
import {RootState} from "../modules";
import { useSelector } from 'react-redux';

import {Inputfield, Checkboxfield, Button, Tabpannel, Selectfield, CalendarField} from "./index";
import {useClientRect} from "../common/common";
import DateRangePicker from "./dateRangePicker";

function RequestToExhibitor(props){
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const [requestFormEl, requestForRef] = useClientRect(null);
    const [warnningReqEmailEl, warnningReqEmailRef] = useClientRect(null);
    const [meetupFormEl, meetupFormRef] = useClientRect(null);
    const [warnningMeetEmailEl, warnningMeetEmailRef] = useClientRect(null);
    const [introduction, setIntroduction] = useState(false);
    const [constInfo, setConstInfo] = useState(false);
    const [offMeetReq, setOffMeetReq] = useState(false);
    const [collab, setCollab] = useState(false);
    const [countryReset, setCountryReset] = useState(false);
    const [reqTimeReset, setReqTimeReset] = useState(false);
    const [reqDateReset, setReqDateReset] = useState(false);

    const token = sessionStorage.getItem('token');
    const tokenData = token != null ? token.split('.') : [];
    const userInfo = JSON.parse(base64.decode(tokenData[1]));

    const _setIntroduction = () => {
        setIntroduction(!introduction);
    };
    const _setConstInfo = () => {
        setConstInfo(!constInfo);
    };
    const _setOffMeetReq = () => {
        setOffMeetReq(!offMeetReq);
    };
    const _setCollab = () => {
        setCollab(!collab);
    };

    const tabList  = [{
        title: languageData.inquiryRequest,
        name: 'inquiry'
    }, {
        title: languageData.onlineMeetUp,
        name: 'onlineMeetup'
    }];
    const selectList = [{
        name: 'Republic of Korea',
        value: '1'
    },{
        name: 'value2',
        value: '2'
    },{
        name: 'value3',
        value: '3'
    },{
        name: 'value4',
        value: '4'
    },{
        name: 'value',
        value: '5'
    },{
        name: 'value',
        value: '6'
    },{
        name: 'value',
        value: '7'
    },{
        name: 'value',
        value: '8'
    }];

    const inputFieldStyle = {
        background: '#ffffff',
        'font-weight': 'bold'
    };

    const sendButtonStyle = {
        height: '36px',
        padding: '7px 35px'
    };

    const onChangeTab = (activeTabIdx) => {
        if(activeTabIdx === 0){
            resetFormInquiry();
        }
        else{
            resetFormOnlineMeetUp();
        }
    };

    const resetFormInquiry = () => {
        if(requestFormEl == null || requestFormEl.current == null) return;

        const inputs = requestFormEl.querySelectorAll("input");
        let value = '';
        inputs.forEach(function(input){
            value = '';
            if(userInfo[input.getAttribute('name')] != null) value = userInfo[input.getAttribute('name')];
            input.value = value;
        });

        setIntroduction(false);
        setConstInfo(false);
        setOffMeetReq(false);
        setCollab(false);
        requestFormEl.querySelector('textarea').value = '';
    };

    const resetFormOnlineMeetUp = () => {
        if(meetupFormEl == null || meetupFormEl.current == null) return;

        const inputs = meetupFormEl.querySelectorAll("input");
        let value = '';
        inputs.forEach(function(input){
            value = '';
            if(userInfo[input.getAttribute('name')] != null) value = userInfo[input.getAttribute('name')];
            input.value = value;
        });

        setCountryReset(true);
        setReqTimeReset(true);
        setReqDateReset(true);
    };

    const _sendInquiry = () => {
        const formData = new FormData();

        formData.append('name', requestFormEl.querySelector('[name=name]').value);
        formData.append('email', requestFormEl.querySelector('[name=email]').value);
        formData.append('company', requestFormEl.querySelector('[name=company]').value);
        formData.append('detail', requestFormEl.querySelector('[name=detail]').value);

        let checkValues:any = [];
        if(introduction) checkValues.push("Introduction materials");
        if(constInfo) checkValues.push("Cost information");
        if(offMeetReq) checkValues.push("offline meeting request");
        if(collab) checkValues.push("Collaboration proposal");

        formData.append('checkeList', checkValues.join(','));

        //parameter

        // console.log(formData.get('name'));
        // console.log(formData.get('email'));
        // console.log(formData.get('company'));
        // console.log(formData.get('checkeList'));
        // console.log(formData.get('detail'));

    };

    const _sendOnlineMeetUp = () => {
        const formData = new FormData();

        formData.append('name', meetupFormEl.querySelector('[name=name]').value);
        formData.append('email', meetupFormEl.querySelector('[name=email]').value);
        formData.append('company', meetupFormEl.querySelector('[name=company]').value);
        formData.append('phone', meetupFormEl.querySelector('[name=phone]').value);
        formData.append('country', meetupFormEl.querySelector('[name=country]').value);
        formData.append('requestStartDate', meetupFormEl.querySelector('[name=sdate]').value);
        formData.append('requestEndDate', meetupFormEl.querySelector('[name=edate]').value);
        formData.append('time', meetupFormEl.querySelector('[name=time]').value);

        //parameter

        // console.log(formData.get('name'));
        // console.log(formData.get('email'));
        // console.log(formData.get('company'));
        // console.log(formData.get('requestStartDate'), '~', formData.get('requestEndDate'));
        // console.log(formData.get('phone'));
        // console.log(formData.get('country'));
        // console.log(formData.get('time'));
    };
    const emailValidator = (inputValue:string) => {
        const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if(inputValue == null || inputValue.length < 1){
            return {
                result: false,
                msg: languageData.emptyValueMsg
            };
        }
        else if (inputValue.match(regExp) == null) {
            return {
                result: false,
                msg: languageData.incorrectEmailFormat
            };
        }
        return {
            result: true,
            value: inputValue
        };
    };

    const _checkReqEmailFormat = () => {
        const inputValue = requestFormEl.querySelector('[name=email]').value;
        const check = emailValidator(inputValue);
        if(!check.result){
            warnningReqEmailEl.style.display = 'block';
            warnningReqEmailEl.innerText = check.msg;
            return false;
        }
        warnningReqEmailEl.style.display = 'none';
        return inputValue;
    };

    const _checkMeetEmailFormat = () => {
        const inputValue = meetupFormEl.querySelector('[name=email]').value;
        const check = emailValidator(inputValue);
        if(!check.result){
            warnningMeetEmailEl.style.display = 'block';
            warnningMeetEmailEl.innerText = check.msg;
            return false;
        }
        warnningMeetEmailEl.style.display = 'none';
        return inputValue;
    };

    const checkBoxStyle = {
        background: '#ffffff',
        'border-color': '#E9E9E9',
        hover: {
            background: '#DBDBDB',
            'border-color': '#E9E9E9'
        },
        checked: {
            background: '#005CB9',
            'border-color': '#E9E9E9'
        }
    };
    const checkBoxTextStyle = {
        'font-size': '14px',
        'font-weight': 'bold'
    };

    return (
        <RequestToExhibitorComp>
            <Tabpannel tabs={tabList} noMargin={true} _onChangeTab={onChangeTab} type={'contactBox'}>
                <div className='tabContent inquiry hide'>
                    <div className='formpanel'>
                        <form ref={requestForRef} onSubmit={()=> function(){ return false; } }>
                            <div className='border-bottom'>
                                <div className='title'>{languageData.visitorInformation}</div>
                                <Inputfield name='name' placeholder={languageData.name} padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.name} />
                                <div className='relative'>
                                    <Inputfield name='email' placeholder={languageData.email} padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.email} validator={_checkReqEmailFormat} />
                                    <div ref={warnningReqEmailRef} className={'warn'}>
                                        Email format is incorrect.
                                    </div>
                                </div>
                                <Inputfield name='company' placeholder={languageData.company} padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.company} />
                            </div>
                            <div className='border-bottom'>
                                <div className='title'>{languageData.inquiryRequest}</div>
                                <Checkboxfield name='intro' text={languageData.introductionMaterials} onChange={_setIntroduction} checked={introduction} textStyle={checkBoxTextStyle} style={checkBoxStyle} />
                                <Checkboxfield name='cost' text={languageData.costInformation} onChange={_setConstInfo} checked={constInfo} textStyle={checkBoxTextStyle} style={checkBoxStyle} />
                                <Checkboxfield name='meeting' text={languageData.offlineMeetingReq} onChange={_setOffMeetReq} checked={offMeetReq} textStyle={checkBoxTextStyle} style={checkBoxStyle} />
                                <Checkboxfield name='collaboration' text={languageData.collaborationProposal} onChange={_setCollab} checked={collab} textStyle={checkBoxTextStyle} style={checkBoxStyle} />
                            </div>
                            <div className='border-bottom'>
                                <textarea name='detail' placeholder={languageData.details} />
                            </div>
                            <div className='border-bottom btns'>
                                <Button fill={true} width={104} style={sendButtonStyle} _clickBtn={_sendInquiry}>Send</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='tabContent onlineMeetup hide'>
                    <div className='formpanel'>
                        <form ref={meetupFormRef} onSubmit={()=> function(){ return false; } }>
                            <div className='border-bottom'>
                                <div className='title'>{languageData.visitorInformation}</div>
                                <Inputfield name='name' placeholder={languageData.name} padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.name} />
                                <div className='relative'>
                                    <Inputfield name='email' placeholder={languageData.email} padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.email} validator={_checkMeetEmailFormat} />
                                    <div ref={warnningMeetEmailRef} className={'warn'}>
                                        Email format is incorrect.
                                    </div>
                                </div>
                                <Inputfield name='company' placeholder={languageData.company} padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.company} />
                            </div>
                            <div className='border-bottom'>
                                <div className='title'>{languageData.inquiryRequest}</div>
                                <Inputfield name='phone' placeholder={languageData.yourPhone} padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.phone} />
                                <Selectfield name='country' text={languageData.yourContry} list={selectList} width={'100%'} type={'white'} padding={'9px 12px'} value={userInfo.country} rows={2} reset={countryReset} afterReset={()=>setCountryReset(false)}/>
                                <DateRangePicker />
                                <Selectfield name='time' text={languageData.reqTime} list={selectList} width={'100%'} type={'white'} padding={'9px 12px'} reset={reqTimeReset} afterReset={()=>setReqTimeReset(false)} />
                            </div>
                            <div className='border-bottom btns'>
                                <Button fill={true} width={104} style={sendButtonStyle} _clickBtn={_sendOnlineMeetUp}>Send</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Tabpannel>
        </RequestToExhibitorComp>
    )
}

const RequestToExhibitorComp = styled.div`
background: #ffffff;
border-radius: 8px;
.tabTitle ul {
    display: flex;
}
.tabTitle li {
    display: block;
    line-height: 56px;
    width: 50%;
    margin: 0;
    border-right: 1px solid #E9E9E9;
    box-sizing: border-box;
    text-align: center;
    :last-child { border-right: 0 }
}
.formpanel {
    > form {
        > div {
            padding: 8px 12px 4px 12px;
            > * {
                margin-bottom: 8px;
            }
            &.btns {
                text-align: right;
            }
        }
        & .relative { position: relative; }
        & .warn { 
            color: #F58181;
            display: none;
            position: absolute;
            top: 9px;
            right: 12px;
            font-size: 12px;
            line-height: 20px;
        }
        & .title {
            padding-top: 8px;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            color: #000000;
        }
        & textarea {
            resize: none;
            width: 100%;
            height: 185px;
            background: #ffffff;
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            color: #999999;
            padding: 8px 12px 0 12px;
            margin-bottom: 0;
            :focus { outline: none; }
            ::placeholder {
                font-weight: bold;
                font-size: 14px;
                color: #999999;
            }
        }
    }
}
.border-bottom {
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    // overflow: hidden;
    :last-child { border-bottom: 0; }
}
`;

export default RequestToExhibitor;