import React, {Component} from 'react';
import styled from "styled-components";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from "./../assets/img/1.jpg";
import img2 from "./../assets/img/2.jpg";
import img3 from "./../assets/img/3.jpg";
import {RollingBannerButton} from "./index";

class Mainbanner extends Component {
    constructor() {
        super()
        this.state = {
            imgList: [{
                id: 1,
                src: img1,
                title: '연구개발특구기업 온라인 전시회 2020 1',
                date: '2020.06.15 ~ 2020.07.12',
                company: '과학기술정보통신부, 연구개발특구진흥공단'
            },{
                id: 2,
                src: img2,
                title: '연구개발특구기업 온라인 전시회 2020 2',
                date: '2020.06.15 ~ 2020.07.12',
                company: '과학기술정보통신부, 연구개발특구진흥공단'
            },{
                id: 3,
                src: img3,
                title: '연구개발특구기업 온라인 전시회 2020 3',
                date: '2020.06.15 ~ 2020.07.12',
                company: '과학기술정보통신부, 연구개발특구진흥공단'
            }],
            height: '280',
            activeIdx: 0,
        }
    }

    onActiveChange = (v) => {
        this.setState({ activeIdx : v });
    }

    moveActiveBanner = (arrow) => {
        let idx = this.state.activeIdx;
        if(arrow == 'prev') {
            idx = idx-1;
            if(idx < 0) idx = this.state.imgList.length;
        }
        else {
            idx = idx+1;
            if(idx > this.state.imgList.length) idx = 0;
        }
        this.onActiveChange(idx);
    }

    render(){
        const { imgList, height, activeIdx } = this.state;
        const { onActiveChange, moveActiveBanner } = this;

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
                    {imgList && imgList.length > 0 ?
                        imgList.map((el, key) => {
                            return (
                                <Banneritem key={key}>
                                    <img src={el.src} height={height} />
                                    <div className='titleInfo'>
                                        {el.date} | {el.company}<br/>
                                        <span className='title'>{el.title}</span>
                                        <Bannerdots totalcnt={imgList.length} current={key}>
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