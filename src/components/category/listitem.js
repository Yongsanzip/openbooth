import React, { Component } from 'react';
import styled from "styled-components";

class Listitem extends Component {
    constructor() {
        super()
    }

    render(){
        const { idx, item, showIndex } = this.props;
        return (
            <CategoryListItem>
                {showIndex? <div className='index'>{idx+1}</div> : ''}
                <div className='titleImg'></div>
                <div className='titleBox'>
                    <div>{item.title}</div>
                    <div className='date'>{item.date}</div>
                </div>
                <div className='into'>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#999999"/>
                    </svg>
                </div>
            </CategoryListItem>
        )
    }
}

const CategoryListItem = styled.div`
color: #000000;
letter-spacing: -0.01em;
display: flex;
flex-direction: row;
align-items: center;
height: 100px;
> div {
    &.index {
        width: 32px;
        font-weight: bold;
        font-size: 20px;
        &:after {
            content: '.';
        }
    }
    &.titleImg {
        width: 80px;
        height: 80px;
        background: #DBDBDB;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 8px;
    }
    &.titleBox {
        flex: 1;
        color: #000000;
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        margin-left: 16px;
        & .date {
        margin-top: 8px;
        font-weight: normal;
        font-size: 12px;
        color: #999999;
        }
    }
    &.into {
        width: 32px;
        text-align: center;
    }
}
`;

export default Listitem;