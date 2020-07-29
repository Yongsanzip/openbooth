import React, { Component } from 'react';
import styled from "styled-components";

function Hash(props){
  const _clickHash = (id) => {
      console.log("clicked hash");
      if(props._onClick != null) props._onClick();
  }

    const { id, name } = props;
    return (
        <HashBox customStyle={props.style}>
            <div onClick={()=>_clickHash(id)}>{name}</div>
        </HashBox>
    )
}

const HashBox = styled.div`
    display: inline-block;
    vertical-align: middle;
    border: 0.8px solid #005CB9;
    box-sizing: border-box;
    border-radius: 12px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #005CB9 !important;
    padding: 3px 10px !important;
    font-size: 10px !important;
    line-height: 18px !important;
    font-weight: bold !important;
    > * {
    }    
`;

export default Hash;