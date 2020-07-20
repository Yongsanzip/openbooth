import React, { Component } from 'react';
import styled from "styled-components";

class Logininfo extends Component {
    constructor() {
        super()
    }

    render(){
        const { isLogined } = this.props;
        return (
            <div>
                {isLogined?
                    <ProfileInfo>
                        <img src="" />
                        <div className="count"><div>0</div></div>
                    </ProfileInfo>
                : <LoginBtns>
                        <div>로그인</div>
                        <div>로그아웃</div>
                    </LoginBtns>
                }
            </div>
        )
    }
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
    margin-top: 12px;
    background: #C4C4C4;
    border: 1px solid #E9E9E9;
    border-radius: 50%;
    box-sizing: border-box;
    > img {
        position: absolute;
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
            line-height: 16px;
            vertical-align: middle;
        }
    }
`;

export default Logininfo;