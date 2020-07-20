import React, { Component } from 'react';
import styled from "styled-components";

class Checkboxfield extends Component {

  constructor() {
    super()
    this.state = {
        isCheck: false,
    }
  }

  _setCheckVal = ()=> {
      const val = !this.state.isCheck;
      this.setState({
          isCheck: val
      })
  }

  render(){
    const { name, value, text } = this.props;
    const { isCheck } = this.state;
    const { _setCheckVal } = this;
    return (
        <CheckBox className='checkboxField' >
          <input type="checkbox" name={name} value={value} />
          <div className={isCheck? 'box checked' : 'box'} onClick={()=> _setCheckVal()}></div>
            {text != null? <div className='text'>{text}</div> : null}
    </CheckBox>
  )
  }
}

const CheckBox = styled.div`
    & input {
        display: none;
    }
    & .box {
        display: inline-block;
        line-height: 22px;
        vertical-align: middle;
        width: 16px;
        height: 16px;
        background: #F7F7F9;
        border: 0.8px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 4px;
        &.checked {
            background: #005CB9;
            border: 0.8px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 4px;
            background-image: url("data:image/svg+xml;utf8,<svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 2L0 3L3 6L8 1L7 0L3 4L1 2Z' fill='white'/></svg>");
            background-repeat: no-repeat;
            background-size: 70% 70%;
            background-position-x: center;
            background-position-y: center;
            &:hover {
                border: 0.8px solid #005CB9;
            }
        }
    }
    & .text {
        display: inline-block;
        line-height: 22px;
        vertical-align: middle;
        font-weight: normal;
        font-size: 14px;
        color: #999999;
        padding-left: 10px;
    }
`;
export default Checkboxfield;

