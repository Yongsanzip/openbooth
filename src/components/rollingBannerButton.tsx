import React, { Component } from 'react';
import styled from "styled-components";

function RollingBannerButton(props){
    const _onClickBtn = (arrow) => {
        props.onClick(arrow);
    }

    return (
        <RollingBtn>
            <button className={props.toLeft? 'prev' : 'next'} onClick={()=>_onClickBtn(props.toLeft? 'prev' : 'next')}>
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0.4L0.599999 8L8 15.6L7.8 16L0 8L7.8 0L8 0.4Z" fill="white"/>
                </svg>
            </button>
        </RollingBtn>
    )
}

const RollingBtn = styled.div`
& button {
    display: block;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    border: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px 0px 0px 8px;
    &:focus {
        outline: none;
    }
    &:hover {
        background: rgba(0, 0, 0, 0.48);
    }
    &.next {
        border-radius: 0px 8px 8px 0px;
        & svg {
            transform: rotate(180deg);
        }
    }
}
& svg {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
}
`;

export default RollingBannerButton;