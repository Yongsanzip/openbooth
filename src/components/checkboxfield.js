import React, { Component } from 'react';
import styled from "styled-components";

class Checkboxfield extends Component {

  constructor(props) {
    super(props);
  }

  _setCheckVal = ()=> {
      this.props.onChange(!this.props.checked);
  }

    render(){
    const { name, checked, text, textColor, type } = this.props;
        const { _setCheckVal } = this;
    return (
        <CheckBox className='checkboxField' textColor={textColor} type={type}>
          <input type="checkbox" name={name} checked={checked} readOnly />
          <div onClick={()=> _setCheckVal()}>
              <div className={checked? 'box checked' : 'box'}>
                  {checked?
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.25 2.66667L0 4L3.75 8L10 1.33333L8.75 0L3.75 5.33333L1.25 2.66667Z" fill="white"/></svg>
                      : null
                  }
              </div>
              {text != null? <div className='text'>{text}</div> : null}
          </div>
    </CheckBox>
  )
  }
}

const CheckBox = styled.div`
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
        background: ${props => (props.type == 'login' ? 'rgba(255, 255, 255, 0)' : '#F7F7F9')};
        border: 0.8px solid ${props => (props.type == 'login' ? '#ffffff' : '#E9E9E9')};
        box-sizing: border-box;
        border-radius: 4px;
        &.checked {
            background: ${props => (props.type == 'login' ? 'rgba(255, 255, 255, 0.64)' : '#005CB9')};
            border: 0.8px solid ${props => (props.type == 'login' ? '#ffffff' : '#005CB9')};
            box-sizing: border-box;
            border-radius: 4px;
            > svg {
                position: absolute;
                top: 3px;
                left: 2px;
            }
        }
        &:hover {
            background: ${props => (props.type == 'login' ? 'rgba(255, 255, 255, 0.32)' : '')};
            border: 0.8px solid ${props => (props.type == 'login' ? '#ffffff' : '#005CB9')};
        }
        
        
    }
    & .text {
        display: inline-block;
        line-height: 22px;
        vertical-align: middle;
        font-weight: normal;
        font-size: 14px;
        color: ${props => (props.textColor != null ? props.textColor : '#999999')};
        padding-left: 10px;
    }
`;
export default Checkboxfield;

