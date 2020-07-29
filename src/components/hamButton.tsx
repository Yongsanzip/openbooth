import React, { Component } from 'react';
import styled from "styled-components";

function Hambutton (props) {
  const _onclick = (e) => {
      e.stopPropagation();
      props.onClick();
  }

    return (
        <Buttoncomp onClick={_onclick} >
            <div />
        </Buttoncomp>
    )
}

const Buttoncomp = styled.div`
width: 16px;
height: 12px;
margin-left: 4px;
margin-top: 10px;
> div {
   position: relative;
   width: 100%;
   height: 2px;
   background: #999999;
   :before {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #999999;
   }
   :after {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #999999;
   }
}
`;

export default Hambutton;