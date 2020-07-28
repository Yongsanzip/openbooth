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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis.
                </div>
                <Mentorinfo data={props.data} className="mentorInfo" />
            </div>
        </MentordetailContentComp>
    )
}

const MentordetailContentComp = styled.div`
width: 100%;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 8px;
background: #fff;
overflow: hidden;
img {
    width: 1280px;
    height: auto;
}
> div:nth-child(2) {
    display: flex;
    & > div {
        &:first-child {
            width: 840px;
            border-right: 1px solid #E9E9E9;
            box-sizing: border-box;
            font-weight: normal;
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
        }
    }
}
`;


export default MentordetailContent;