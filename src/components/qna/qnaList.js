import React, { Component } from 'react';
import styled from "styled-components";
import { Qna } from "./../index"

class Qnalist extends Component {
  constructor() {
    super()
  }

  render(){
    const { title, list } = this.props;
    return (
        <QnaListComp>
            <div className='title'>{title}</div>
            {list && list.length > 0 ?
                list.map((el, key) => {
                    return ( <Qna key={key} question={el.question} answer={el.answer} />)
                })
                : null
            }
        </QnaListComp>
  )
  }
}

const QnaListComp = styled.div`
width: 100%;
background: #fff;
.title {
    height: 56px;
    line-height: 56px;
    font-weight: bold;
    font-size: 16px;
    color: #000;
}
> * {
    padding: 0 24px;
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    :last-child { border-bottom: 0; }
}
`;

export default Qnalist;