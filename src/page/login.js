import React, { Component } from 'react';
import styled from "styled-components";
import {Img, Checkboxfield, Inputfield, Button} from "../components/index";
import dummyImg from "./../assets/img/bg-dummy.png"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { login } = this.props;
        const loginFormWidth = 435;
        const resisterBtnStyle = {
            'border-color': '#ffffff',
            background: 'rgba(255, 255, 255, 0)',
            color: '#ffffff',
            hover: {
                'border-color': '#ffffff',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.32)'
            }
        }
        return (
            <LoginComp src={dummyImg} loginFormWidth={loginFormWidth}>
                <div>
                    <div className='titleText'>
                        Online Exhibition of Third Countries
                        with The World Bank
                        <h1>“Built on Hope”</h1>
                        <div className='info'>
                            <div><span>Organized by :</span>The World Bank</div>
                            <div><span>Hosted by :</span>Cnttech, Openbooth</div>
                            <div><span>Supported by :</span>Value</div>
                        </div>
                    </div>
                    <div className='loginForm'>
                        <form>
                            <div>
                                <div className={'fieldTitle'}>ID <span className={'warn'}>Email format is incorrect</span></div>
                                <Inputfield name={'email'} width={'100%'} placeholder={'Email'} />
                            </div>
                            <div>
                                <div className={'fieldTitle'}>Password</div>
                                <Inputfield name={'password'} width={'100%'} placeholder={'At least 8 characters long including English and number'} />
                            </div>
                            <div className={'inlineBox'}>
                                <Checkboxfield name={'rememberEmail'} width={'100%'} text={'Remember my email'} type={'login'} />
                                <div className={'warn'}>The ID or password do not match.</div>
                            </div>
                            <div>
                                <Button fill={true} width={'100%'} _clickBtn={login}>Login</Button>
                            </div>
                            <div className={'inlineBox'}>
                                <div>
                                    <div className={'fieldTitle'}>Forgot your password?</div>
                                    <Button width={'210'} style={resisterBtnStyle}>Find your password</Button>
                                </div>
                                <div>
                                    <div className={'fieldTitle'}>Welcome!</div>
                                    <Button width={'210'} style={resisterBtnStyle}>register</Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </LoginComp>
        )
    }
}

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
        :last-child { margin-right: 0; }
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
         > div {
            position: relative;
            margin-top: 25px;
            :first-child { margin-top: 0; }
            :last-child { margin-top: 46px; }
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;

            & .warn { color: #F58181; }
            & .fieldTitle {
                position: absolute;
                top: -20px;
                left: 10px;
                font-weight: normal;
                font-size: 12px;
                line-height: 20px;
            }
         }
            & .inlineBox {
             > * {
                position: relative;
                display: inline-block;
                width: 50%;
                :last-child { text-align: right; }
             }
            }
        }
    }
}
`;

export default Login;
