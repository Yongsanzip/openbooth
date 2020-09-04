import React, {useState} from 'react';
import styled from "styled-components";
import Carousel from '@brainhubeu/react-carousel';
import {ImgViewer} from "./index";

function Imgslide(props){
    const [activeIdx, setActiveIdx] = useState(0);
    const [activeViewerIdx, setActiveViewerIdx] = useState(0);
    const [isShowViewer, setIsShowViewer] = useState(false);

    const onActiveChange = (v) => {
        if(v >= props.list.length) v = 0;
        setActiveIdx(v);
    };

    const moveActiveBanner = (arrow) => {
        let idx = activeIdx;
        if(arrow === 'prev') {
            idx = idx-1;
            if(idx < 0) idx = props.list.length;
        }
        else {
            idx = idx+1;
            if(idx > props.list.length-1) idx = 0;
        }
        onActiveChange(idx);
    };

    const ShowViewer = (idx) => {
        setActiveViewerIdx(idx);
        setIsShowViewer(true);
    };

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
                            <ImgBox key={key} onClick={()=>ShowViewer(key)}>
                                <img src={el} alt={''} />
                            </ImgBox>
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
            {isShowViewer? <ImgViewer closeViewer={()=>setIsShowViewer(false)} list={props.list} activeIdx={activeViewerIdx} setActiveIdx={setActiveViewerIdx} companyData={props.companyData} /> : null }
        </ImgSlideComp>
    )
}

const ImgBox = styled.div`
width: 455px;
height: 455px;
background: #333333;
box-sizing: border-box;
img {
    width: 100%;
    height: 100%;
}
`;
const ImgSlideComp = styled.div`
width: 455px;
height: 455px;
border-radius: 8px;
box-sizing: border-box;
overflow: hidden;
position: relative;
.controllers {
    > *{
        position: absolute;
        top: 50%;
        margin-top: -9px;
        :first-child { left: 16px; }
        :last-child { right: 16px; }
    }
}
.BrainhubCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
}
.BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track {
    display: flex;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    background: transparent;
}
.BrainhubCarousel .BrainhubCarousel__trackContainer {
    overflow: hidden;
    background: transparent;
}
.BrainhubCarousel {
    overflow: hidden;
    display: flex;
    align-items: center;
}
.BrainhubCarousel__container {
    width: 100%;
    overflow: hidden;
}
`;

export default Imgslide;