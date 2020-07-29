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
    width: 32px;
    height: 32px;
    height: 32px;
    margin-top: 10px;
    margin-right: 3px;
    background: #C4C4C4;
    border: 1px solid #E9E9E9;
    border-radius: 50%;
    box-sizing: border-box;
    
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
        top: 0;
        left: 18px;
        font-size: 12px;
        color: #fff;
        &:before {
            content: '';
            position: absolute;
            top: 18px;
            left: 0;
            width: 16px;
            height: 16px;
            background: #005CB9;
            border-radius: 50%;
        }
        & > div {
            position: relative;
            top: 18px;
            width: 16px;
            height: 16px;
            text-align: center;
            line-height: 17px;
            vertical-align: middle;
        }
    }
`;

export default Logininfo;