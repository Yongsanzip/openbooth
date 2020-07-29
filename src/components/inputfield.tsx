import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import { Img } from "./index"
import {Simulate} from "react-dom/test-utils";

function Inputfield(props){
    const [isFocus, setIsFocus] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const inputRef = useRef(null);

  const _setFocusVal = (val: boolean) => {
    setIsFocus(val)
    if(!val){
      //Focusout 시에 유효성 검사
      _onChangeValue();
    }
  }

  const _onChangeValue = () => {
      let inputEl: any;
    if(props.validator != null){
        if (typeof inputRef !== 'undefined' &&
            typeof inputRef.current !== 'undefined') {
            inputEl = inputRef.current;
        }
      props.validator(inputEl.value);
    }
  }
  
  const _onClickFileInput = () => {
      let inputEl: any;
      if (typeof inputRef !== 'undefined' &&
          typeof inputRef.current !== 'undefined') {
          inputEl = inputRef.current;
      }
      inputEl.click();
  }
  
  const _onChangeFile = () => {
      let inputEl: any;
      if (typeof inputRef !== 'undefined' &&
          typeof inputRef.current !== 'undefined') {
          inputEl = inputRef.current;
      }
      const file = inputEl.files[0];
      if(file == null){
          setImgSrc('');
          return;
      }
      let reader = new FileReader();
      reader.onload = function(e) {
          let target:any = '';
          if (typeof e !== 'undefined' &&
              typeof e.target !== 'undefined'&&
              e != null) {
              target = e.target == null? '' : e.target;
          }

          setImgSrc(target.result);


      };
      reader.readAsDataURL(file); // convert to base64 string
  }

    useEffect(() => {
      if(props.value != null) {
          let inputEl: any;
          if (typeof inputRef !== 'undefined' &&
              typeof inputRef.current !== 'undefined') {
              inputEl = inputRef.current;
          }
          inputEl.value = props.value;
      }
  }, [])

    return (
        <InputField disabled={props.disabled} isFocus={isFocus} width={props.width} height={props.height} inputHeight={props.inputHeight} padding={props.padding} customStyle={props.style} type={props.type} >
            {props.type != null && props.type == 'file'?
                <ImgInput onClick={_onClickFileInput}>
                    {imgSrc != null && imgSrc != ''?
                        <img src={imgSrc} />
                        : <div>Upload<br/>Profile Image</div>
                    }
                    <input type="file" ref={inputRef} name={props.name} className={props.noEmpty? 'noempty':''}  width={ props.width } onChange={_onChangeFile} />
                </ImgInput>
            : <input type={props.type? props.type : "text"} ref={inputRef} name={props.name} className={props.noEmpty? 'noempty':''} placeholder={props.placeholder} width={ props.width } onFocus={()=> _setFocusVal(true) } onBlur={()=> _setFocusVal(false)}/>
            }
      </InputField>
    )
}

const ImgInput = styled.div`
height: 100%;
input { display: none; }
overflow: hidden;
font-size: 14px;
line-height: 22px;
text-align: center;
> div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}
> img {
    width: 100%;
    height: 100%;
}
`;

interface InputFieldProps {
    disabled: any;
    isFocus: any;
    width: any;
    height: any;
    inputHeight: any;
    customStyle: any;
    type: any;
    padding: any;
}
const InputField = styled.div`
  position: relative;
  background: #F7F7F9;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;
  border-radius: 8px;
  padding: ${(props: InputFieldProps) => (props.type != null && props.type == 'file'? '0' : props.padding =! null? props.padding : '0 10px')};
  width: ${(props: InputFieldProps) => (props.type != null && props.type == 'file'? '104px' : props.width != null ? props.width.indexOf('%') > -1? props.width : props.width : '320px')};
  height: ${(props: InputFieldProps) => (props.type != null && props.type == 'file'? '104px' : props.height != null? props.height : '40px')};
  margin: ${(props: InputFieldProps) => (props.type != null && props.type == 'file'? '0 auto' : '')};
  overflow: hidden;
  border-color: ${(props: InputFieldProps) => (props.disabled ? '#F58181' : props.isFocus? '#999999' : 'E9E9E9')};
  ${(props: InputFieldProps) => (props.customStyle ? props.customStyle : null)}
  & input {
    font-family: ${(props: InputFieldProps) => (props.type != null && props.type == 'password'? 'Arial' : 'NanumSquare')};
    position: absolute;
    padding: 0;
    border: 0;
    // height: calc(100% - 16px);
    height: ${(props: InputFieldProps) => (props.inputHeight ? props.inputHeight : '16px')};
    width: ${(props: InputFieldProps) => (props.width != null && props.width != 'inherit' && props.width.indexOf('%') < 0 ? (Number(props.width) - 45) + 'px' : 'calc(100% - 20px)')};
    background: #F7F7F9;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #999999;
    ${(props: InputFieldProps) => (props.customStyle ? props.customStyle : null)}
    &::placeholder {
        font-family: 'NanumSquare';
      color: ${(props: InputFieldProps) => (props.customStyle!=null && props.customStyle.color != null ? props.customStyle.color : '#999999')};
    }
    :focus {
      outline: none;
    }
  }
`;

export default Inputfield;
