import React, {Component, createRef, useRef, useState} from 'react';
import styled from "styled-components";
import {Inputfield, Checkboxfield, Button, Tabpannel, Selectfield, CalendarField} from "./index";
import base64 from 'base-64';
import {DayRange} from "react-modern-calendar-datepicker";

function RequestToExhibitor(props){
    const requestForm = useRef(null);
    const meetupForm = useRef(null);
    const [introduction, setIntroduction] = useState(false);
    const [constInfo, setConstInfo] = useState(false);
    const [offMeetReq, setOffMeetReq] = useState(false);
    const [collab, setCollab] = useState(false);
    const [countryReset, setCountryReset] = useState(false);
    const [reqTimeReset, setReqTimeReset] = useState(false);
    const [reqDateReset, setReqDateReset] = useState(false);
    const [dayRange, setDayRange] = React.useState<DayRange>({
        from: null,
        to: null
    });

    const token = sessionStorage.getItem('token');
    const tokenData = token != null ? token.split('.') : new Array();
    const userInfo = JSON.parse(base64.decode(tokenData[1]));

    const _setIntroduction = () => {
        setIntroduction(!introduction);
    }
    const _setConstInfo = () => {
        setConstInfo(!constInfo);
    }
    const _setOffMeetReq = () => {
        setOffMeetReq(!offMeetReq);
    }
    const _setCollab = () => {
        setCollab(!collab);
    }

    const tabList  = [{
            title: 'Inquiry/Request',
            name: 'inquiry'
        }, {
            title: 'Online Meet up',
            name: 'onlineMeetup'
    }]
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
    }]

    const inputFieldStyle = {
        background: '#ffffff',
        'font-weight': 'bold'
    }

    const sendButtonStyle = {
        height: '36px',
        padding: '7px 35px'
    }

    const onChangeTab = (activeTabIdx) => {
        if(activeTabIdx == 0){
            resetFormInquiry();
        }
        else{
            resetFormOnlineMeetUp();
        }
    }

    const resetFormInquiry = () => {
        let requestFormEl:any;
        if (typeof requestForm !== 'undefined' &&
            typeof requestForm.current !== 'undefined') {
            requestFormEl = requestForm.current;
        }
        const inputs = requestFormEl.querySelectorAll("input");
        let value = '';
        inputs.forEach(function(input){
            value = '';
            if(userInfo[input.getAttribute('name')] != null) value = userInfo[input.getAttribute('name')];
            input.value = value;
        })

        setIntroduction(false);
        setConstInfo(false);
        setOffMeetReq(false);
        setCollab(false);
        requestFormEl.querySelector('textarea').value = '';
    }

    const resetFormOnlineMeetUp = () => {
        let meetupFormEl:any;
        if (typeof meetupForm !== 'undefined' &&
            typeof meetupForm.current !== 'undefined') {
            meetupFormEl = meetupForm.current;
        }
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
    }

    const _sendInquiry = (e) => {
        let requestFormEl:any;
        if (typeof requestForm !== 'undefined' &&
            typeof requestForm.current !== 'undefined') {
            requestFormEl = requestForm.current;
        }
        const formData = new FormData(requestFormEl);
        if(introduction) formData.append('intro', 'checked');
        if(constInfo) formData.append('cost', 'checked');
        if(offMeetReq) formData.append('meeting', 'checked');
        if(collab) formData.append('collaboration', 'checked');

    }

    const _sendOnlineMeetUp = (e) => {
        let meetupFormEl:any;
        if (typeof meetupForm !== 'undefined' &&
            typeof meetupForm.current !== 'undefined') {
            meetupFormEl = meetupForm.current;
        }
        const formData = new FormData(meetupFormEl);
        if(dayRange.from != null){
            let from = '';
            if(dayRange != null && dayRange.from != null){
                from = dayRange.from.year+'/'+dayRange.from.month+'/'+dayRange.from.day;
            }
            let to = '';
            if(dayRange != null && dayRange.to != null){
                to = dayRange.to.year+'/'+dayRange.to.month+'/'+dayRange.to.day;
            }

            formData.append('dateFrom', from);
            formData.append('dateTo', to);
        }

        console.log(formData.get('country'))
        console.log(formData.get('dateFrom'))
        console.log(formData.get('time'))
    }

    return (
        <RequestToExhibitorComp>
            <Tabpannel tabs={tabList} noMargin={true} _onChangeTab={onChangeTab}>
                <div className='tabContent inquiry hide'>
                    <div className='formpanel'>
                        <form ref={requestForm} onSubmit={()=> function(){ return false; } }>
                            <div className='border-bottom'>
                                <div className='title'>Visitor information</div>
                                <Inputfield name='name' placeholder='Name' padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.name} />
                                <Inputfield name='email' placeholder='Email'padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.email} />
                                <Inputfield name='company' placeholder='Company/affiliation'padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.company} />
                            </div>
                            <div className='border-bottom'>
                                <div className='title'>Inquiry/Request</div>
                                <Checkboxfield name='intro' text='Introduction materials' onChange={_setIntroduction} checked={introduction} />
                                <Checkboxfield name='cost' text='Cost information' onChange={_setConstInfo} checked={constInfo} />
                                <Checkboxfield name='meeting' text='offline meeting request' onChange={_setOffMeetReq} checked={offMeetReq} />
                                <Checkboxfield name='collaboration' text='Collaboration proposal' onChange={_setCollab} checked={collab} />
                            </div>
                            <div className='border-bottom'>
                                <textarea name='detail' placeholder='Detail' />
                            </div>
                            <div className='border-bottom btns'>
                                <Button fill={true} width={104} style={sendButtonStyle} _clickBtn={_sendInquiry}>Send</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='tabContent onlineMeetup hide'>
                    <div className='formpanel'>
                        <form ref={meetupForm} onSubmit={()=> function(){ return false; } }>
                            <div className='border-bottom'>
                                <div className='title'>Visitor information</div>
                                <Inputfield name='name' placeholder='Name' padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.name} />
                                <Inputfield name='email' placeholder='Email' padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.email} />
                                <Inputfield name='company' placeholder='Company/affiliation' padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.company} />
                            </div>
                            <div className='border-bottom'>
                                <div className='title'>Inquiry/Request</div>
                                <Inputfield name='phone' placeholder='Your phone' padding={'9px 12px'} width='inherit' style={inputFieldStyle} value={userInfo.phone} />
                                <Selectfield name='country' text='Cost information' list={selectList} width={'100%'} type={'white'} value={userInfo.country} rows={2} reset={countryReset} afterReset={()=>setCountryReset(false)}/>
                                <CalendarField name='date' placeholder={'Request date'} dayRange={dayRange} setDayRange={setDayRange} reset={reqDateReset} afterReset={()=>setReqDateReset(false)} />
                                <Selectfield name='time' text='Collaboration proposal' list={selectList} width={'100%'} type={'white'} reset={reqTimeReset} afterReset={()=>setReqTimeReset(false)} />
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
        & .title {
            padding-top: 8px;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            color: #000000;
        }
        & textarea {
            width: 100%;
            height: 185px;
            background: #F7F7F9;
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
            font-weight: normal;
            font-size: 14px;
            line-height: 22px;
            color: #999999;
            padding: 8px 12px 0 12px;
            margin-bottom: 0;
            :focus { outline: none; }
            ::placeholder {
                font-weight: normal;
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