import React, { Component } from 'react';
import styled from "styled-components";

function Button(props) {

  const _onclick = (e) => {
      e.stopPropagation();
      if(props._clickBtn != null) props._clickBtn();
  }
  
  return (
      <Buttoncomp width={props.width} customStyle={props.style} type={props.type} className={props.fill? 'fill' : ''} onClick={_onclick}>
          <button type={"button"}>{props.children}</button>
      </Buttoncomp>
    )
}

interface ButtoncompProps {
    width: any,
    customStyle: any,
    type: any
}

const Buttoncomp = styled.div`
& button {
    width: ${(props: ButtoncompProps) => (props.width != null ? props.width.toString().indexOf('%') > -1? props.width : props.width + 'px' : 'auto')};
    background: ${(props: ButtoncompProps) => (props.type != null && props.type == 'whiteLine' ? 'transparent' : '#fff')};
    border: 0.8px solid ${(props: ButtoncompProps) => (props.type != null && props.type == 'whiteLine' ? '#ffffff' : '#005CB9')};
    box-sizing: border-box;
    border-radius: 24px;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    vertical-align: center;
    text-align: center;
    color: ${(props: ButtoncompProps) => (props.type != null && props.type == 'whiteLine' ? '#ffffff' : '#005CB9')};
    padding: 13px 0;
    &:hover {
        color: ${(props: ButtoncompProps) => (props.type != null && props.type == 'whiteLine' ? '#ffffff' : '#00416B')};
        border: 0.8px solid ${(props: ButtoncompProps) => (props.type != null && props.type == 'whiteLine' ? '#ffffff' : '#00416B')};
        ${(props: ButtoncompProps) => (props.customStyle != null && props.customStyle.hover != null ? props.customStyle.hover : '')};
    }
    &:focus {
        outline: 0;
    }
    & a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
    
    ${(props: ButtoncompProps) => (props.customStyle != null ? props.customStyle : '')};
}
&.fill {
    & button {
        background: #005CB9;
        border: 0;
        color: #FFFFFF;
        &:hover {
            background: #00416B;
        }
    }
}
`;

export default Button;