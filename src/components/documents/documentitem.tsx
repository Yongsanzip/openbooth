import React from 'react';
import styled from "styled-components";

function Documentitem(props){
    return (
        <DocumentItemComp>
            {props.title}
            <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8 0L28.8 8V30.4128C28.7996 30.8339 28.632 31.2376 28.3341 31.5352C28.0362 31.8328 27.6323 32 27.2112 32H1.5888C1.16861 31.9971 0.766428 31.829 0.469148 31.532C0.171869 31.235 0.00335144 30.833 0 30.4128V1.5872C0 0.7104 0.712 0 1.5888 0H20.8ZM16 16V9.6H12.8V16H8L14.4 22.4L20.8 16H16Z" fill="#999999"/>
            </svg>
        </DocumentItemComp>
    )
}

const DocumentItemComp = styled.div`
position: relative;
width: initial;
height: 72px;
line-height: 72px;
font-weight: bold;
font-size: 16px;
color: #999999;
padding: 0 24px;
&:hover {
:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.04);
}
}
svg {
    position: absolute;
    top: 0;
    right: 25px;
    height: 100%;
}
`;

export default Documentitem;