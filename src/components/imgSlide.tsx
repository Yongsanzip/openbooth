import React, {Component, useState} from 'react';
import styled from "styled-components";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Imgslide(props){
    const [activeIdx, setActiveIdx] = useState(0);

    const onActiveChange = (v) => {
        if(v >= props.list.length) v = 0;
        setActiveIdx(v)
    }

    const moveActiveBanner = (arrow) => {
        let idx = activeIdx;
        if(arrow == 'prev') {
            idx = idx-1;
            if(idx < 0) idx = props.list.length;
        }
        else {
            idx = idx+1;
            if(idx > props.list.length) idx = 0;
        }
        onActiveChange(idx);
    }

    return (
        <ImgSlideComp>
            <Carousel
                autoPlay={5000}
                animationSpeed={1500}
                centered
                infinite
                onChange={onActiveChange}
                value={activeIdx}
            >
                {props.list && props.list.length > 0 ?
                    props.list.map((el, key) => {
                        return (
                            <div key={key} className={'imgBox'}>
                                <img src={el}/>
                            </div>
                        )
                    }) : null
                }
            </Carousel>
            {props.list && props.list.length > 1?
                <div className="controllers">
                    <div onClick={() => moveActiveBanner('prev')}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <div onClick={() => moveActiveBanner('next')}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                : null
            }
        </ImgSlideComp>
    )
}

const ImgSlideComp = styled.div`
width: 455px;
height: 455px;
background: #333333;
border-radius: 8px;
overflow: hidden;
position: relative;
.imgBox {
    width: 455px;
    height: 455px;
    img {
        width: 100%;
        height: 100%;
    }
}
.controllers {
    > *{
        position: absolute;
        top: 50%;
        margin-top: -9px;
        :first-child { left: 16px; }
        :last-child { right: 16px; }
    }
}
`;

export default Imgslide;