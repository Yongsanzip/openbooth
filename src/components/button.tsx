import React, { Component } from 'react';
import styled from "styled-components";

function Button(props) {

  const _onclick = (e) => {
      e.stopPropagation();
      props._clickBtn();
  }
  
  return (
      <Buttoncomp width={props.width} customStyle={props.style} className={props.fill? 'fill' : ''} onClick={_onclick}>
          <button type={"button"}>{props.children}</button>
      </Buttoncomp>
    )
}

interface ButtoncompProps {
    width: any,
    customStyle: any, 
}

const Buttoncomp = styled.div`
& button {
    width: ${(props: ButtoncompProps) => (props.width != null ? props.width.toString().indexOf('%') > -1? props.width : props.width + 'px' : 'auto')};
    background: #fff;
    border: 0.8px solid #005CB9;
    box-sizing: border-box;
    border-radius: 24px;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    vertical-align: center;
    text-align: center;
    color: #005CB9;
    padding: 13px 0;
    &:hover {
        color: #00416B;
        border: 0.8px solid #00416B;
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