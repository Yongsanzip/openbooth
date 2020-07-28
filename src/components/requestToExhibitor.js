import React, {Component, createRef, useRef, useState} from 'react';
import styled from "styled-components";
import {Inputfield, Checkboxfield, Button, Tabpannel, Selectfield} from "./index";
import Calendar from 'react-calendar';

function RequestToExhibitor(props){
    const requestForm = useRef(null);
    const meetupForm = useRef(null);
    const tabList  = [{
        title: 'Inquiry/Request',
        name: 'inquiry'
    }, {
        title: 'Online Meet up',
        name: 'onlineMeetup'
    }]
    const selectList = [{
        name: 'value1',
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
    const [activeTab, setActiveTab] = useState(0);
    const _setActiveTab = (tab) => {
        setActiveTab(tab);
    }

    const _sendRequestToExhibitor = (e) => {
        // const target = this.state.requestForm.current;
        // console.log(values)
    }

    const inputFieldStyle = {
        background: '#ffffff'
    }

    const [date, setDate] = useState(new Date());
    const _setDate = (date) => {
        setDate(date)
    }
    return (
        <RequestToExhibitorComp>
            <Tabpannel tabs={tabList} activeTab={activeTab} changeActiveTab={_setActiveTab} noMargin={true}>
                <div className='tabContent inquiry hide'>
                    <div className='formpanel'>
                        <form ref={requestForm} onSubmit={()=> function(){ return false; } }>
                            <div className='border-bottom'>
                                <div className='title'>Visitor information</div>
                                <Inputfield name='name' placeholder='Name' width='inherit' style={inputFieldStyle} />
                                <Inputfield name='email' placeholder='Email' width='inherit' style={inputFieldStyle} />
                                <Inputfield name='company' placeholder='Company/affiliation' width='inherit' style={inputFieldStyle} />
                            </div>
                            <div className='border-bottom'>
                                <div className='title'>Inquiry/Request</div>
                                <Checkboxfield name='intro' text='Introduction materials' />
                                <Checkboxfield name='cost' text='Cost information' />
                                <Checkboxfield name='meeting' text='offline meeting request' />
                                <Checkboxfield name='collaboration' text='Collaboration proposal' />
                            </div>
                            <div className='border-bottom'>
                                <textarea placeholder='Detail' />
                            </div>
                            <div className='border-bottom btns'>
                                <Button fill={true} width={104} _clickBtn={_sendRequestToExhibitor}>Send</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='tabContent onlineMeetup hide'>
                    <div className='formpanel'>
                        <form ref={meetupForm} onSubmit={()=> function(){ return false; } }>
                            <div className='border-bottom'>
                                <div className='title'>Visitor information</div>
                                <Inputfield name='name' placeholder='Name' width='inherit' style={inputFieldStyle} />
                                <Inputfield name='email' placeholder='Email' width='inherit' style={inputFieldStyle} />
                                <Inputfield name='company' placeholder='Company/affiliation' width='inherit' style={inputFieldStyle} />
                            </div>
                            <div className='border-bottom'>
                                <div className='title'>Inquiry/Request</div>
                                <Inputfield name='phone' placeholder='Your phone' width='inherit' style={inputFieldStyle} />
                                <Selectfield name='country' text='Cost information' list={selectList} width={'100%'} type={'white'}/>
                                <Selectfield name='date' text='offline meeting request' list={selectList} width={'100%'} type={'white'} />
                                <Selectfield name='time' text='Collaboration proposal' list={selectList} width={'100%'} type={'white'} />
                            </div>
                            <div className='border-bottom'>
                                <textarea placeholder='Detail' />
                            </div>
                            <div className='border-bottom btns'>
                                <Button fill={true} width={104} _clickBtn={_sendRequestToExhibitor}>Send</Button>
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
            padding: 8px 12px 0 12px;
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
            padding: 8px 12px;
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
    overflow: hidden;
    :last-child { border-bottom: 0; }
}
`;

export default RequestToExhibitor;