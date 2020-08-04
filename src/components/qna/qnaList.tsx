import React, { Component } from 'react';
import styled from "styled-components";
import { Qna } from "./../index"

function Qnalist(props){
    return (
        <QnaListComp>
            <div className='title'>{props.title}</div>
            {props.list && props.list.length > 0 ?
                props.list.map((el, key) => {
                    return ( <Qna key={key} question={el.title} answer={el.answer} />)
                })
                : null
            }
        </QnaListComp>
    )
}

const QnaListComp = styled.div`
width: 100%;
background: #fff;
.title {
    font-weight: bold;
    color: #000;
    ${({theme}) => theme.media.desktop`
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    `}
    ${({theme}) => theme.media.mobile`
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    `}
}
> * {
    ${({theme}) => theme.media.desktop`
    padding: 0 24px;
    `}
    ${({theme}) => theme.media.mobile`
    padding: 0 16px;
    `}
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    :last-child { border-bottom: 0; }
}
`;

export default Qnalist;