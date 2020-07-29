import React, { Component } from 'react';
import styled from "styled-components";
import dummyImg from "../../assets/img/bg-dummy.png";
import Mentorinfo from "./mentorInfo";

function MentordetailContent(props){
    return (
        <MentordetailContentComp>
            <div>
                <img src={dummyImg} />
            </div>
            <div>
                <div>
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
height: 1000px;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 8px;
background: #fff;
overflow: hidden;
img {
    width: 1280px;
    height: auto;
}
> div:first-child {
    height: 719px;
    overflow: hidden;
}
> div:nth-child(2) {
    display: flex;
    height: 280px;
    & > div {
        &:first-child {
            width: 840px;
            border-right: 1px solid #E9E9E9;
            box-sizing: border-box;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            
            color: #999999;
            padding: 40px;
            & .title {
                font-weight: bold;
                font-size: 24px;
                line-height: 32px;
                color: #000000;
                margin-bottom: 24px;
            }
        }
        &:last-child {
            flex: 1;
            padding: 32px 30px 0 39px;
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