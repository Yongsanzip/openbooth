import React, { Component } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../modules";
import {Button, Custommodal, Inputfield} from "./index";

function Accesscode(props) {
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const _access = function(e){
        console.log("click btn on accesscode modal!", props._access);
        if(props._access != null) props._access();
    };
    const btnStyle = {
        padding: '7px 0',
        width: '105px'
    }

    return(
        <AccesscodeComp small={props.type == 'small'? true : false} noDec={props.data.content != null ? null : true}>
            <div className='content'>
                <div className='title'>{props.data.title}</div>
                {props.data.content != null ? <div className='description'>{props.data.content}</div> : null }
                <div>
                    <Inputfield width={'100%'} inputHeight={'22px'} padding={'9px 12px'} placeholder={languageData.accessCode} />
                    <div className="warning">{languageData.accessCodeNotMatch}</div>
                </div>
            </div>
            <div className='btns'>
                <Button _clickBtn={_access} width={105} style={btnStyle} fill={true} >{props.btn}</Button>
            </div>
        </AccesscodeComp>
    )
}

const AccesscodeComp = styled.div`
    width: initial;
    background: #fff;
    > .content {
        padding: ${props => (props.small ? '0 16px' : '0 24px')};
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #999999;
        .title {
            font-size: ${props => (props.small ? '16px' : '18px')};
            line-height: ${props => (props.small ? '24px' : '26px')};
            color: #000000;
            margin-top: ${props => (props.small ? '16px' : '24px')};
        }
        .description {
            margin-top: 16px;
        }
        > *:last-child {
            position: relative;
            margin-top: ${props => (props.noDec != null ? '32px' : '22px')};
            margin-bottom: ${props => (props.noDec != null ? '33px' : '32px')};
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
        padding: ${props => (props.small ? '0 10px' : '0 10px')};
        height: 56px;
        line-height: 56px;
        text-align: right;
        border-top: 1px solid #E9E9E9;
        box-sizing: border-box;
    }
`;

export default Accesscode;