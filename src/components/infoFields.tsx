import React, { Component } from 'react';
import styled from "styled-components";

function Infofields(props) {
  return (
      <div>
        {props.list && props.list.length > 0 ? props.list.map((el, key) => {
          return (
              <InfoComp key={key} className='row' fieldWidth={props.fieldWidth}>
                <div>{el.fieldname}</div>
                <div>{el.value}</div>
              </InfoComp>
          )} ) : null
        }
      </div>
  )
}

interface InfoCompProps {
  fieldWidth:any
}
const InfoComp = styled.div`
  margin-bottom: 24px;
  :last-child { margin-bottom: 0; padding-bottom: 24px; }
  > * {
    display: inline-block;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #999999;
    :first-child {
      width: ${(props: InfoCompProps) => (props.fieldWidth != null ? props.fieldWidth+'px' : '223px')};
      margin-right: 5px;
      font-weight: bold;
    }
  }
`;

export default Infofields;
