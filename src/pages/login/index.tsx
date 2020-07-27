import React, { useState, useRef } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { isEmailOverlapConfirmReducer, getTokenReducer } from "../../modules/token/token";

import {Img, Checkboxfield, Inputfield, Button, Alertmodal} from "../../components";
import {emailValidator, pwdValidator, pwdConfirmValidator, emptyCheck} from "../../common/validation";

import dummyImg from "../../assets/img/bg-dummy.png";
import {RootState} from "../../modules";

const Login = props => {
    const isOverlapEmail = useSelector((state: RootState) => state.tokenReducer.isOverlap);
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

    let warnningEmailEl: any;
    if (typeof warnningEmailRef !== 'undefined' &&
        typeof warnningEmailRef.current !== 'undefined') {
        warnningEmailEl = warnningEmailRef.current;
    }
    if(isOverlapEmail && pageType == 'regist'){
        warnningEmailEl.style.opacity = '1';
        warnningEmailEl.innerText = "이미 가입된 이메일 입니다.";
    }
    else if(!isOverlapEmail && pageType == 'findPwd' && emailValue != ''){
        warnningEmailEl.style.opacity = '1';
        warnningEmailEl.innerText = "가입되지 않은 이메일 입니다.";
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

    const _setPageType = function(type:string) {
        if(type == 'regist2'){
            if(!_checkFormEmpty()) return false;
        }
        setPageType(type);
    };
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
            // const response = props.isOverlapEmailCheck({////dispatch(isEmailOverlapConfirm())
            //     email: inputValue
            // });
            // if(response.result !== true){
            //     warnningEmailRef.current.style.opacity = '1';
            //     warnningEmailRef.current.innerText = '중복된 아이디입니다.';
            //     return false;
            // }
            //
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
            if(!check.result){
                warnningPwdEl.style.opacity = '1';
                warnningPwdEl.innerText = check.msg;
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
        if(true) {
        }
        else{
            let warnningAccountEl: any;
            if (typeof warnningAccountRef !== 'undefined' &&
                typeof warnningAccountRef.current !== 'undefined') {
                warnningAccountEl = warnningAccountRef.current;
            }
            warnningAccountEl.style.opacity = '1';
        }
    };
    const _SendResetPwdLink = () => {
        const email = _checkEmailFormat();
        if(!email) {
            return false;
        }

        const response = props.findAccount({
            email: email
        });
        console.log("send!", response);

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
        console.log(loginFormData);
        const response = props.regist(loginFormData);

        if(response.result){
            setShowRegistAlert(true);
        }
        else{
            let warnningEmailEl: any;
            if (typeof warnningEmailRef !== 'undefined' &&
                typeof warnningEmailRef.current !== 'undefined') {
                warnningEmailEl = warnningEmailRef.current;
            }
            warnningEmailEl.style.opacity = '1';
            warnningEmailEl.innerText = 'That email is taken. Try another';
        }
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

    return (
        <LoginComp src={dummyImg} loginFormWidth={loginFormWidth} >
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
                        <InputFieldComp marginTop={0} className={pageType != 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>ID <span ref={warnningEmailRef} className={'warn'}>Email format is incorrect</span></div>
                            <Inputfield name={'email'} width={'100%'} style={inputFieldStyle} placeholder={'Email'} noEmpty={true} validator={_checkEmailFormat} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'login' || pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Password <span ref={warnningPwdRef} className={'warn'}>Password format is incorrect</span></div>
                            <Inputfield name={'password'} width={'100%'} style={inputFieldStyle} placeholder={'At least 8 characters long including English and number'} noEmpty={true} validator={pageType == 'login'? _checkEmailFormat : _checkPwdFormat} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={8} className={pageType == 'regist'? 'show' : 'hide'} >
                            <Inputfield name={'passwordConfirm'} width={'100%'} style={inputFieldStyle} placeholder={'Repeat password'} noEmpty={true} validator={_checkPwdFormat} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Name <span className={'warn'}>Enter this value</span></div>
                            <Inputfield name={'name'} width={'100%'} style={inputFieldStyle} placeholder={'Name'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Phone <span className={'warn'}>Enter this value</span></div>
                            <Inputfield name={'phone'} width={'100%'} style={inputFieldStyle} placeholder={'Phone'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'login'? 'show inlineBox' : 'hide inlineBox'} >
                            <Checkboxfield name={'rememberEmail'} onChange={(val: any)=>setRememberAccount(val)} checked={rememberAccount} width={'100%'} style={inputFieldStyle} text={'Remember my email'} type={'login'} textColor={'#ffffff'} />
                            <div className={'warn alignRight'} ref={warnningAccountRef} >The ID or password do not match.</div>
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <Inputfield type={'file'} name={'profileImg'} width={'100%'} style={inputFieldStyle} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Country <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'country'} width={'100%'} style={inputFieldStyle} placeholder={'Country'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Company / affiliation <span className={'warn'}>Enter this value</span></div>
                            <Inputfield name={'company'} width={'100%'} style={inputFieldStyle} placeholder={'Company or affiliation'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Department <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'department'} width={'100%'} style={inputFieldStyle} placeholder={'Department'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <div className={'fieldTitle'}>Position <span className={'warn'}>Select this value</span></div>
                            <Inputfield name={'position'} width={'100%'} style={inputFieldStyle} placeholder={'Position'} noEmpty={true} />
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'login'? 'show' : 'hide'} >
                            <Button fill={true} width={'100%'} style={inputFieldStyle} _clickBtn={_login}>Login</Button>
                        </InputFieldComp>
                        <InputFieldComp marginTop={0} className={pageType == 'findPwd'? 'show alignRight' : 'hide alignRight'} >
                            <Button fill={true} width={104} _clickBtn={_SendResetPwdLink}>Send</Button>
                        </InputFieldComp>
                        <InputFieldComp  marginTop={16} className={pageType == 'regist'? 'show' : 'hide'} >
                            <Button width={'100%'} style={registBtnStyle} _clickBtn={()=>_setPageType('regist2')}>Next step</Button>
                        </InputFieldComp>
                        <InputFieldComp marginTop={16} className={pageType == 'regist2'? 'show' : 'hide'} >
                            <Button fill={true} width={'100%'} _clickBtn={_regist}>Register</Button>
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
                        <InputFieldComp marginTop={0} className={pageType == 'findPwd'? 'show findPwdDescript' : 'hide findPwdDescript'} >
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
        padding-left: 10px;
        padding-bottom: 4px;
    }
`;

interface LoginCompProps {
	src: string,
   loginFormWidth: number
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
        width: ${(props: any) => (props.loginFormWidth != null ? props.loginFormWidth+'px' : '430px')};
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
             }
            }
        }
    }
}
`;