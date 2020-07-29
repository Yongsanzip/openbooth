import React, {Component, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../modules";

import {Hash, Accesscode, Custommodal, Img, Ellipsis} from "./../index"
import Mentorinfo from "./mentorInfo"

import dummyImg from "../../assets/img/bg-dummy.png";

function MenteeItem(props) {
    return (
        <MenteeComp>
            <Img src={props.src}></Img>
            <div className="menteeName">{props.name}</div>
        </MenteeComp>
    )
}

const MenteeComp = styled.div`
max-width: 200px;
> * {
    display: inline-block;
    vertical-align: middle;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #999999;
    :first-child {
        width: 24px;
        height: 24px;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 8px;
        margin-right: 4px;
    }
}
`;


function Mentoringcard(props){
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const cardRef = useRef(null);
    const [isShowModal, SetIsShowModal] = useState(false);

    useEffect(()=>{
        let cardEl:any;
        if (typeof cardRef !== 'undefined' &&
            typeof cardRef.current !== 'undefined') {
            cardEl = cardRef.current;
        }
        cardEl.addEventListener('click', _showModal);

        return function cleanup() {
            cardEl.removeEventListener('click', _showModal);
        };
    })

    const _showModal = (e) => {
        if(e != null) e.stopPropagation();
        SetIsShowModal(true);
    }
    const _closeModal = () => {
        SetIsShowModal(false);
    }

    const _onClickAccessBtn = (data) => {
        props._onClick(data);
        _closeModal();
    }

    const accessModalData = {
        title: languageData.accessCodeModalTitle,
        content: languageData.accessCodeModalContent
    }

    const hashStyle = {
        'padding': '2px 9px  !important',
        'font-weight': 'bold',
        'font-size': '10px',
        'line-height': '18px',
        'color': '#005CB9'
    };

    return (
        <Card ref={cardRef}>
            <Img src={dummyImg} />
            <div className="mentoringInfo">
                <div className="status">
                    <div className={props.data.isLive? 'isOpen live' : 'isOpen off'}>{props.data.isLive? languageData.live : languageData.off}</div>
                    <div className="hashes">
                        {props.data.hashtags && props.data.hashtags.length > 0 ?
                            props.data.hashtags.map((hashItem, key) => {
                                return (
                                    <Hash id={1} name={hashItem.title} style={hashStyle} key={key}/>)
                            }) : null }
                    </div>
                </div>
                <div className="title">
                    <Ellipsis line={2}>{props.data.title}</Ellipsis>
                </div>
                <div className="mentees">
                    <div className="title">{languageData.mentees}</div>
                    {props.data.mentees && props.data.mentees.length > 0 ?
                        props.data.mentees.map((mentee, key) => {
                            return (
                                <MenteeItem src={mentee.img} name={mentee.name} key={key}/>)
                        }) : null }
                </div>
            </div>
            <Mentorinfo data={props.data.mentorInfo} className="mentorInfo" padding={"32px 24px 24px 40px"} />
            <Custommodal showModal={isShowModal} closeModal={_closeModal} width={480} height={240}>
                <Accesscode data={accessModalData} btn={'Enter'}  _access={()=>_onClickAccessBtn(props.data)} />
            </Custommodal>
        </Card>
    )
}

const Card = styled.div`
width: 100%;
height: 280px;
display: flex;
margin-top: 40px;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 8px;
overflow: hidden;
transition: transform 0.5s 0s ease, box-shadow 0.3s 0s ease-in-out;
transform: translatey(0);
background: #ffffff;
:hover {
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
    transform: translatey(-4px);
}
> *:first-child {
    width: 358px;
    height: 280px;
}
> .mentoringInfo {
    flex: 1;
    padding-left: 40px;
    border-left: 1px solid #E9E9E9;
    border-right: 1px solid #E9E9E9;
    box-sizing: border-box;
    & .status {
        position: relative;
        margin-top: 24px;  
        & .isOpen {
            position: relative;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            color: #005CB9;
            padding-left: 20px;
            :before {
                content: '';
                position: absolute;
                top: 3px;
                left: 0;
                background: #005CB9;
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }
            &.off {
                color: #F58181;
                &:before {
                    background: #F58181;
                }
            }
        }
        & .hashes {
            position: absolute;
            top: -2px;
            right: 16px;
            > * {
                margin-right: 8px;
                :last-child { margin-right: 0 }
            }
        }
    }
    & .title {
        width: 400px;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #000000;
        margin-top: 10px;
    }
    & .mentees {
        > .title {
            display: block;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            color: #999999;    
            margin-top: 25px;
        }
        > * {
            display: inline-block;
            margin-top: 8px;
            width: 193px;
        }
    }
}
> :last-child {
    width: calc(440px - 67px);
}
`;

export default Mentoringcard;