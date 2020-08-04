import React, { Component } from 'react';
import styled from "styled-components";

function Checkboxfield(props) {
  const _setCheckVal = ()=> {
      if(props.onChange != null) props.onChange(!props.checked);
  }

return (
    <CheckBoxComp className='checkboxField' textColor={props.textColor} textStyle={props.textStyle} type={props.type} customStyle={props.style}>
      <input type="checkbox" name={props.name} checked={props.checked} readOnly />
      <div onClick={()=> _setCheckVal()}>
          <div className={props.checked? 'box checked' : 'box'}>
              {props.checked?
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.25 2.66667L0 4L3.75 8L10 1.33333L8.75 0L3.75 5.33333L1.25 2.66667Z" fill="white"/></svg>
                  : null
              }
          </div>
          {props.text != null? <div className='text'>{props.text}</div> : null}
      </div>
    </CheckBoxComp>
  )
}

interface CheckBoxCompProps {
    type: string,
    textStyle: any,
    textColor: string,
    customStyle: any
}
const CheckBoxComp = styled.div`
    & input {
        display: none;
    }
    & .box {
        position: relative;
        display: inline-block;
        line-height: 22px;
        vertical-align: middle;
        width: 16px;
        height: 16px;
        background: ${(props: CheckBoxCompProps) => (props.type == 'login' ? 'rgba(255, 255, 255, 0)' : '#F7F7F9')};
        border: 0.8px solid ${(props: CheckBoxCompProps) => (props.type == 'login' ? '#ffffff' : '#E9E9E9')};
        box-sizing: border-box;
        border-radius: 4px;
        ${(props: CheckBoxCompProps) => (props.customStyle != null ? props.customStyle : null)};
        &.checked {
            background: ${(props: CheckBoxCompProps) => (props.type == 'login' ? 'rgba(255, 255, 255, 0.64)' : '#005CB9')};
            border: 0.8px solid ${(props: CheckBoxCompProps) => (props.type == 'login' ? '#ffffff' : '#005CB9')};
            box-sizing: border-box;
            border-radius: 4px;
            ${(props: CheckBoxCompProps) => (props.customStyle != null && props.customStyle.checked != null? props.customStyle.checked : null)};
            > svg {
                position: absolute;
                top: 3px;
                left: 2px;
            }
        }
        &:hover {
            background: ${(props: CheckBoxCompProps) => (props.type == 'login' ? 'rgba(255, 255, 255, 0.32)' : '')};
            border: 0.8px solid ${(props: CheckBoxCompProps) => (props.type == 'login' ? '#ffffff' : '#005CB9')};
            ${(props: CheckBoxCompProps) => (props.customStyle != null && props.customStyle.hover != null? props.customStyle.hover : null)};
        }
        
        
    }
    & .text {
        display: inline-block;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        vertical-align: middle;
        color: ${(props: CheckBoxCompProps) => (props.textColor != null ? props.textColor : '#999999')};
        
        ${({theme}) => theme.media.desktop`
        padding-left: 8px;
        `}
        ${({theme}) => theme.media.mobile`
        padding-left: 4px;
        `}
        ${(props: CheckBoxCompProps) => (props.textStyle != null ? props.textStyle : null)};
    }
`;
export default Checkboxfield;

