import React, { useRef } from 'react';
import styled from "styled-components";
import dummyImg from "../../assets/img/bg-dummy.png";
import {Alertmodal, Button, Checkboxfield, Inputfield} from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../modules";

const FindPwd = props => {
    const dispatch = useDispatch();
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const loginForm = useRef(null);


    const loginFormWidth = 432;

    return (
        <LoginComp src={dummyImg} loginFormWidth={loginFormWidth} >
            <div>
                <div className='titleText'>
                    <div>
                        {languageData.loginText}
                    </div>
                    <h1>{languageData.loginText2}</h1>
                    <div className='info'>
                        <div><span className={'bold'}>{languageData.organizedField} : </span>{languageData.organized}</div>
                        <div><span className={'bold'}>{languageData.hostField} : </span>{languageData.hosted}</div>
                        <div><span className={'bold'}>{languageData.supportField} : </span>{languageData.supported}</div>
                    </div>
                </div>
                <div className='loginForm'>
                </div>
            </div>
        </LoginComp>
    )
}


interface LoginCompProps {
    src: string;
    loginFormWidth: number;
    pageType: any;
}

const LoginComp = styled.div`
font-family: 'NanumSquare';
width: 100%;
max-width: 1920px;
height: 100vh;
max-height: 1080px;
color: #FFFFFF;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))${(props: LoginCompProps) => (props.src != null ? ', url('+props.src+')' : '')};

> div {
    width: fit-content;
    margin-left: 320px;
    padding-top: ${(props: LoginCompProps) => props.pageType == 'regist' ? '240px' : '320px'};
    > div {
        display: inline-block;
        vertical-align: top;
        margin-right: ${(props: LoginCompProps) => props.pageType == 'regist' ? '235px' : '218px'};
        :last-child { margin-right: 0; vertical-align: middle; }
    }
    .titleText {
        width: ${(props: LoginCompProps) => props.pageType == 'regist' ? '503px' : '520px'};
        font-size: 32px;
        line-height: 40px;
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        color: #FFFFFF;

        & > .info {
            padding-top: ${(props: any) => (props.pageType == 'regist' ? '50px' : '38px')};
            font-weight: normal;  
            font-size: 20px;
            line-height: 28px;
            word-break: break-word;
            & span.bold {
                font-weight: bold;
            }
            > *{
                margin-bottom: 4px;
            }
        }
        > h1 {
            margin-top: ${(props: any) => (props.pageType == 'regist' ? '0' : '38px')};
            margin-bottom: ${(props: any) => (props.pageType == 'regist' ? '13px' : '41px')};
            padding: 0 0;
            font-weight: 800;
            font-size: 64px;
            line-height: 72px;
        }
    }
    .loginForm {
        width: ${(props: any) => (props.loginFormWidth != null ? props.loginFormWidth+'px' : '430px')};
        > form {
            & .findPwdDescript {
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
                margin: 40px 0; 
                :first-child { margin-top: 0; margin-bottom: 16px; }
                :last-child { margin-bottom: 0; }
                & h2 {
                    font-weight: bold;
                    font-size: 32px;
                    line-height: 40px;
                    margin-top: 0;
                    margin-bottom: 40px;
                }
                & .description {
                    font-weight: normal;
                }
            }
            & .inlineBox {
             > * {
                position: relative;
                display: inline-block;
                width: 50%;
             }
             &.btns {
                & .fieldTitle {
                    margin-top: 4px;
                    font-weight: 100;
                    font-size: 12px;
                    line-height: 20px;
                    height: 16px;
                    padding-left: 12px;
                    padding-bottom: ${(props: any) => props.pageType == 'regist' ? '6px' : '7px'};
                }
                > * {
                    width: 210px;
                    height: 48px;
                    margin-right: 12px;
                    :last-child {margin: 0}
                }
             }
            }
        }
    }
}
`;

export default FindPwd;