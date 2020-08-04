import React, { Component } from 'react';
import styled from "styled-components";
import {Hash} from "./index";

function Infofields(props) {
    const customHashStyle = {
        padding: '3px 10px',
        'font-weight': 'bold',
        'font-size': '10px',
        'line-height': '18px',
        'text-align': 'center',
        'letter-spacing': '-0.01em',
        color: '#005CB9'
    }
  return (
      <div>
        {props.list && props.list.length > 0 ? props.list.map((el, key) => {
              if(el.fieldname == 'Exhibits'){
                  return (
                      <InfoComp key={key} className='row hashes' fieldWidth={props.fieldWidth}>
                          <div>{el.fieldname}</div>
                          {el.value != null && el.value.length > 0?
                              el.value.map((fieldItem, fieldKey) => {
                                  return <Hash key={fieldKey} name={fieldItem} style={customHashStyle} />
                              })
                              : null
                          }
                      </InfoComp>
                  )
              }
              else{
                  return (
                      <InfoComp key={key} className='row' fieldWidth={props.fieldWidth}>
                          <div>{el.fieldname}</div>
                          <div>{el.value}</div>
                      </InfoComp>
                  )
              }
        })
            : null
        }
      </div>
  )
}

interface InfoCompProps {
  fieldWidth:any
}
const InfoComp = styled.div`
${({theme}) => theme.media.desktop`
margin-bottom: 24px;
`}
${({theme}) => theme.media.mobile`
margin-bottom: 16px;
`}
:last-child { margin-bottom: 0; padding-bottom: 24px; }
> * {
    display: inline-block;
    font-weight: normal;
    color: #999999;
    ${({theme}) => theme.media.desktop`
    font-size: 16px;
    line-height: 24px;
    `}
    ${({theme}) => theme.media.mobile`
    font-size: 12px;
    line-height: 20px;
    `}
    :first-child {
        width: ${(props: InfoCompProps) => (props.fieldWidth != null ? props.fieldWidth+'px' : '223px')};
        ${({theme}) => theme.media.mobile`
        width: 100%;
        `}
        margin-right: 5px;
        font-weight: bold;
    }
  }
  &.hashes {
    > * {
        margin-right: 8px;
        :first-child,:last-child { margin-right: 0 }
    }
  }
`;

export default Infofields;
