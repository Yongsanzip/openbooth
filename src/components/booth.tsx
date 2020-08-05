import React, { Component } from 'react';
import styled from "styled-components";
import {Img, Hash, Ellipsis} from "./index";

function BoothHashes(props){
    return(
        <div className='hash'>
            {props.list != null && props.list.length > 0 ?
                props.list.map((el, key) => {
                    return (
                        <Hash name={el} key={key} />
                    )
                }) : null
            }
        </div>

    )
}
function Booth(props){
    const { data, onClick, type } = props;
    return (
        <BoothComp type={type}>
            <Img src={data.imgSrc} width={'100%'} height={type != null && type == 'sub'? '174px' : '240px'} />
            <div className='boothInfo'>
                    {props.noHash != true? data.category != null && data.category.length > 0? <BoothHashes list={data.category}/> : null : null}
                <div className='title'><Ellipsis line={2}>{data.booth_name}</Ellipsis></div>
            </div>
            <div className='company'>
                <Img src={data.company_img} />
                <div>{data.company_name}</div>
            </div>
        </BoothComp>
    )
}

interface BoothCompProps {
    type: any
}

const BoothComp = styled.div`
${({theme}) => theme.media.desktop`
${(props: BoothCompProps) => (props.type != null && props.type == 'sub'? 'width: 290px;' : 'width: 400px;')};
${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? 'height: 306px;' : 'height: 420px;')};
`}
${({theme}) => theme.media.mobile`
${(props: BoothCompProps) => (props.type != null && props.type == 'sub'? 'width: 180px;' : 'width: 100%;')};
${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? 'height: auto;' : 'height: 355px;')};
`}
background: #FFFFFF;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 8px;
overflow: hidden;
position: relative;
transition: transform 0.5s 0s ease, box-shadow 0.3s 0s ease-in-out;
transform: translatey(0);
:hover {
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
    transform: translatey(-4px);
}
> *:first-child {
    width: 100%;
    height: ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? '174px' : '240px')};
    ${({theme}) => theme.media.mobile`
    ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? 'height: 96px;' : 'height: 192px;')};
    `}
}
> .boothInfo {
    border-top: 1px solid #E9E9E9;
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    ${({theme}) => theme.media.desktop`
    padding-top: 12px;
    ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? 'height: 82px;' : 'height: 122px;')};
    `}
    ${({theme}) => theme.media.mobile`
    ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? 'padding-top: 8px;height: 60px;' : 'padding-top: 14px;height: 114px;')};
    `}
    > * {
        padding: ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? '0 12px' : '0 16px')};
    }
    > .hash> * {
        margin-right: 8px;
        :last-child { margin-right: 0; }
    }
    > .title {
        margin: ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? '0' : '8px 0')};
        font-weight: bold;
        color: #000000;
        ${({theme}) => theme.media.desktop`
        font-size: 16px;
        line-height: 24px;
        `}
        ${({theme}) => theme.media.mobile`
        ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? 'font-size: 10px;line-height: 18px;' : 'font-size: 14px;line-height: 22px;')};
        `}
    }
}
> .company {
    height: ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? '' : '56px')};
    
    ${({theme}) => theme.media.desktop`
    padding: 12px 0;
    `}
    ${({theme}) => theme.media.mobile`
    ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? 'padding: 8px 0;' : null)};
    `}
    vertical-align: middle;
    margin-left: 16px;
    
    font-weight: normal;
    font-size: 12px;
    color: #999999;
    > * {
        display: inline-block;
        line-height: 24px;
        ${({theme}) => theme.media.desktop`
        vertical-align: top;
        `}
        ${({theme}) => theme.media.mobile`
        vertical-align: middle;
        `}
        :first-child {
            ${({theme}) => theme.media.desktop`
            width: 24px;
            height: 24px;
            `}
            ${({theme}) => theme.media.mobile`
            ${(props: BoothCompProps) => (props.type != null && props.type == 'sub' ? 'width: 16px;height: 16px;border-radius: 4px;' : null)};
            `}
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
            margin-right: 4px;
        }
    }
}
`;

export default Booth;