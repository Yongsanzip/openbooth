import React from 'react';
import styled from "styled-components";

function Pannel(props){
    return (
        <PannelComp noPadding={props.noPadding}>
            {props.title != null && props.title !== ''? <div className='title'>{props.title}</div> : null }
            <div className='content'>
                {props.children}
            </div>
        </PannelComp>
    )
}

interface PannelCompPrps {
    noPadding:any
}
const PannelComp = styled.div`
background: #FFFFFF;
color: #999999;
.title {
    ${(props: PannelCompPrps) => (props.noPadding ? null : null)};
    
    ${({theme}) => theme.media.desktop`
    height: 56px;
    font-size: 16px;
    line-height: 56px;
    ${(props: PannelCompPrps) => (props.noPadding ? null : 'padding: 0 24px;')};
    `}
    ${({theme}) => theme.media.mobile`
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    ${(props: PannelCompPrps) => (props.noPadding ? null : 'padding: 0 16px;')};
    `}
    font-weight: bold;
    color: #000000;
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
}
.content {
    & > * {
        ${({theme}) => theme.media.desktop`
        font-size: 16px;
        line-height: 26px;
        margin-top: 20px;
        ${(props: PannelCompPrps) => (props.noPadding ? null : 'padding: 0 24px;')};
        `}
        ${({theme}) => theme.media.mobile`
        font-size: 12px;
        line-height: 20px;
        margin-top: 16px;
        ${(props: PannelCompPrps) => (props.noPadding ? null : 'padding: 0 16px;')};
        `}
    }
    .video {
        width: inherit;
        height: 480px;
        > div {
            width: 100%;
            height: 100%;
            background: #333333;
            border-radius: 8px;
        }
    }
    .thumbs {
        display: flex;
        width: 900px;
        height: 160px;
        overflow-x: auto;
        overflow-y: hidden;
        // ::-webkit-scrollbar {
        //   height: 2px;
        // }
        // ::-webkit-scrollbar-track {
        //   background-color: transparent;
        // }
        // ::-webkit-scrollbar-thumb {
        //   border-radius: 3px;
        //   background-color: gray;
        // }
        // ::-webkit-scrollbar-button {
        //   width: 0;
        //   height: 0;
        // }
        > .thumb {
            flex: none;
            display: inline-block;
            vertical-align: top;
            width: 160px;
            height: 160px;
            margin-right: 25px;
            :last-child { margin-right: 0; }
            background: #DBDBDB;
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
        }
    }
}
`;

export default Pannel;