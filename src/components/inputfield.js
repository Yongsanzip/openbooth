import React, {Component, createRef} from 'react';
import styled, {createGlobalStyle} from "styled-components";

class Inputfield extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFocus: false,
      inputRef: createRef(),
    }
  }

  _setFocusVal = (val) => {
    this.setState({ isFocus : val })
    if(!val){
      //Focusout 시에 유효성 검사
      this._onChange();
    }
  }

  _onChange = () => {
    if(this.props.validator != null){
      this.props.validator(this.state.inputRef.current.value);
    }
  }

  render(){
    const { placeholder, disabled, width, name, style } = this.props;
    const { _setFocusVal, _onChange } = this;
    const { inputRef, isFocus } = this.state;

    return (
        <InputField disabled={disabled} isFocus={isFocus} width={width} customStyle={style} >
          <input type="text" ref={inputRef} name={name} placeholder={placeholder} width={ width } onFocus={()=> _setFocusVal(true) } onBlur={()=> _setFocusVal(false)} />
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
  ${props => (props.customStyle ? props.customStyle : null)}
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
    ${props => (props.customStyle ? props.customStyle : null)}
    &::placeholder {
      color: ${props => (props.customStyle!=null && props.customStyle.color != null ? props.customStyle.color : '#999999')};
    }
    :focus {
      outline: none;
    }
  }
`;

export default Inputfield;
