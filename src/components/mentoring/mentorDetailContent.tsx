import React, {Component, useEffect, useState} from 'react';
import styled from "styled-components";
import dummyImg from "../../assets/img/bg-dummy.png";
import Mentorinfo from "./mentorInfo";
import {Hash, Video} from "../index";

function MentordetailContent(props){
    const hashStyle = {
        'padding': '3px 10px  !important',
        'font-weight': 'bold',
        'font-size': '10px',
        'line-height': '18px',
        'color': '#005CB9'
    };

    return (
        <MentordetailContentComp>
            <div>
                <Video height={props.isMobile == null || props.isMobile !== true? '720px': '204px'} src={null}/>
            </div>
            <div>
                <div>
                    <div className='hashes'>
                        <Hash id={1} name={'category'} style={hashStyle} />
                        <Hash id={1} name={'category'} style={hashStyle} />
                    </div>
                    <div className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vul</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur elit ac dolor laoreet iaculis.
                    Curabitur rutrum tempus facilisis. Quisque hendrerit enim sit amet velit porttitor lacinia. Proin ut magna nec velit egestas efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sed ligula lacinia, mollis sapien in, imperdiet dolor.
                </div>
                <Mentorinfo data={props.data} className="mentorInfo" />
            </div>
        </MentordetailContentComp>
    )
}

const MentordetailContentComp = styled.div`
width: 100%;
${({theme}) => theme.media.desktop`
border: 1px solid #E9E9E9;
border-radius: 8px;
height: 1000px;
background: #fff;
`}
${({theme}) => theme.media.mobile`
border: 0;
border-radius: 0;
height: auto;
background: #f7f7f9;
`}
box-sizing: border-box;
overflow: hidden;
> div:first-child {
    height: auto;
    overflow: hidden;
    > div > div {
        border-radius: 0;
    }
}
> div:nth-child(2) {
    display: flex;
    ${({theme}) => theme.media.desktop`
    height: 280px;
    `}
    ${({theme}) => theme.media.mobile`
    background: #fff;
    height: auto;
    flex-direction: column;
    margin: 16px 20px 0 20px;
    border: 1px solid #E9E9E9;
    border-radius: 8px;
    box-sizing: border-box;
    `}
    & > div {
        &:first-child {
            box-sizing: border-box;
            font-style: normal;
            font-weight: bold;
            color: #999999;
            ${({theme}) => theme.media.desktop`
            width: 840px;
            padding: 40px;
            font-size: 16px;
            line-height: 24px;
            border-right: 1px solid #E9E9E9;
            `}
            ${({theme}) => theme.media.mobile`
            width: 100%;
            padding: 16px;
            font-size: 12px;
            line-height: 20px;
            border-right: 0;
            `}
            & .title {
                color: #000000;
                font-weight: bold;
                ${({theme}) => theme.media.desktop`
                font-size: 24px;
                line-height: 32px;
                margin-bottom: 24px;
                `}
                ${({theme}) => theme.media.mobile`
                font-size: 14px;
                line-height: 22px;
                margin-bottom: 4px;
                `}
                
            }
            & .hashes {
                margin-bottom: 16px;
                ${({theme}) => theme.media.desktop`
                display: none;
                `}
                ${({theme}) => theme.media.mobile`
                display: block;
                `}
                > * {
                    margin-right: 4px;
                }
            }
        }
        &:last-child {
            flex: 1;
            ${({theme}) => theme.media.desktop`
            padding: 32px 30px 0 39px;
            `}
            ${({theme}) => theme.media.mobile`
            padding: 16px;
            `}
            & button {
                > svg {
                    margin-top: 2px;
                    margin-left: 5px;
                }
            }
        }
    }
}
`;


export default MentordetailContent;