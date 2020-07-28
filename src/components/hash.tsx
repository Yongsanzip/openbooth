import React, { Component } from 'react';
import styled from "styled-components";

function Hash(props){
  const _clickHash = (id) => {
      console.log("clicked hash");
  }

    const { id, name } = props;
    return (
        <HashBox>
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
    color: #005CB9;
    padding: 3px 10px;
    font-size: 10px;
    line-height: 18px;
    font-weight: bold;
`;

export default Hash;