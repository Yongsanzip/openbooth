import React, {Component, useState} from 'react';
import styled from "styled-components";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from "./../assets/img/1.jpg";
import img2 from "./../assets/img/2.jpg";
import img3 from "./../assets/img/3.jpg";
import {RollingBannerButton} from "./index";

function Mainbanner(props){
    const height = 280;
    const [activeIdx, setActiveIdx] = useState(0);

    const onActiveChange = (v) => {
        setActiveIdx(v)
    }

    const moveActiveBanner = (arrow) => {
        let idx = activeIdx;
        if(arrow == 'prev') {
            idx = idx-1;
            if(idx < 0) idx = props.data.length;
        }
        else {
            idx = idx+1;
            if(idx > props.data.length) idx = 0;
        }
        onActiveChange(idx);
    }

    return (
        <Banner height={height}>
            <Carousel
                autoPlay={5000}
                animationSpeed={1500}
                centered
                infinite
                onChange={onActiveChange}
                value={activeIdx}
            >
                {props.data && props.data.length > 0 ?
                    props.data.map((el, key) => {
                        return (
                            <Banneritem key={key}>
                                <img src={img1} height={height} />
                                {/*el.booth_banner*/}
                                <div className='titleInfo'>
                                    {el.category.join(', ')} | {el.company_name}<br/>
                                    <span className='title'>{el.booth_description}</span>
                                    <Bannerdots totalcnt={props.data.length} current={key}>
                                        <div className='active' />
                                    </Bannerdots>
                                    <Bannerbtns>
                                        <RollingBannerButton toLeft onClick={moveActiveBanner}/>
                                        <RollingBannerButton toRight onClick={moveActiveBanner} />
                                    </Bannerbtns>
                                </div>
                            </Banneritem>
                        )
                    }) : null
                }
            </Carousel>
        </Banner>
    )
}
const Bannerbtns = styled.div`
    position: absolute;
    bottom: 24px;
    right: 0;
    > * {
        display: inline-block;
    }
`;
const Bannerdots = styled.div`
    position: absolute;
    bottom: 24px;
    width: 320px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.8);
    > .active {
        position: absolute;
        left: ${props => (props.current != null ? ((320 / props.totalcnt ) * props.current) + 'px' : '0')};
        width: ${props => (props.totalcnt != null ? 'calc(100% / '+props.totalcnt+')' : '100px')};
        height: 4px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 2px;
    }
`;

const Banneritem = styled.div`
position: relative;
width: 100%;
height: ${props => (props.height != null ? props.height+'px' : '280px')};
text-align: center;
:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000030;
}
> .titleInfo {
    position: relative;
    max-width: 1280px;
    width: 100%;
    height: 100%;
    top: ${props => (props.height != null ? '-' + props.height+'px' : '-280px')};
    margin: 0 auto;
    text-align: left;
    color: #ffffff;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    .title {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
    }
}
`;
const Banner = styled.div`
position: relative;
width: 100%;
height: ${props => (props.height != null ? props.height+'px' : '280px')};
`;

export default Mainbanner;