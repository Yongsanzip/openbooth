import React, { Component } from 'react';
import styled from "styled-components";

function Img(props) {
    return (
        <ImgComp src={props.src} width={props.width} height={props.height} widthFull={props.widthFull} full={props.full} >
            {props.src == null || props.src == ''? <div className='empty' /> : null}
        </ImgComp>
    )
}
interface ImgCompProps {
    width: any, height: any, src: string, widthFull: any, full: any
}
const ImgComp = styled.div`
width: ${(props: ImgCompProps) => (props.width != null ? props.width : 'auto')};
height: ${(props: ImgCompProps) => (props.height != null ? props.height : 'auto')};
background: ${(props: ImgCompProps) => (props.src != null ? 'url('+props.src+')' : '#DBDBDB')};
background-position: center;
background-size: ${(props: ImgCompProps) => (props.full != null? '100%' : props.widthFull != null ? '100% auto' : 'auto 100%')};
background-repeat: no-repeat;
overflow: hidden;
.empty {
width: 100%;
height: 100%;
background: #DBDBDB
}
`;
export default Img;