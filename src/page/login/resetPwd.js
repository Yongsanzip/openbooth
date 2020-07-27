import React, {Component, createRef, useState} from 'react';
import styled from "styled-components";

import {pwdValidator, pwdConfirmValidator} from "./../../js/validation"
import {Img, Checkboxfield, Inputfield, Button, Alertmodal} from "../../components";
import dummyImg from "../../assets/img/bg-dummy.png"

function ResetPwd( props) {
    const resetPwdForm = createRef();
    const warnningPwdRef = createRef();
    const [newPwdAlertData, setNewPwdAlertData] = useState({
        title: 'Lorem ipsum dolor',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet metus ac libero cursus maximus. Nulla hendrerit porta facilisis.'
    });
    const [showAlert, setShowAlert] = useState(false);
    
    const loginFormWidth = 435;
    const token = props.match.params.token;

    const _saveNewPwd = function(){
        
        // console.log(props, saveNewPwd);
        
        const pwd = _checkPwdFormat();
        if(!pwd) return false;
        
        // props.saveNewPwd({
        //     token: token,
        //     pwd: pwd
        // });
        console.log("save new password!");

        setShowAlert(true);
    }

    const _checkPwdFormat = function() {
        const pwd = resetPwdForm.current.querySelector('[name=password]').value;
        const pwdConfirm = resetPwdForm.current.querySelector('[name=passwordConfirm]').value;

        const check = pwdValidator(pwd);
        if(!check.result){
            warnningPwdRef.current.style.opacity = '1';
            warnningPwdRef.current.innerText = check.msg;
            return false;
        }

        const checkConfirm = pwdConfirmValidator(pwd, pwdConfirm);
        if(!checkConfirm.result){
            warnningPwdRef.current.style.opacity = '1';
            warnningPwdRef.current.innerText = checkConfirm.msg;
            return false;
        }

        return pwd;
    }

    const _closeAlert = function(){
        setShowAlert(false);
        props.history.push("/");
    }

    const inputFieldStyle = {
        'background': 'transparent',
        'color': '#ffffff'
    }
    return (
        <LoginComp src={dummyImg} loginFormWidth={loginFormWidth}>
            <div>
                <div className='titleText'>
                    Online Exhibition of Third Countries with The World Bank
                    <h1>“Built on Hope”</h1>
                    <div className='info'>
                        <div><span>Organized by :</span>The World Bank</div>
                        <div><span>Hosted by :</span>Cnttech, Openbooth</div>
                        <div><span>Supported by :</span>Value</div>
                    </div>
                </div>
                <div className='loginForm'>
                    <form ref={resetPwdForm}>
                        <div className='findPwdDescript'>
                            <h2>Reset your password</h2>
                            <b>openbooth@openbooth.net</b><br/>
                            You can create your new password here.
                        </div>
                        <InputFieldComp>
                            <div className={'fieldTitle'}>Password <span ref={warnningPwdRef} className={'warn'}>Password format is incorrect</span></div>
                            <Inputfield name={'password'} width={'100%'} style={inputFieldStyle} placeholder={'At least 8 characters long including English and number'} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={8}>
                            <Inputfield name={'passwordConfirm'} width={'100%'} style={inputFieldStyle} placeholder={'Repeat password'} />
                        </InputFieldComp>
                        <InputFieldComp align={'right'}>
                            <Button fill={true} width={104} _clickBtn={_saveNewPwd}>Save</Button>
                        </InputFieldComp>
                    </form>
                </div>
            </div>
            <Alertmodal data={newPwdAlertData} showModal={showAlert} closeModal={_closeAlert} onClick={_closeAlert} />
        </LoginComp>
    )
}


export default ResetPwd;

const InputFieldComp = styled.div`
    position: relative;
    padding-top: ${props => (props.marginTop != null ? props.marginTop+'px' : '0')};
    margin-bottom: 8px;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-align: ${props => (props.align != null ? props.align : 'left')};

    .warn { color: #F58181; opacity: 0; }
    .fieldTitle {
        // position: absolute;
        // top: -20px;
        // left: 10px;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        padding-left: 10px;
        padding-bottom: 4px;
    }
`;

const LoginComp = styled.div`
width: 100%;
max-width: 1920px;
height: 100%;
max-height: 1080px;
font-family: 'NanumSquare';
color: #FFFFFF;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))${props => (props.src != null ? ', url('+props.src+')' : '')};

> div {
    width: fit-content;
    height: 100%;
    margin: 0 auto;
    padding: 320px 0;
    > div {
        display: inline-block;
        vertical-align: top;
        margin-right: 220px;
        :last-child { margin-right: 0; vertical-align: middle; }
    }
    .titleText {
        width: 520px;
        font-size: 32px;
        line-height: 40px;
        & > .info {
            padding-top: 63px;
            font-size: 20px;
            line-height: 28px;
            & span {
                font-weight: bold;
            }
        }
    }
    .loginForm {
        width: ${props => (props.loginFormWidth != null ? props.loginFormWidth+'px' : '430px')};
        > form {
            & .findPwdDescript {
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                margin: 40px 0; 
                :first-child { margin-top: 0; }
                :last-child { margin-bottom: 0; }
                & h2 {
                    font-weight: bold;
                    font-size: 32px;
                    line-height: 40px;
                    margin-top: 0;
                    margin-bottom: 40px;
                }
            }
            & .inlineBox {
             > * {
                position: relative;
                display: inline-block;
                width: 50%;
                // :last-child { text-align: right; }
             }
            }
        }
    }
}
`;
