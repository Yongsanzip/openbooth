import React from 'react';
import styled from "styled-components";
import base64 from 'base-64';

function Logininfo() {
    const isLogin = true;
    const token = sessionStorage.getItem('token');
    const tokenData = token != null ? token.split('.') : new Array();
    const userInfo = JSON.parse(base64.decode(tokenData[1]));
    const count = 1;

    return (
        <div>
            {isLogin?
                <ProfileInfo>
                    <img src={userInfo.profile_image} />
                    <div className="count"><div>{count > 9? '9+' : count}</div></div>
                </ProfileInfo>
            : <LoginBtns>
                    <div>로그인</div>
                    <div>로그아웃</div>
                </LoginBtns>
            }
        </div>
    )
}
const LoginBtns = styled.div`
font-weight: normal;
font-size: 14px;
color: #999999;
> div {
display: inline-block;
margin-right: 8px;
&:last-child {
margin-right: 0;
}
}

`;

const ProfileInfo = styled.div`
    position: relative;
    background: #C4C4C4;
    border: 1px solid #E9E9E9;
    border-radius: 50%;
    box-sizing: border-box;
    ${({theme}) => theme.media.desktop`
    width: 32px;
    height: 32px;
    margin-top: 10px;
    margin-right: 3px;
    `}
    ${({theme}) => theme.media.mobile`
    width: 22.59px;
    height: 22.59px;
    margin-top: 8px;
    margin-right: 13.41px;
    `}    
    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    & .count {
        position: relative;
        font-size: 12px;
        color: #fff;
        ${({theme}) => theme.media.desktop`
        top: 0;
        left: 0;
        `}
        ${({theme}) => theme.media.mobile`
        top: 0;
        left: 0;
        `}
        & > div {
            position: relative;
            text-align: center;
            vertical-align: middle;
            background: #005CB9;
            border-radius: 50%;
            ${({theme}) => theme.media.desktop`
            top: 18px;
            left: 18px;
            width: 16px;
            height: 16px;
            line-height: 17px;
            `}
            ${({theme}) => theme.media.mobile`
            // top: 13px;
            // left: 13px;
            // width: 11.29px;
            // height: 11.29px;
            // font-size: 8px;
            // line-height: 16px;
            
            top: 12px;
            left: 13px;
            width: 15.29px;
            height: 15.29px;
            font-size: 8px;
            line-height: 16px;
            `}
        }
    }
`;

export default Logininfo;