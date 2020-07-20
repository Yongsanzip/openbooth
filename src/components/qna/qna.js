import React, { Component } from 'react';
import styled from "styled-components";

class Qna extends Component {
  constructor() {
    super()
  }

  render(){
    const { question, answer } = this.props;
    return (
        <QnaComp>
            <div className='question'>{question}</div>
            {answer}
        </QnaComp>
  )
  }
}

const QnaComp = styled.div`
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #999999;
padding-bottom: 24px;
.question {
    font-weight: bold;
    color: #000000;
    margin: 24px 0 8px 0;
    border: 0 !important;
}
`;

export default Qna;