import React, { useState, useRef } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../modules";
import {
    isEmailOverlapConfirmReducer,
    getTokenReducer,
    sendFIndPwdMailReducer,
    registReducer
} from "../../modules/token/token";

import {Img, Checkboxfield, Inputfield, Button, Alertmodal} from "../../components";

import dummyImg from "../../assets/img/bg-dummy.png";

const Login = props => {
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    // console.log("languageData::", languageData);

    const dispatch = useDispatch();
    const history = props.history;
    const [pageType, setPageType] = useState<string>('login');
    const loginForm = useRef<HTMLFormElement>(null);
    const warnningEmailRef = useRef(null);
    const [emailValue, setEmailValue] = useState<string>('');
    const warnningPwdRef = useRef(null);
    const warnningAccountRef = useRef(null);
    const [rememberAccount, setRememberAccount] = useState<boolean>(false);
    const [showRegistAlert, setShowRegistAlert] = useState<boolean>(false);
    
    const registAlertData = {
        title: 'Lorem ipsum dolor',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet metus ac libero cursus maximus. Nulla hendrerit porta facilisis.'
    };

    const isOverlapEmail = useSelector((state: RootState) => state.tokenReducer.isOverlap);
    console.log("isOverlapEmail::", isOverlapEmail);
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
        'color': '#ffffff'
    }
    const LoginBtnStyle = {
        'font-weight': 'bold',
        'font-size': '16px',
        'line-height': '24px'
    }

    const _setPageType = function(type:string) {
        if(type == 'regist2'){
            if(!_checkFormEmpty()) return false;
        }
        else{
            _resetForm();
        }
        setPageType(type);
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
        else if(pageType == 'regist' || pageType == 'regist2'){
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
        const isRememberAccount = loginFormEl.querySelector('[name=rememberEmail]');

        dispatch(getTokenReducer(email, pwd));
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
        setPageType('login');
    };
    const _onKeyPressPassword = (e) => {
        console.log(e);
        if(pageType == 'login' && e.keyCode == 13){//enter
            _login();
        }
    }

    const textLineBreak = (lines) => {
        return lines ?
            lines.split(/[\r\n]/).map((partial, i) =>
                <span key={i}>{partial}{i !== lines.length - 1 && <br />}</span>
            )
            : lines;
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
                            <div><span className={'bold'}>{languageData.organizedField} : </span>{languageData.organized}</div>
                            <div><span className={'bold'}>{languageData.hostField} : </span>{languageData.hosted}</div>
                            <div><span className={'bold'}>{languageData.supportField} : </span>{languageData.supported}</div>
                        </div>
                    }
                </div>
                <div className='loginForm'>
                    <form ref={loginForm}>
                        <div className={pageType == 'findPwd'? 'show findPwdDescript' : 'hide findPwdDescript'} >
                            <h2>Reset your password</h2>
                            <div>Enter your email address and we'll send you a link to reset your password.</div>
                        </div>
                        <InputFieldComp marginTop={0} className={pageType != 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>ID <span ref={warnningEmailRef} className={'warn'}>{languageData.incorrectEmailFormat}</span></div>
                            <Inputfield name={'email'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Email'} noEmpty={true} validator={_checkEmailFormat} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'login' || pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Password <span ref={warnningPwdRef} className={'warn'}>Password format is incorrect</span></div>
                            <Inputfield type={'password'} name={'password'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={languageData.passwordRule} noEmpty={true} validator={pageType == 'login'? null : _checkPwdFormat} onKeyPress={_onKeyPressPassword}/>
                        </InputFieldComp>
                        <InputFieldComp marginTop={8} className={pageType == 'regist'? 'show' : 'hide'} >
                            <Inputfield type={'password'} name={'passwordConfirm'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={languageData.repeatPwd} noEmpty={true} validator={_checkPwdFormat} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Name <span className={'warn'}>{languageData.emptyValueMsg}</span></div>
                            <Inputfield name={'name'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Name'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Phone <span className={'warn'}>{languageData.emptyValueMsg}</span></div>
                            <Inputfield name={'phone'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Phone'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={12} className={pageType == 'login'? 'show inlineBox' : 'hide inlineBox'} >
                            <Checkboxfield name={'rememberEmail'} onChange={(val: any)=>setRememberAccount(val)} checked={rememberAccount} width={'100%'} style={inputFieldStyle} text={languageData.rememberEmail} type={'login'} textColor={'#ffffff'} />
                            <div className={'warn alignRight'} ref={warnningAccountRef} >{languageData.incorrectAccount}</div>
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <Inputfield type={'file'} name={'profileImg'} width={'100%'} style={inputFieldStyle}/>
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Country <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'country'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Country'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Company / affiliation <span className={'warn'}>{languageData.emptyValueMsg}</span></div>
                            <Inputfield name={'company'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Company or affiliation'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Department <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'department'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Department'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Position <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'position'} width={'100%'} style={inputFieldStyle} height={'48px'} padding={'15px'} placeholder={'Position'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'login'? 'show' : 'hide'} >
                            <Button fill={true} width={'100%'} style={LoginBtnStyle} _clickBtn={_login}>Login</Button>
                        </InputFieldComp>
                        <InputFieldComp marginTop={8} className={pageType == 'findPwd'? 'show alignRight' : 'hide alignRight'} >
                            <Button fill={true} width={104} style={{height: '36px', padding: '7px 35px', 'font-weight': 'bold'}} _clickBtn={_SendResetPwdLink}>Send</Button>
                        </InputFieldComp>
                        <InputFieldComp  marginTop={16} className={pageType == 'regist'? 'show' : 'hide'} >
                            <Button width={'100%'} style={registBtnStyle} _clickBtn={()=>_setPageType('regist2')}>Next step</Button>
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <Button fill={true} width={'100%'} _clickBtn={_regist}>Register</Button>
                        </InputFieldComp>
                        <InputFieldComp marginTop={10} className={pageType == 'login'? 'show inlineBox btns' : 'hide inlineBox btns'} >
                            <div>
                                <div className={'fieldTitle'}>{languageData.forgotPwdTitle}</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('findPwd')}>Find your password</Button>
                            </div>
                            <div>
                                <div className={'fieldTitle'}>{languageData.registerTitle}</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('regist')}>Register</Button>
                            </div>
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'regist' || pageType == 'regist2'? 'show inlineBox btns' : 'hide inlineBox btns'} >
                            <div>
                                <div className={'fieldTitle'}>{languageData.forgotPwdTitle}</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('findPwd')}>Find your password</Button>
                            </div>
                            <div>
                                <div className={'fieldTitle'}>{languageData.alreadyRegistTitle}</div>
                                <Button width={'210'} style={btnStyle} _clickBtn={()=>_setPageType('login')}>Login</Button>
                            </div>
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'findPwd'? 'show findPwdDescript' : 'hide findPwdDescript'} >
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
    padding-top: ${(props: InputFieldCompProps) => (props.marginTop != null && props.marginTop > 0 ? props.marginTop+'px' : '0')};
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
        height: 20px;
        padding-left: 8px;
        padding-bottom: 4px;
    }
`;

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