import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../modules";
import {
    isEmailOverlapConfirmReducer,
    getTokenReducer,
    sendFIndPwdMailReducer,
    registReducer,
    setNewPasswordReducer
} from "../../modules/token/token";

import {Img, Checkboxfield, Inputfield, Button, Alertmodal} from "../../components";
import {isMobileSize, textLineBreak} from "../../common/common";

import dummyImg from "../../assets/img/bg-dummy.png";

const Login = props => {
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    // console.log("languageData::", languageData);

    const dispatch = useDispatch();
    const history = props.history;
    const [pageType, setPageType] = useState<string>(props.location != null && props.location.pathname != null && props.location.pathname.indexOf("resetpwd") > -1? 'resetPwd' : 'login');
    const loginForm = useRef<HTMLFormElement>(null);
    const warnningEmailRef = useRef(null);
    const [emailValue, setEmailValue] = useState<string>(''); // 중복계정 확인용도
    const warnningPwdRef = useRef(null);
    const warnningAccountRef = useRef(null);
    const [rememberAccount, setRememberAccount] = useState<boolean>(false);
    const [showRegistAlert, setShowRegistAlert] = useState<boolean>(false);

    // console.log("pageType:::::::::::::", pageType);

    const [deviceType, setDeviceType] = useState('deskTop');
    const _setDeviceType = (page:any) => {
        console.log("_setDeviceType")
        if(page == null) page = pageType;
        let appEl:any;
        if(document.getElementById("app") != null) appEl = document.getElementById("app");
        if(isMobileSize()){
            setDeviceType('mobile');
            if(appEl != null){
                let height = '100%';
                if(page == 'regist') height = 'auto';
                appEl.style.height = height;
            }
        }
        else{
            setDeviceType('deskTop');
            if(appEl != null) appEl.style.height = '100%';
        }
    }

    useEffect(()=>{
        _setDeviceType(null);
        window.addEventListener('resize', _setDeviceType);
        const localstorageEmail = localStorage.getItem('email');
        if(localstorageEmail != null){
            setRememberAccount(true);
            let loginFormEl: any;
            if (typeof loginForm !== 'undefined' &&
                typeof loginForm.current !== 'undefined') {
                loginFormEl = loginForm.current;
            }
            loginFormEl.querySelector('[name=email]').value = localstorageEmail;
        }
        return () => {
            window.removeEventListener('resize', _setDeviceType);
        };
    }, [])

    const registAlertData = {
        title: 'Lorem ipsum dolor',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet metus ac libero cursus maximus. Nulla hendrerit porta facilisis.'
    };

    const isOverlapEmail = useSelector((state: RootState) => state.tokenReducer.isOverlap);
    // console.log("isOverlapEmail::", isOverlapEmail);
    let warnningEmailEl: any;
    if (typeof warnningEmailRef !== 'undefined' &&
        typeof warnningEmailRef.current !== 'undefined') {
        warnningEmailEl = warnningEmailRef.current;
    }
    if(isOverlapEmail && pageType == 'regist'){
        warnningEmailEl.style.opacity = '1';
        warnningEmailEl.innerText = languageData.overlapEmail;
    }
    else if(!isOverlapEmail && pageType == 'findPwd' && emailValue != ''){
        warnningEmailEl.style.opacity = '1';
        warnningEmailEl.innerText = languageData.notOverlapEmail;
    }

    const isFailedLogin = useSelector((state: RootState) => state.tokenReducer.isFailedLogin);

    let warnningAccountEl: any;
    if (typeof warnningAccountRef !== 'undefined' &&
        typeof warnningAccountRef.current !== 'undefined') {
        warnningAccountEl = warnningAccountRef.current;
    }
    if(warnningAccountEl != null && warnningAccountEl.style != null) warnningAccountEl.style.opacity = '0';
    if(isFailedLogin){
        warnningAccountEl.style.opacity = '1';
    }
    
    /* Style */
    const loginFormWidth = 432;
    const btnStyle = {
        'border-color': '#ffffff',
        background: 'rgba(255, 255, 255, 0)',
        'font-weight': 'bold',
        'line-height': '22px',
        color: '#ffffff',
        hover: {
            'border-color': '#ffffff',
            color: '#ffffff',
            background: 'rgba(255, 255, 255, 0.32)'
        },
        height: '48px'
    }
    const registBtnStyle = JSON.parse(JSON.stringify(btnStyle));
    registBtnStyle['border-width'] = '2px';
    registBtnStyle['hover']['border-width'] = '2px';
    registBtnStyle['font-size'] = '16px';
    registBtnStyle['line-height'] = '20px';
    // registBtnStyle['letter-spacing'] = '0';
    const inputFieldStyle = {
        'background': 'transparent',
        'color': '#ffffff',
        'border-color': '#ffffff',
        // 'padding': '16px'
    }
    const LoginBtnStyle = {
        'font-weight': 'bold',
        'font-size': '16px',
        'line-height': '24px'
    }

    const _setPageType = function(type:string) {
        console.log("_setPageType::::", type);
        if(type == 'regist2'){
            if(!_checkFormEmpty()) return false;
        }
        else{
            _resetForm();
        }
        setPageType(type);
        _setDeviceType(type);
    };

    const emailValidator = (inputValue:string) => {
        const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if(inputValue == null || inputValue.length < 1){
            return {
                result: false,
                msg: languageData.emptyValueMsg
            };
        }
        else if (inputValue.match(regExp) == null) {
            return {
                result: false,
                msg: languageData.incorrectEmailFormat
            };
        }
        return {
            result: true,
            value: inputValue
        };
    }

    const pwdValidator = (inputValue:string) => {
        const num = inputValue.search(/[0-9]/g);
        const eng = inputValue.search(/[a-z]/ig);
        if(inputValue == null || inputValue == ''){
            return {
                result: false,
                msg: languageData.emptyValueMsg
            };
        }
        else if(inputValue.length < 8 || inputValue.search(/\s/) != -1 || num < 0 || eng < 0){
            return {
                result: false,
                msg: languageData.passwordRule
            };
        }
        return {
            result: true,
            value: inputValue
        };
    }

    const pwdConfirmValidator = (inputValue1:string, inputValue2:string) => {
        if(inputValue1 != inputValue2){
            return {
                result: false,
                msg: languageData.pwdNotSame
            };
        }

        return {
            result: true
        };
    }

    const emptyCheck = (inputValue:string) => {
        if(inputValue == null || inputValue == ''){
            return {
                result: false,
                msg: languageData.emptyValueMsg
            };
        }

        return {
            result: true
        };
    }

    const _checkEmailFormat = () => {
        let loginFormEl: any;
        if (typeof loginForm !== 'undefined' &&
            typeof loginForm.current !== 'undefined') {
            loginFormEl = loginForm.current;
        }
        let warnningEmailEl: any;
        if (typeof warnningEmailRef !== 'undefined' &&
            typeof warnningEmailRef.current !== 'undefined') {
            warnningEmailEl = warnningEmailRef.current;
        }

        const inputValue = loginFormEl.querySelector('[name=email]').value;
        const check = emailValidator(inputValue);
        if(!check.result){
            warnningEmailEl.style.opacity = '1';
            warnningEmailEl.innerText = check.msg;
            return false;
        }

        if(pageType != 'login' && inputValue != emailValue) {
            //중복확인
            dispatch(isEmailOverlapConfirmReducer(inputValue));
            setEmailValue(inputValue);
        }
        warnningEmailEl.style.opacity = '0';
        return inputValue;
    };
    const _checkPwdFormat = ()=> {
        let loginFormEl: any;
        if (typeof loginForm !== 'undefined' &&
            typeof loginForm.current !== 'undefined') {
            loginFormEl = loginForm.current;
        }
        let warnningPwdEl: any;
        if (typeof warnningPwdRef !== 'undefined' &&
            typeof warnningPwdRef.current !== 'undefined') {
            warnningPwdEl = warnningPwdRef.current;
        }

        const pwd = loginFormEl.querySelector('[name=password]').value;
        warnningPwdEl.style.opacity = '0';

        if(pageType == 'login'){
            const check = pwdValidator(pwd);
            if(!check.result){
                warnningPwdEl.style.opacity = '1';
                warnningPwdEl.innerText = check.msg;
                return false;
            }
            return pwd;
        }
        else if(pageType == 'regist' || pageType == 'regist2' || pageType == 'resetPwd'){
            const pwdConfirm = loginFormEl.querySelector('[name=passwordConfirm]').value;
            if(pwd == '' || pwdConfirm == '') return false;

            const check = pwdValidator(pwd);
            if(!check.result){
                warnningPwdEl.style.opacity = '1';
                warnningPwdEl.innerText = check.msg;
                return false;
            }

            const checkConfirm = pwdConfirmValidator(pwd, pwdConfirm);
            if(!checkConfirm.result){
                warnningPwdEl.style.opacity = '1';
                warnningPwdEl.innerText = checkConfirm.msg;
                return false;
            }

            return pwd;
        }
    };
    const _checkFormEmpty = ()=> {
        let loginFormEl: any;
        if (typeof loginForm !== 'undefined' &&
            typeof loginForm.current !== 'undefined') {
            loginFormEl = loginForm.current;
        }
        const inputs = loginFormEl.querySelectorAll('input');
        let result = true;
        let checkEmpty:any = null;
        inputs.forEach(function(el){
            if(el.parentElement.parentElement.classList.toString().indexOf("hide") > -1) return true;
            if(el.classList.toString().indexOf("noempty") < 0) return true;

            console.log(el);

            checkEmpty = emptyCheck(el.value);
            let warnEl:any;
            if(el.parentElement.previousSibling != null){
                warnEl = el.parentElement.previousSibling.querySelector('.warn');
                warnEl.style.opacity = checkEmpty != null ? checkEmpty.result ? '0' : '1' : '1';
            }

            if(!checkEmpty.result) result = false;
        });

        return result;
    };
    const _login = () => {
        const email = _checkEmailFormat();
        const pwd = _checkPwdFormat();
        // this._checkFormEmpty();

        if(!email || !pwd) {
            return false;
        }

        let loginFormEl: any;
        if (typeof loginForm !== 'undefined' &&
            typeof loginForm.current !== 'undefined') {
            loginFormEl = loginForm.current;
        }
        // const formData = new FormData(loginFormEl);

        dispatch(getTokenReducer(email, pwd));

        if(rememberAccount) {
            //이메일 저장
            localStorage.setItem("email", email);
        }
        else{
            localStorage.removeItem("email");
        }
    };
    const _SendResetPwdLink = () => {
        const email = _checkEmailFormat();
        if(!email) {
            return false;
        }

        // const response = props.findAccount({
        //     email: email
        // });
        dispatch(sendFIndPwdMailReducer({
            email: email
        }));
        console.log("send!");

        _resetForm();
    }
    const _setNewPwd = () => {
        const pwdCheck = _checkPwdFormat();
        if(!pwdCheck) {
            return false;
        }
        let loginFormEl: any;
        if (typeof loginForm !== 'undefined' &&
            typeof loginForm.current !== 'undefined') {
            loginFormEl = loginForm.current;
        }
        const loginFormData = new FormData(loginFormEl);
        dispatch(setNewPasswordReducer({
            loginFormData
        }));
    }
    const _regist = () => {
        const emailCheck = _checkEmailFormat();
        const pwdCheck = _checkPwdFormat();
        const emptyCheck = _checkFormEmpty();

        if(!emailCheck || !pwdCheck || !emptyCheck || isOverlapEmail) {
            return false;
        }


        let loginFormEl: any;
        if (typeof loginForm !== 'undefined' &&
            typeof loginForm.current !== 'undefined') {
            loginFormEl = loginForm.current;
        }
        const loginFormData = new FormData(loginFormEl);
        // const paramData = {
        //     email: loginFormData.get('email'),
        //     password: loginFormData.get('password'),
        //     name: loginFormData.get('name'),
        //     phone: loginFormData.get('phone'),
        //     profileImg: loginFormData.get('profileImg'),
        //     country: loginFormData.get('country'),
        //     company: loginFormData.get('company'),
        //     department: loginFormData.get('department'),
        //     position: loginFormData.get('position')
        // }

        dispatch(registReducer({
            loginFormData
        }));
    }
    const _resetForm = () => {
        let loginFormEl: any;
        if (typeof loginForm !== 'undefined' &&
            typeof loginForm.current !== 'undefined') {
            loginFormEl = loginForm.current;
        }
        const inputs = loginFormEl.querySelectorAll('input');
        // console.log(inputs);
        inputs.forEach(function(el){
            el.value = '';
            if(el.type == 'checkbox') {
                setRememberAccount(false);
            }
        })
    };
    const _closeRegistAlert=()=>{
        _resetForm();
        setShowRegistAlert(false);
        _setPageType('login');
    };
    const _onKeyUp = (e) => {
        if(e.keyCode == 13){//enter
            if(pageType == 'login' && e.target.name == 'password'){
                _login();
            }
            else if(pageType == 'findPwd' && e.target.name == 'email'){
                _SendResetPwdLink();
            }
            else if(pageType == 'resetPwd' && e.target.name == 'passwordConfirm'){
                _setNewPwd();
            }
        }
    }

    return (
        <LoginComp src={dummyImg} loginFormWidth={loginFormWidth} pageType={pageType} >
            <div>
                <div className='titleText'>
                    <div>
                    {pageType != null && pageType == 'regist'? null
                    : languageData.loginText}
                    </div>
                    <h1>{languageData.loginText2}</h1>
                    {pageType != null && pageType == 'regist'?
                        <div className='info'>
                            {textLineBreak(languageData.registDescript)}
                        </div>
                        :
                        <div className='info'>
                            <div><span className={'bold'}>{languageData.organizedField} : </span>{languageData.organizedValue}</div>
                            <div><span className={'bold'}>{languageData.hostField} : </span>{languageData.hostedValue}</div>
                            <div><span className={'bold'}>{languageData.supportField} : </span>{languageData.supported}</div>
                        </div>
                    }
                </div>
                <div className='mobileTitleText'>
                    <div className='logo'>
                        <svg width="68" height="24" viewBox="0 0 68 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9 24C18.4722 24 23.8 18.6274 23.8 12C23.8 5.37258 18.4722 0 11.9 0C5.32782 0 0 5.37258 0 12C0 18.6274 5.32782 24 11.9 24Z" fill="#00416B"/>
                            <path d="M57.5732 0.114286C57.0632 0.0571429 56.6099 0 56.0999 0C53.9466 0 51.9066 0.571429 50.1499 1.6C50.0932 1.65714 50.0366 1.65714 49.9799 1.71429C49.1299 2.17143 48.1666 2.4 47.1466 2.4C46.1266 2.4 45.1632 2.11429 44.3132 1.71429C44.2566 1.71429 44.1999 1.65714 44.1432 1.6C42.4999 0.628571 40.6299 0.0571429 38.5899 0C38.4766 0 38.3066 0 38.1932 0C31.6199 0 26.2932 5.37143 26.2932 12C26.2932 18.6286 31.6199 24 38.1932 24C40.4599 24 42.5566 23.3714 44.3132 22.2857C45.1632 21.8286 46.1266 21.6 47.1466 21.6C48.1666 21.6 49.1299 21.8857 49.9799 22.2857C51.7932 23.3714 53.8899 24 56.0999 24C62.6732 24 67.9999 18.6286 67.9999 12C67.9999 5.88571 63.4666 0.857143 57.5732 0.114286Z" fill="#005CB9"/>
                        </svg>
                    </div>
                    <div>
                        {pageType == 'login' ? '“Built on Hope”' :
                            pageType == 'regist' ? 'Register' :
                                pageType == 'findPwd' || pageType == 'resetPwd' ? 'Reset your password' :
                                    null
                        }
                    </div>
                </div>
                <div className='loginForm'>
                    <form ref={loginForm}  onSubmit={()=> function(){ return false; } }>
                        <div className={pageType == 'findPwd' || pageType == 'resetPwd'? 'show findPwdDescript' : 'hide findPwdDescript'} >
                            <h2>Reset your password</h2>
                            {pageType == 'findPwd'? <div>Enter your email address and we'll send you a link to reset your password.</div> : null}
                            {pageType == 'resetPwd'? <div className={'weightNormal'}><div className={'weightBold'}>openbooth@openbooth.net</div>You can create your new password here.</div> : null}
                        </div>
                        <InputFieldComp className={pageType != 'regist2' && pageType != 'resetPwd'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>ID <span ref={warnningEmailRef} className={'warn'}>{languageData.incorrectEmailFormat}</span></div>
                            <Inputfield name={'email'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Email'} noEmpty={true} validator={_checkEmailFormat} _onKeyUp={_onKeyUp} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'login' || pageType == 'regist' || pageType == 'resetPwd'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Password <span ref={warnningPwdRef} className={'warn'}>Password format is incorrect</span></div>
                            <Inputfield type={'password'} name={'password'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={deviceType != 'mobile'? languageData.passwordRule : 'Password'} noEmpty={true} validator={pageType == 'login'? null : _checkPwdFormat} _onKeyUp={_onKeyUp}/>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist' || pageType == 'resetPwd'? 'show passwordConfirm' : 'hide passwordConfirm'} >
                            <Inputfield type={'password'} name={'passwordConfirm'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={deviceType != 'mobile'? languageData.repeatPwd : 'Repeat password'} noEmpty={true} validator={_checkPwdFormat} _onKeyUp={_onKeyUp} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Name <span className={'warn'}>{languageData.emptyValueMsg}</span></div>
                            <Inputfield name={'name'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Name'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Phone <span className={'warn'}>{languageData.emptyValueMsg}</span></div>
                            <Inputfield name={'phone'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Phone'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'login'? 'show inlineBox rememberEmail' : 'hide inlineBox rememberEmail'} >
                            <Checkboxfield name={'rememberEmail'} onChange={(val: any)=>setRememberAccount(val)} checked={rememberAccount} width={'100%'} style={inputFieldStyle} text={languageData.rememberEmail} type={'login'} textColor={'#ffffff'} />
                            <div className={'warn alignRight'} ref={warnningAccountRef} >{languageData.incorrectAccount}</div>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2'? 'show' : 'hide'} >
                            <Inputfield type={'file'} name={'profileImg'} width={'100%'} style={inputFieldStyle}/>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist' && deviceType=='mobile'? 'show visitorInfo' : 'hide visitorInfo'} >
                            Visitor information
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2' || (pageType == 'regist' && deviceType=='mobile')? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Country <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'country'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Country'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2' || (pageType == 'regist' && deviceType=='mobile')? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Company / affiliation <span className={'warn'}>{languageData.emptyValueMsg}</span></div>
                            <Inputfield name={'company'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Company or affiliation'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2' || (pageType == 'regist' && deviceType=='mobile')? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Department <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'department'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Department'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2' || (pageType == 'regist' && deviceType=='mobile')? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Position <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'position'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Position'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'login'? 'show loginBtn' : 'hide loginBtn'} >
                            <Button fill={true} width={'100%'} style={LoginBtnStyle} _clickBtn={_login}>Login</Button>
                            <div className={'forgotPwdBtn_mobile'} onClick={()=>_setPageType('findPwd')}>
                                {languageData.forgotPwdTitle}
                            </div>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'findPwd'? 'show alignRight sendBtn' : 'hide alignRight sendBtn'} >
                            <Button fill={true} width={104} style={{height: '36px', padding: '7px 35px', 'font-weight': 'bold'}} _clickBtn={_SendResetPwdLink}>Send</Button>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'resetPwd'? 'show alignRight saveBtn' : 'hide alignRight saveBtn'} >
                            <Button fill={true} width={104} style={{height: '36px', padding: '7px 35px', 'font-weight': 'bold'}} _clickBtn={_setNewPwd}>Save</Button>
                        </InputFieldComp>
                        <InputFieldComp  className={pageType == 'regist' && deviceType !='mobile' ? 'show registBtn' : 'hide registBtn'} >
                            <Button width={'100%'} style={registBtnStyle} _clickBtn={()=>_setPageType('regist2')}>Next step</Button>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist2' || (pageType == 'regist' && deviceType=='mobile')? 'show registBtn' : 'hide registBtn'} >
                            <Button fill={true} width={'100%'} _clickBtn={_regist}>Register</Button>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'login'? 'show inlineBox btns loginBtmBtns_desktop' : 'hide inlineBox btns loginBtmBtns_desktop'} >
                            <div>
                                <div className={'fieldTitle'}>{languageData.forgotPwdTitle}</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('findPwd')}>Find your password</Button>
                            </div>
                            <div>
                                <div className={'fieldTitle'}>{languageData.registerTitle}</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('regist')}>Register</Button>
                            </div>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'login'? 'show btns loginBtmBtns_mobile' : 'hide btns loginBtmBtns_mobile'} >
                            <div>
                                <div className={'fieldTitle'}>{languageData.registerTitle}</div>
                                <Button width={'100%'} style={btnStyle} _clickBtn={()=>_setPageType('regist')}>Register</Button>
                            </div>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'regist' || pageType == 'regist2'? 'show inlineBox btns registBtmBtns_desktop' : 'hide inlineBox btns registBtmBtns_desktop'} >
                            <div>
                                <div className={'fieldTitle'}>{languageData.forgotPwdTitle}</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('findPwd')}>Find your password</Button>
                            </div>
                            <div>
                                <div className={'fieldTitle'}>{languageData.alreadyRegistTitle}</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('login')}>Login</Button>
                            </div>
                        </InputFieldComp>
                        <InputFieldComp className={pageType == 'findPwd'? 'show findPwdDescript' : 'hide findPwdDescript'} >
                            <b>openbooth@openbooth.net</b><br/>
                            <div className={'description'}>{languageData.sendPwdResetMailDescript}</div>
                        </InputFieldComp>
                    </form>
                </div>
            </div>
            <Alertmodal data={registAlertData} showModal={showRegistAlert} closeModal={_closeRegistAlert} onClick={()=>_regist()} />
        </LoginComp>
    )
}
export default Login;

interface InputFieldCompProps {
	marginTop: any;
}

const InputFieldComp = styled.div`
    position: relative;
    margin-bottom: 8px;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    ${({theme}) => theme.media.mobile`
    padding: 0 20px;
    `}
    
    ${({theme}) => theme.media.mobile`
    // &.regist2 {
    //     display: block;
    //     opacity: 1;
    // }
    `}
    &.passwordConfirm, &.sendBtn {
        padding-top: 8px;
        ${({theme}) => theme.media.mobile`
        padding-top: 16px;
            button {
                width: 100%;
                padding: 13px 0;
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
                height: auto;
            }
        &.sendBtn {
            margin-bottom: 116px;
        }
        &.passwordConfirm {
            padding-top: 8px;
        }
        `}
    }
    &.rememberEmail {
        padding-top: 13px;
        ${({theme}) => theme.media.mobile`
        padding-top: 8px;
        `}
    }
    &.visitorInfo {
        border-top: 1px solid #E9E9E9;
        margin-top: 40px;
        padding-top: 39px;
        font-weight: 800;
        font-size: 20px;
        line-height: 28px;
    }
    &.loginBtn {
        position: relative;
        padding-top: 14px;
        ${({theme}) => theme.media.mobile`
        margin-bottom: 100px;
        `}
        .forgotPwdBtn_mobile {
            display: none;
            ${({theme}) => theme.media.mobile`
                display: block;
            `}
            position: absolute;
            bottom: -28px;
            right: 20px;
        }
    }
    &.saveBtn {
        ${({theme}) => theme.media.desktop`
        padding-top: 30px;
        `}
        ${({theme}) => theme.media.mobile`
        padding-top: 16px;
        button {
            width: 100%;
            padding: 13px 0;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            height: auto;
        }
        `}
    }
    &.registBtn {
        ${({theme}) => theme.media.desktop`
        padding-top: 16px;
        `}
        ${({theme}) => theme.media.mobile`
        padding: 40px 20px;
        `}
    }
    &.loginBtmBtns_desktop {
        padding-top: 10px;
        ${({theme}) => theme.media.mobile`
        display: none;
        `}
    }
    &.loginBtmBtns_mobile {
        border-top: 1px solid #E9E9E9;
        padding: 23px 20px;
    
        ${({theme}) => theme.media.desktop`
        display: none;
        `}
    }
    &.registBtmBtns_desktop {
        padding-top: 11px;
        ${({theme}) => theme.media.mobile`
        display: none;
        `}
    }

    .warn { color: #F58181; opacity: 0; }
    .fieldTitle {
        // position: absolute;
        // top: -20px;
        // left: 10px;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        height: 20px;
        padding-left: 8px;
        padding-bottom: 4px;
    }
`;

interface LoginCompProps {
    pageType: string,
    src: string,
    loginFormWidth: number
}

const LoginComp = styled.div`
font-family: 'NanumSquare';
width: auto;
height: auto;
color: #FFFFFF;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))${(props: LoginCompProps) => (props.src != null ? ', url('+props.src+')' : '')}, #000000;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;
${({theme}) => theme.media.desktop`
    max-width: 1920px;
    min-width: 1170px;
    max-height: 1080px;
    overflow: hidden;
`}
> div {
    width: fit-content;
    ${({theme}) => theme.media.desktop`
        ${(props: LoginCompProps) => props.pageType != null && props.pageType == 'regist' ? 'padding-top: 240px' : 'padding-top: 320px'};
        min-width: 1170px;
        margin: 0 auto;
    `}
    ${({theme}) => theme.media.mobile`
        width: 100%;
        padding-top: 40px;
    `}
    > div {
        display: inline-block;
        vertical-align: top;
        ${({theme}) => theme.media.desktop`
            ${(props: LoginCompProps) => props.pageType != null && props.pageType == 'regist' ? 'margin-right: 235px' : 'margin-right: 218px'};
        `}
        :last-child { margin-right: 0; vertical-align: middle; }
    }
    .titleText {
        ${({theme}) => theme.media.mobile`
            display: none;
        `}
        max-width: ${(props: LoginCompProps) => props.pageType != null && props.pageType == 'regist' ? '503px' : '520px'};
        font-size: 32px;
        line-height: 40px;
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        color: #FFFFFF;

        & > .info {
            padding-top: ${(props: LoginCompProps) => (props.pageType != null && props.pageType == 'regist' ? '50px' : '38px')};
            padding-bottom: 40px;
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
            margin-top: ${(props: LoginCompProps) => (props.pageType != null && props.pageType == 'regist' ? '0' : '38px')};
            margin-bottom: ${(props: LoginCompProps) => (props.pageType != null && props.pageType == 'regist' ? '13px' : '41px')};
            padding: 0 0;
            font-weight: 800;
            font-size: 64px;
            line-height: 72px;
        }
    }
    .mobileTitleText {
        display: none;
        ${({theme}) => theme.media.mobile`
            display: block;
        `}
        padding: 0 20px;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
        margin-bottom: 40px;
        :first-child { margin-bottom: 16px; }
    }
    .loginForm {
        ${({theme}) => theme.media.mobile`
            width: 100%;
        `};
        ${({theme}) => theme.media.desktop`
            ${(props: LoginCompProps) => (props.loginFormWidth != null ? 'width: ' + props.loginFormWidth+'px' : 'width: 430px')};
        `}
        > form {
            & .findPwdDescript {
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
                margin: 40px 0; 
                ${({theme}) => theme.media.mobile`
                    :first-child { margin-top: 0; }
                    padding: 0 20px;
                    :last-child { margin-bottom: 0; border-top: 1px solid #E9E9E9; padding-top: 41px; }
                `}
                ${({theme}) => theme.media.desktop`
                    :first-child { margin-top: 0; margin-bottom: 16px; }
                    :last-child { margin-bottom: 0; }
                `}
                & h2 {
                    ${({theme}) => theme.media.mobile`
                        display: none;
                    `}
                    font-weight: bold;
                    font-size: 32px;
                    line-height: 40px;
                    margin-top: 0;
                    margin-bottom: 40px;
                }
                & .description {
                    font-weight: normal;
                    ${({theme}) => theme.media.mobile`
                        font-size: 14px;
                        line-height: 22px;
                    `}
                }
            }
            & .inlineBox {
             > * {
                position: relative;
                display: inline-block;
                width: 50%;
             }
                ${({theme}) => theme.media.mobile`
                &.rememberEmail {
                    display: flex;
                    &.hide { display: none; }
                    > * {
                        display: block;
                        width: auto;
                        :last-child { flex: 1; }
                    }
                }
                `}
             &.btns {
                & .fieldTitle {
                    margin-top: 4px;
                    font-weight: 100;
                    font-size: 12px;
                    line-height: 20px;
                    height: 16px;
                    padding-left: 12px;
                    padding-bottom: ${(props: LoginCompProps) => props.pageType != null && props.pageType == 'regist' ? '6px' : '7px'};
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
.weightNormal {
    font-weight: normal;
}
.weightBold {
    font-weight: bold;
}
`;