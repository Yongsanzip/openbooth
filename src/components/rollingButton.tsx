import React, { useState } from 'react';
import styled from "styled-components";

function RollingButton(props){
    const [ishover, setIsHover] = useState(false);

    const _onMouseOver = (val)=> {
        setIsHover(val);
    }

    const _setClass = () => {
        let classes = new Array();
        if(props.toLeft){
            classes.push('prev');
        }
        else{
            classes.push('next');
        }

        if(ishover){
            classes.push('hover');
        }
        return classes.join(' ');
    }

    return (
        <RollingBtn onMouseOver={()=>_onMouseOver(true)} onMouseOut={()=>_onMouseOver(false)}>
            <button className={_setClass()} onClick={props.onClick}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.000156927 6L6.00016 -1.23266e-07L7.41016 1.41Z" fill="#E9E9E9"/>
                </svg>
            </button>
        </RollingBtn>
    )

}

const RollingBtn = styled.div`
& button {
    display: block;
    width: 24px;
    height: 24px;
    background: #F7F7F9;
    border: 0.8px solid #E9E9E9;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
    &:hover {
        background: #F7F7F9;
        border: 0.8px solid #999999;
        & svg path {
            fill: #999999;
        }
    }
    &.next {
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

export default RollingButton;