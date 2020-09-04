import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import {RootState} from "../../modules";

import {Hash, Accesscode, Custommodal, Img, Ellipsis} from "./../index"
import Mentorinfo from "./mentorInfo"

import {getBrowserSize} from "../../common/common";

function MenteeItem(props) {
    return (
        <MenteeComp>
            <Img src={props.src}/>
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
    const [deviceType, setDeviceType] = useState('pc');
    const _setDeviceType = () => {
        setDeviceType(getBrowserSize());
    };

    useEffect(()=>{
        _setDeviceType();
        let cardEl:any;
        if (typeof cardRef !== 'undefined' &&
            typeof cardRef.current !== 'undefined') {
            cardEl = cardRef.current;
        }
        cardEl.addEventListener('click', _showModal);
        window.addEventListener('resize', _setDeviceType);

        return function cleanup() {
            cardEl.removeEventListener('click', _showModal);
            window.removeEventListener('resize', _setDeviceType);
        };
    }, []);

    const _showModal = (e) => {
        if(e != null) e.stopPropagation();
        SetIsShowModal(true);
    };
    const _closeModal = () => {
        SetIsShowModal(false);
    };

    const _onClickAccessBtn = (data) => {
        props._onClick(data);
        _closeModal();
    };

    const hashStyle = {
        'padding': '2px 9px  !important',
        'font-weight': 'bold',
        'font-size': '10px',
        'line-height': '18px',
        'color': '#005CB9'
    };

    return (
        <Card ref={cardRef}>
            <Img src={null} widthFull={true}/>
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
            <Mentorinfo data={props.data.mentorInfo} className="mentorInfo" padding={deviceType === "pc"? "32px 24px 24px 40px" : "16px"} isMobile={deviceType ==='mobile'} />
            <Custommodal showModal={isShowModal} closeModal={_closeModal} width={deviceType === "pc"? 480 : 320} height={deviceType !== "mobile"? 240 : 170}>
                <Accesscode data={{
                    title: languageData.accessCodeModalTitle,
                    // eslint-disable-next-line eqeqeq
                    content: deviceType == "pc"? languageData.accessCodeModalContent : null
                }} btn={languageData.enter} closeModal={deviceType === "pc"? null : _closeModal}  _access={()=>_onClickAccessBtn(props.data)} />
            </Custommodal>
        </Card>
    )
}

const Card = styled.div`
width: 100%;
display: flex;
${({theme}) => theme.media.desktop`
height: 280px;
margin-top: 40px;
`}
${({theme}) => theme.media.mobile`
height: 418px;
margin-top: 24px;
flex-direction: column;
`}
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
    ${({theme}) => theme.media.desktop`
    min-width: 358px;
    height: 280px;
    `}
    ${({theme}) => theme.media.mobile`
    width: 100%;
    height: 160px;
    `}
}
> .mentoringInfo {
    flex: 1;
    box-sizing: border-box;
    ${({theme}) => theme.media.desktop`
    padding: 0 0 0 40px;
    border-left: 1px solid #E9E9E9;
    border-right: 1px solid #E9E9E9;
    min-width: 430px;
    `};
    ${({theme}) => theme.media.mobile`
    padding: 16px;
    border-left: 0;
    border-right: 0;
    `}
    & .status {
        position: relative;
        margin-top: 24px;  
        ${({theme}) => theme.media.mobile`
        margin-top: 0;
        `}
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
        max-width: 400px;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #000000;
        margin-top: 10px;
    }
    & .mentees {
        ${({theme}) => theme.media.mobile`
            display: none;
        `}
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
    ${({theme}) => theme.media.desktop`
    width: calc(440px - 67px);
    `}
    ${({theme}) => theme.media.mobile`
    width: 100%;
    border-top: 1px solid #E9E9E9;    
    `}
}
`;

export default Mentoringcard;