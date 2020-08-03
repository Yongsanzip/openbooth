import React, {Component, createRef, useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {logoutReducer} from "./../../modules/token/token";

import styled from "styled-components";
import {Button, Img} from "./../index";

function Namecard(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sendMailBtn = useRef(null);
    const moreinfoBtn = useRef(null);

    useEffect(() => {
        let sendMailBtnEl:any
        if (typeof sendMailBtn !== 'undefined' &&
            typeof sendMailBtn.current !== 'undefined') {
            sendMailBtnEl = sendMailBtn.current;
        }
        if(sendMailBtnEl != null) sendMailBtnEl.addEventListener('click', _onClickMailBtn);

        let moreinfoBtnEl:any
        if (typeof moreinfoBtn !== 'undefined' &&
            typeof moreinfoBtn.current !== 'undefined') {
            moreinfoBtnEl = moreinfoBtn.current;
        }
        if(moreinfoBtnEl != null) moreinfoBtnEl.addEventListener('click', _onClickMoreinfoBtn);

        return function cleanup() {
            if(sendMailBtnEl != null) sendMailBtnEl.removeEventListener('click', _onClickMailBtn);
            if(moreinfoBtnEl != null) moreinfoBtnEl.removeEventListener('click', _onClickMoreinfoBtn);
        };
    });

    const _onClickMailBtn = (e) => {
        e.stopPropagation();
        props.showMailBtn();
    }

    const _onClickMoreinfoBtn = (e) => {
        e.stopPropagation();
        props.showMoreinfoBtn();
    }

    const _logout = () => {
        dispatch(logoutReducer());
        sessionStorage.removeItem('token');
        history.push("/");
    }

    const logoutBtnStyle = {
        'font-size': '12px',
        'line-height': '20px',
        width: '64px',
        height: '24px',
        padding: 0,
        'margin-left': '8px'
    }

    return (
        <Userinfocomp className="profile" imgMarginRight={props.imgMarginRight}>
            <Img src={props.type == null || props.type != 'company'? props.data.profile_image : props.data.company_thumbnail} full={true} />
            <div className="profileInfo">
                <div className="mentorName">
                    {props.type == null || props.type != 'company'? props.data.name : props.data.company_name}
                    {!props.showLogoutBtn? '' :
                        <Button style={logoutBtnStyle} _clickBtn={_logout}>Logout</Button>
                    }
                </div>
                {props.type == null || props.type != 'company'?
                    <div className="mentorInfo"><span className="mentorEmail">{props.data.email}<br/></span>{props.data.department}</div>
                    : <div className="mentorInfo">{props.data.content}</div>
                }
            </div>
            <MentorInfoBtn>
                {!props.showMailBtn? '' :
                    <button ref={sendMailBtn} className="sendMailBtn">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V4L8.94 8.34C9.59 8.75 10.41 8.75 11.06 8.34L18 4V13C18 13.55 17.55 14 17 14ZM10 7L2 2H18L10 7Z" fill="#999999"/>
                        </svg>
                    </button>
                }
                {!props.showMoreinfoBtn? '' :
                    <button ref={moreinfoBtn}>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM6.715 4C7.866 4 8.715 4.849 8.715 6C8.715 7.151 7.866 8 6.715 8C5.564 8 4.715 7.151 4.715 6C4.715 4.849 5.563 4 6.715 4ZM10.43 12H3V11.535C3 10.162 4.676 8.75 6.715 8.75C8.754 8.75 10.43 10.162 10.43 11.535V12ZM17 11H13V9H17V11ZM17 7H12V5H17V7Z" fill="#999999"/>
                        </svg>
                    </button>
                }
            </MentorInfoBtn>
        </Userinfocomp>
    )
}

interface UserinfocompProps {
    imgMarginRight: any
}
const Userinfocomp = styled.div`
    display: flex;
    // margin-bottom: 16px;
    > *:first-child {
        ${({theme}) => theme.media.desktop`
        width: 80px;
        height: 80px;
        `}
        ${({theme}) => theme.media.mobile`
        width: 40px;
        height: 40px;
        `}
        margin-right: ${(props: UserinfocompProps) => (props.imgMarginRight != null ?  props.imgMarginRight : '16px')};
        border-radius: 50%;
    }
    .profileInfo {
        font-weight: normal;
        flex: 1;
        ${({theme}) => theme.media.desktop`
        font-size: 12px;
        line-height: 20px;
        `}
        ${({theme}) => theme.media.mobile`
        font-size: 10px;
        line-height: 18px;
        `}
        color: #999999;
        > div.mentorName {
            font-weight: bold;
            color: #000000;
            ${({theme}) => theme.media.desktop`
            font-size: 16px;
            line-height: 24px;
            margin: 6px 0;
            `}
            ${({theme}) => theme.media.mobile`
            font-size: 12px;
            line-height: 20px;
            `}
            > * {
                display: inline-block;
            }
        }
        ${({theme}) => theme.media.mobile`
        & .mentorEmail {
            display: none;
        }
        `}
    }
`;

const MentorInfoBtn = styled.div`
    ${({theme}) => theme.media.desktop`
    height: 80px;
    line-height: 80px;
    `}
    ${({theme}) => theme.media.mobile`
    height: 40px;
    line-height: 40px;
    `}
    vertical-align: middle;
    button {
        width: 30px;
        height: 22px;
        line-height: 25px;
        vertical-align: middle;
        background: transparent;
        border: 0;
        &:focus {
            outline: 0;
        }
        &.sendMailBtn {
            position: absolute;
            right: 16px;
            top: 38px;
            height: 80px;
        }
    }
`;

export default Namecard;