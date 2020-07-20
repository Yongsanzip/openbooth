import React, { Component } from 'react';
import styled, {createGlobalStyle} from "styled-components";

class Inputfield extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFocus: false,
    }
  }

  _setFocusVal = (val) => {
    this.setState({ isFocus : val })
  }

  render(){
    const { placeholder, disabled, width, name } = this.props;
    const { _setFocusVal } = this;
    const { isFocus } = this.state;

    return (
        <InputField disabled={disabled} isFocus={isFocus} width={width}>
          <input type="text" name={name} placeholder={placeholder} width={ width } onFocus={()=> _setFocusVal(true) } onBlur={()=> _setFocusVal(false)}/>
      </InputField>
    )
  }
}

const InputField = styled.div`
  position: relative;
  background: #F7F7F9;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;
  border-radius: 8px;
  height: 40px;
  padding: 0 10px;
  width: ${props => (props.width != null ? props.width.indexOf('%') > -1? props.width : props.width : '320px')};
  border-color: ${props => (props.disabled ? '#F58181' : props.isFocus? '#999999' : 'E9E9E9')};
  & input {
    position: absolute;
    top: 7px;
    left: 7px;
    padding: 0;
    border: 0;
    height: calc(100% - 16px);
    width: ${props => (props.width != null && props.width != 'inherit' && props.width.indexOf('%') < 0 ? (Number(props.width) - 45) + 'px' : 'calc(100% - 20px)')};
    background: #F7F7F9;
    font-size: 14px;
    line-height: 22px;
    color: #999999;
    :focus {
      outline: none;
    }
  }
`;

export default Inputfield;
