import React, { useState, useRef } from 'react';
import styled from "styled-components";
import { Button } from "./index"

function Video(props) {
    const btnStyle = {
        background: 'transparent',
        'border-color': '#999999',
        color: '#999999',
        hover: {
            background: 'transparent',
            'border-color': '#999999',
            color: '#999999'
        }
    }
    return (
        <VideoComp>
            {props.videoSrc == null ?
                <div className={'requestBtn'}>
                    This showcase is not live!
                    <Button style={btnStyle} width={210}>Request Showcase</Button>
                </div>
                :
                <video width="100%" height="100%" controls>
                    <source src="movie.mp4" type="video/mp4"/>
                </video>
            }
        </VideoComp>
    );
}

const VideoComp = styled.div`
width: 100%;
height: 720px;
background: #333333;
border-radius: 8px;
overflow: hidden;
position: relative;
> .requestBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -105px;
    margin-top: -42px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #999999;
    > * { margin-top: 12px; }
}
`;

export default Video;