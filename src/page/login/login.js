import React, {Component, createFactory, createRef, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {Img, Checkboxfield, Inputfield, Button, Alertmodal} from "../../components";
import dummyImg from "../../assets/img/bg-dummy.png";
import base64 from 'base-64';
import Api from './../../api/common'

function Login(props){
    const api = new Api();
    const history = useHistory();
    const [pageType, setPageType] = useState('login');
    const loginForm = createRef();
    const warnningEmailRef = createRef();
    const warnningPwdRef = createRef();
    const warnningAccountRef = createRef();
    const [rememberAccount, setRememberAccount] = useState(false);
    const registAlertData = {
        title: 'Lorem ipsum dolor',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet metus ac libero cursus maximus. Nulla hendrerit porta facilisis.'
    };
    const [showRegistAlert, setShowRegistAlert] = useState(false);

    useEffect((e) => {
        if(localStorage.getItem('loginToken') == null){
            _logout();
        }
        else{
            const token = localStorage.getItem('loginToken').split(".");
            const userInfo = JSON.parse(base64.decode(token[1]));
            //만료된 토큰
            if(Date.now() > userInfo.exp) _logout();

            console.log("userInfo::", userInfo);
        }

        const email = localStorage.getItem('loginEmail');
        if(email != null && email != ''){
            loginForm.current.querySelector('[name=email]').value = email;
            setRememberAccount(true);
        }
    }, []);

    const _logout = function(){
        console.log("~~~logout::", localStorage.getItem('loginToken'));
        if(localStorage.getItem('loginToken') != null) localStorage.removeItem('loginToken');
        props.logout();
        history.push("/");
    };

    const _setPageType = function(type) {
        if(type == 'regist2'){
            if(!_checkFormEmpty()) return false;
        }
        setPageType(type);
    };

    const _checkEmailFormat = () => {
        const inputValue = loginForm.current.querySelector('[name=email]').value;
        warnningEmailRef.current.style.opacity = '0';
        const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if(inputValue == null || inputValue.length < 1){
            warnningEmailRef.current.style.opacity = '1';
            warnningEmailRef.current.innerText = 'Enter this value';
            return false;
        }
        else if (inputValue.match(regExp) == null) {
            warnningEmailRef.current.style.opacity = '1';
            warnningEmailRef.current.innerText = 'Email format is incorrect';
            return false;
        }
        return true;
    };

    const _checkPwdFormat = ()=> {
        const pwd = loginForm.current.querySelector('[name=password]').value;

        if(pageType == 'login'){
            const num = pwd.search(/[0-9]/g);
            const eng = pwd.search(/[a-z]/ig);
            if(pwd == null || pwd == ''){
                warnningPwdRef.current.style.opacity = '1';
                warnningPwdRef.current.innerText = 'Enter this value';
                return false;
            }
            else if(pwd.length < 8 || pwd.search(/\s/) != -1 || num < 0 || eng < 0){
                warnningPwdRef.current.style.opacity = '1';
                warnningPwdRef.current.innerText = 'At least 8 characters long including English and number';
                return false;
            }
            return true;
        }
        else if(pageType == 'regist'){
            const pwdConfirm = loginForm.current.querySelector('[name=passwordConfirm]').value;

            if(pwd.length > 0 && pwdConfirm.length > 0){
                if(pwd != pwdConfirm){
                    console.log(pwd, pwdConfirm);
                    warnningPwdRef.current.style.opacity = '1';
                    warnningPwdRef.current.innerText = '비밀번호가 일치하지 않습니다.';
                    return false;
                }
                else{
                    const num = pwd.search(/[0-9]/g);
                    const eng = pwd.search(/[a-z]/ig);
                    if(pwd.length < 8 || pwd.search(/\s/) != -1 || num < 0 || eng < 0){
                        warnningPwdRef.current.style.opacity = '1';
                        warnningPwdRef.current.innerText = 'That email is taken. Try another';
                        return false;
                    }
                }
            }
            warnningPwdRef.current.style.opacity = '0';
            return true;
        }
    };

    const _checkFormEmpty = ()=> {
        const inputs = loginForm.current.querySelectorAll('input');
        let result = true;
        inputs.forEach(function(el){
            if(el.parentElement.parentElement.classList.toString().indexOf("hide") > -1) return true;

            let warnEl = null;
            if(el.parentElement.previousSibling != null){
                warnEl = el.parentElement.previousSibling.querySelector('.warn');
                warnEl.style.opacity = '0';
            }
            if(el.value == null || el.value == ''){
                if(warnEl != null){
                    warnEl.style.opacity = '1';
                }
                console.log(el);
                result = false;
            }
        }.bind(this));

        if(!result){
            /////////////////////////////////show "Enter this value" msg!!!
            return false;
        }
    };

    const _login = () => {
        const emailCheck = _checkEmailFormat();
        const pwdCheck = _checkPwdFormat();
        // this._checkFormEmpty();

        if(!emailCheck || !pwdCheck) {
            return false;
        }

        const formData = new FormData(loginForm.current);
        const isRememberAccount = loginForm.current.querySelector('[name=rememberEmail]');
        if(isRememberAccount.checked){
            //로컬 스토리지에 이메일, 패스워드 저장
            localStorage.setItem('loginEmail', formData.get('email'));
        }
        else{
            localStorage.removeItem('loginEmail');
        }

        if(true){
            const setting = {
                url: '/login',
                method: 'POST',
                params: {
                    id: 'abc',
                    pwd: 'abcd'
                },
                callback: function(){}
            }
            console.log(api);
            api.request(setting);
            localStorage.setItem('loginToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJvcGVuYm9vdGhAb3BlbmJvb3RoLm5ldCIsImNvdW50cnkiOiJSZXB1YmxpYyBvZiBLb3JlYSIsInBob25lIjoiKzgyLTEwLTEyMzQtMTIzNCIsImNvbXBhbnkiOiJCYW5rIG9mIGFtZXJpY2EiLCJkZXBhcnRtZW50IjoiRGVzaWduIHRlYW0iLCJwb3NpdGlvbiI6IlVJL1VYIGRlc2lnbmVyIiwicHJvZmlsZV9pbWFnZSI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF85NjBfNzIwLnBuZyIsImlhdCI6MTU5NDcwMDk4MywiZXhwIjoxNTk0NzA1MDUyLCJqdGkiOiI3ZjI2MjNkMi05YjYxLTRhMDMtOTA5Ny0yNmYxNjc2NmQ4MjgifQ.MYUNxziEZFT7x6G6FobEKEJqYbTWEqE-72qBixNx2zM');
            if(props.login != null) props.login();
        }
        else{
            warnningAccountRef.current.style.opacity = '1';
        }
    }

    const _SendResetPwdLink = () => {
        if(!_checkEmailFormat()) return false;
        console.log("send!");
        _resetForm();
    }

    const _regist = () => {
        const emailCheck = _checkEmailFormat();
        const pwdCheck = _checkPwdFormat();
        _checkFormEmpty();

        if(!emailCheck || !pwdCheck) {
            return false;
        }

        console.log("regist new member!");
        if(false){
            setShowRegistAlert(true);
        }
        else{
            warnningEmailRef.current.style.opacity = '1';
            warnningEmailRef.current.innerText = 'That email is taken. Try another';
        }
    }

    const _closeRegistAlert=()=>{
        _resetForm();
        setShowRegistAlert(false);
        setPageType('login');
    }

    const _resetForm = () => {
        const inputs = loginForm.current.querySelectorAll('input');
        // console.log(inputs);
        inputs.forEach(function(el){
            el.value = '';
            if(el.type == 'checkbox') {
                setRememberAccount(false);
            }
        }.bind(this))
    }

    /* Style */
    const loginFormWidth = 435;
    const btnStyle = {
        'border-color': '#ffffff',
        background: 'rgba(255, 255, 255, 0)',
        color: '#ffffff',
        hover: {
            'border-color': '#ffffff',
            color: '#ffffff',
            background: 'rgba(255, 255, 255, 0.32)'
        }
    }
    const registBtnStyle = JSON.parse(JSON.stringify(btnStyle));
    registBtnStyle['border-width'] = '2px';
    registBtnStyle['hover']['border-width'] = '2px';
    const inputFieldStyle = {
        'background': 'transparent',
        'color': '#ffffff'
    }

    return (
        <LoginComp src={dummyImg} loginFormWidth={loginFormWidth}>
            <div>
                <div className='titleText'>
                    {pageType != null && pageType == 'regist'? null
                    : 'Online Exhibition of Third Countries\n' +'with The World Bank'}
                    <h1>“Built on Hope”</h1>
                    {pageType != null && pageType == 'regist'?
                        <div className='info'>
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi. Praesent auctor nisl ut luctus mollis. Aliquam elementum nunc non libero sollicitudin, sit amet tempus tortor commodo. Mauris lectus lectus, congue quis erat sit amet, condimentum mattis erat.
                        </div>
                        :
                        <div className='info'>
                            <div><span>Organized by :</span>The World Bank</div>
                            <div><span>Hosted by :</span>Cnttech, Openbooth</div>
                            <div><span>Supported by :</span>Value</div>
                        </div>
                    }
                </div>
                <div className='loginForm'>
                    <form ref={loginForm}>
                        <div className={pageType == 'findPwd'? 'show findPwdDescript' : 'hide findPwdDescript'} >
                            <h2>Reset your password</h2>
                            <div>Enter you remail address and we'll send you a link to reset your password.</div>
                        </div>
                        <InputFieldComp className={pageType != 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>ID <span ref={warnningEmailRef} className={'warn'}>Email format is incorrect</span></div>
                            <Inputfield name={'email'} width={'100%'} style={inputFieldStyle} placeholder={'Email'} validator={_checkEmailFormat} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'login' || pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Password <span ref={warnningPwdRef} className={'warn'}>Password format is incorrect</span></div>
                            <Inputfield name={'password'} width={'100%'} style={inputFieldStyle} placeholder={'At least 8 characters long including English and number'} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={8} className={pageType == 'regist'? 'show' : 'hide'} >
                            <Inputfield name={'passwordConfirm'} width={'100%'} style={inputFieldStyle} style={inputFieldStyle} placeholder={'Repeat password'}  validator={_checkPwdFormat}/>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Name <span className={'warn'}>Enter this value</span></div>
                            <Inputfield name={'name'} width={'100%'} style={inputFieldStyle} placeholder={'Name'} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Phone <span className={'warn'}>Enter this value</span></div>
                            <Inputfield name={'phone'} width={'100%'} style={inputFieldStyle} placeholder={'Phone'} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'login'? 'show inlineBox' : 'hide inlineBox'} >
                            <Checkboxfield name={'rememberEmail'} onChange={(val)=>setRememberAccount(val)} checked={rememberAccount} width={'100%'} style={inputFieldStyle} text={'Remember my email'} type={'login'} textColor={'#ffffff'} />
                            <div className={'warn alignRight'} ref={warnningAccountRef} >The ID or password do not match.</div>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2'? 'show' : 'hide'} >
                            <Inputfield name={'phone'} width={'100%'} style={inputFieldStyle} placeholder={'upload image file'} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Country <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'name'} width={'100%'} style={inputFieldStyle} placeholder={'Country'} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Company / affiliation <span className={'warn'}>Enter this value</span></div>
                            <Inputfield name={'name'} width={'100%'} style={inputFieldStyle} placeholder={'Company or affiliation'} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Department <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'name'} width={'100%'} style={inputFieldStyle} placeholder={'Department'} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Position <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'name'} width={'100%'} style={inputFieldStyle} placeholder={'Position'} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'login'? 'show' : 'hide'} >
                            <Button fill={true} width={'100%'} style={inputFieldStyle} _clickBtn={_login}>Login</Button>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'findPwd'? 'show alignRight' : 'hide alignRight'} >
                            <Button fill={true} width={104} _clickBtn={_SendResetPwdLink}>Send</Button>
                        </InputFieldComp>
                        <InputFieldComp  marginTop={16} className={pageType == 'regist'? 'show' : 'hide'} >
                            <Button width={'100%'} style={inputFieldStyle} style={registBtnStyle} _clickBtn={()=>_setPageType('regist2')}>Next step</Button>
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <Button fill={true} width={'100%'} _clickBtn={()=>setShowRegistAlert(true)}>Register</Button>
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'login'? 'show inlineBox' : 'hide inlineBox'} >
                            <div>
                                <div className={'fieldTitle'}>Forgot your password?</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('findPwd')}>Find your password</Button>
                            </div>
                            <div>
                                <div className={'fieldTitle'}>Welcome!</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('regist')}>register</Button>
                            </div>
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'regist' || pageType == 'regist2'? 'show inlineBox' : 'hide inlineBox'} >
                            <div>
                                <div className={'fieldTitle'}>Forgot your password?</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('findPwd')}>Find your password</Button>
                            </div>
                            <div>
                                <div className={'fieldTitle'}>Already registered?</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('login')}>Login</Button>
                            </div>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'findPwd'? 'show findPwdDescript' : 'hide findPwdDescript'} >
                            <b>openbooth@openbooth.net</b><br/>
                            We just sent to your mailbox to get your reset link.
                        </InputFieldComp>
                    </form>
                </div>
            </div>
            <Alertmodal data={registAlertData} showModal={showRegistAlert} closeModal={_closeRegistAlert} onClick={()=>_regist()} />
        </LoginComp>
    )

}

const LoginComp = styled.div`
font-family: 'NanumSquare';
width: 100%;
max-width: 1920px;
height: 100vh;
max-height: 1080px;
color: #FFFFFF;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))${props => (props.src != null ? ', url('+props.src+')' : '')};

> div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    height: 100%;
    margin: 0 auto;
    > div {
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
                font-weight: bold;
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

const InputFieldComp = styled.div`
    position: relative;
    padding-top: ${props => (props.marginTop != null ? props.marginTop+'px' : '0')};
    margin-bottom: 8px;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;

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

export default Login;
