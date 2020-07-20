import React, { Component } from 'react';
import styled from "styled-components";
import { Ellipsis } from "./../index"

class CompanyListitem extends Component {
    constructor() {
        super()
    }

    render(){
        const { idx, item, showIndex, isLarge } = this.props;
        return (
            <CompanyListitemComp isLarge={isLarge}>
                {/*{showIndex? <div className='index'>{idx+1}</div> : ''}*/}
                <div className='titleImg'></div>
                <div className='content'>
                    <Ellipsis>{item.title}</Ellipsis>
                    <Ellipsis line={2}>{item.content}</Ellipsis>
                    <div className='catHash'>

                    </div>
                </div>
                <div className='into'>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#999999"/>
                    </svg>
                </div>
            </CompanyListitemComp>
        )
    }
}

const CompanyListitemComp = styled.div`
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
        width: ${props => (props.isLarge ? '106px' : '80px')};
        height: ${props => (props.isLarge ? '104px' : '80px')};
        background: #DBDBDB;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 8px;
    }
    &.content {
        flex: 1;
        font-weight: normal;
        font-size: 12px;
        color: #999999;
        font-weight: normal;
        font-size: ${props => (props.isLarge ? '14px' : '12px')};
        line-height: 20px;
        color: #999999;
        margin-left: 16px;
        width: 272px;
        & > * {
            width: 100%;
            :first-child {
                font-weight: bold;
                font-size: ${props => (props.isLarge ? '16px' : '14px')};
                line-height: 22px;
                color: #000000;
                margin-bottom: ${props => (props.isLarge ? '8px' : '12px')};
            }
        }
    }
    &.into {
        width: 32px;
        text-align: center;
    }
}
`;

export default CompanyListitem;