import React, {Component, useEffect, useState} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../modules";
import {Button, Custommodal, Inputfield} from "./index";
import {getBrowserSize} from "../common/common";

function Accesscode(props) {
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const [deviceType, setDeviceType] = useState('pc');
    const _setDeviceType = () => {
        setDeviceType(getBrowserSize());
    }

    useEffect(()=>{
        _setDeviceType();
        window.addEventListener('resize', _setDeviceType);

        return function cleanup() {
            window.removeEventListener('resize', _setDeviceType);
        };
    }, [])

    const _access = function(e){
        console.log("click btn on accesscode modal!", props._access);
        if(props._access != null) props._access();
    };

    return(
        <AccesscodeComp small={props.type == 'small'? true : false} noDec={props.data.content != null ? null : true}>
            <div className='content'>
                <div className='title'>{props.data.title}</div>
                {props.data.content != null ? <div className='description'>{props.data.content}</div> : null }
                <div>
                    <Inputfield width={'100%'} inputHeight={props.isMobile != null? '20px' : '22px'} padding={props.isMobile != null? '10px 12px' : '9px 12px'} placeholder={languageData.accessCode} />
                    <div className="warning">{languageData.accessCodeNotMatch}</div>
                </div>
            </div>
            <div className='btns modalBtns'>
                {props.closeModal != null? <Button _clickBtn={props.closeModal} className={'mobileCloseBtn'} >{languageData.close}</Button> : null}
                <Button _clickBtn={_access} width={105} style={{
                    padding: deviceType == 'pc'? '7px 0' : '6px 0',
                    width: deviceType == 'pc'? '105px': '88px'
                }} fill={true} >{props.btn}</Button>
            </div>
        </AccesscodeComp>
    )
}

interface AccesscodeCompProps {
    small: any,
    noDec: any
}
const AccesscodeComp = styled.div`
    width: initial;
    background: #fff;
    > .content {
        padding: ${(props:AccesscodeCompProps) => (props.small != null ? '0 16px' : '0 24px')};
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #999999;
        .title {
            color: #000000;
            margin-top: ${(props:AccesscodeCompProps) => (props.small != null ? '16px' : '24px')};
            
            ${({theme}) => theme.media.desktop`
            ${(props:AccesscodeCompProps) => (props.small != null ? 'font-size: 16px;' : 'font-size: 18px;')};
            ${(props:AccesscodeCompProps) => (props.small != null? 'line-height: 24px;' : 'line-height: 26px;')};
            `}
            ${({theme}) => theme.media.mobile`
            ${(props:AccesscodeCompProps) => (props.small != null ? 'font-size: 12px;' : 'font-size: 18px;')};
            ${(props:AccesscodeCompProps) => (props.small != null? 'line-height: 20px;' : 'line-height: 26px;')};
            `}

        }
        .description {
            margin-top: 16px;
        }
        > *:last-child {
            position: relative;
            ${({theme}) => theme.media.desktop`
            ${(props:AccesscodeCompProps) => (props.noDec != null ? 'margin-top: 32px;' : 'margin-top: 22px;')};
            ${(props:AccesscodeCompProps) => (props.noDec != null ? 'margin-bottom: 33px;' : 'margin-bottom: 32px;')};
            `}
            ${({theme}) => theme.media.mobile`
            margin-top: 15px;
            margin-bottom: 27px;
            `}
        }
        .warning {
            position: absolute;
            bottom: -20px;
            right: 0;
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;
            color: #F58181;
            text-align: right;
        }
    }
    > .btns {
        height: auto;
        line-height: normal;
        text-align: right;
        border-top: 1px solid #E9E9E9;
        box-sizing: border-box;
        > * {
            display: inline-block;
        }
    }
`;

export default Accesscode;