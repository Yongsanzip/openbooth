import React from 'react';
import styled from "styled-components";
import {Ellipsis} from "../index";

function Documentitem(props){
    return (
        <DocumentItemComp>
            <Ellipsis>{props.title}</Ellipsis>
            {props.isMobile == null || props.isMobile !== true?
                <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8 0L28.8 8V30.4128C28.7996 30.8339 28.632 31.2376 28.3341 31.5352C28.0362 31.8328 27.6323 32 27.2112 32H1.5888C1.16861 31.9971 0.766428 31.829 0.469148 31.532C0.171869 31.235 0.00335144 30.833 0 30.4128V1.5872C0 0.7104 0.712 0 1.5888 0H20.8ZM16 16V9.6H12.8V16H8L14.4 22.4L20.8 16H16Z" fill="#999999"/>
                </svg>
            : <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 0L18.25 5V19.008C18.2497 19.2712 18.145 19.5235 17.9588 19.7095C17.7726 19.8955 17.5202 20 17.257 20H1.243C0.980378 19.9982 0.729017 19.8931 0.543218 19.7075C0.357418 19.5219 0.252095 19.2706 0.25 19.008V0.992C0.25 0.444 0.695 0 1.243 0H13.25ZM10.25 10V6H8.25V10H5.25L9.25 14L13.25 10H10.25Z" fill="#999999"/>
                </svg>
            }
        </DocumentItemComp>
    )
}

const DocumentItemComp = styled.div`
position: relative;
width: initial;
font-weight: bold;
color: #999999;
${({theme}) => theme.media.desktop`
height: 72px;
line-height: 72px;
font-size: 16px;
padding: 0 24px;
`}
${({theme}) => theme.media.mobile`
height: 40px;
line-height: 40px;
font-size: 12px;
padding: 0 15px;
`}
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
> *:first-child {
    ${({theme}) => theme.media.desktop`
    width: calc( 100% - 45px);
    `}
    ${({theme}) => theme.media.mobile`
    width: calc( 100% - 20px);
    `}
}
svg {
    position: absolute;
    top: 0;
    height: 100%;
    ${({theme}) => theme.media.desktop`
    right: 25px;
    `}
    ${({theme}) => theme.media.mobile`
    right: 7.75px;
    `}
}
`;

export default Documentitem;