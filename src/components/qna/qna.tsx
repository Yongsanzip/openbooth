import React from 'react';
import styled from "styled-components";

function Qna(props){
    return (
        <QnaComp>
            <div className='question'>{props.question}</div>
            {props.answer}
        </QnaComp>
    )
}

const QnaComp = styled.div`
font-weight: normal;
${({theme}) => theme.media.desktop`
font-size: 16px;
line-height: 26px;
padding-bottom: 24px;
`}
${({theme}) => theme.media.mobile`
font-size: 12px;
line-height: 20px;
padding-bottom: 16px;
`}
color: #999999;
.question {
    font-weight: bold;
    color: #000000;
    border: 0 !important;
    ${({theme}) => theme.media.desktop`
    margin: 24px 0 8px 0;
    `}
    ${({theme}) => theme.media.mobile`
    margin: 16px 0 0 0;
    `}
}
`;

export default Qna;