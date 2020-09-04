import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Carousel from '@brainhubeu/react-carousel';
import {ImgViewer} from "./index"
import {useClientRect} from "../common/common";

function Thumblist(props){
    const [thisEl, thisRef] = useClientRect(null);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [activeViewerIdx, setActiveViewerIdx] = useState(0);
    const [isShowViewer, setIsShowViewer] = useState(false);
    const [numberOfPage, setNumberOfPage] = useState(props.columns != null? props.columns : props.isMobile? 3 : 5);
    const margin = props.marginRight != null ? props.marginRight : props.isMobile? 6 : 25;
    const width = props.size != null ? props.size.width : props.isMobile? 92 : 160;

    useEffect(()=> {
        if(thisEl != null && thisEl.offsetWidth !== 0){
            const pageWidth = (width+margin)*numberOfPage;
            if(thisEl.offsetWidth < pageWidth){
                setNumberOfPage(numberOfPage - 1);
            }
        }
    }, [thisEl, thisEl.current, numberOfPage, margin, width]);

    const changeActiveItem = (idx) => {
        if(props.list != null && props.list.length > 0){
            if(idx > props.list.length - numberOfPage){
                idx = props.list.length - numberOfPage;
            }
            setActiveItemIndex(idx);
        }
    };

    const moveSlideActive = (arrow) => {
        if(arrow === 'prev'){
            if(activeItemIndex < 1) return;
            setActiveItemIndex(activeItemIndex - 1);
        }
        else{
            if(activeItemIndex >= props.list.length) return;
            setActiveItemIndex(activeItemIndex + 1);
        }
    };

    const ShowViewer = (idx) => {
        setActiveViewerIdx(idx);
        setIsShowViewer(true)
    };

    return (
        <ThumblistComp ref={thisRef} size={props.size} marginRight={props.marginRight} columns={numberOfPage}>
            <Carousel
                value={activeItemIndex}
                onChange={changeActiveItem}

                numberOfCards={numberOfPage}
                itemWidth={width}
                offset={margin}
            >
                {props.list && props.list.length > 0 ?
                    props.list.map((el, key) => {
                        return (
                            <div key={key} className={'imgBox'} onClick={()=>ShowViewer(key)}>
                                <img src={el} alt={''}/>
                            </div>
                        )
                    }) : null
                }
            </Carousel>
            {isShowViewer? <ImgViewer closeViewer={()=>setIsShowViewer(false)} list={props.list} activeIdx={activeViewerIdx} setActiveIdx={setActiveViewerIdx} companyData={props.companyData}/> : null }
            <ListControllerComp>
                <div onClick={()=>moveSlideActive('prev')}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.000156927 6L6.00016 -1.23266e-07L7.41016 1.41Z" fill="#999999"/>
                    </svg>
                </div>
                <div onClick={()=>moveSlideActive('next')}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#999999"/>
                    </svg>
                </div>
            </ListControllerComp>
        </ThumblistComp>
    )
}

interface ThumblistCompProps {
    size:any;
    marginRight:any;
    columns:any;
}

const ListControllerComp = styled.div`
${({theme}) => theme.media.desktop`
display: none;
`}
${({theme}) => theme.media.mobile`
display: block;
`}
position: absolute;
top: 50%;
margin-top: -12px;
width: 100%;
> * {
    position: absolute;
    top: 0;
    :first-child { left: 12px; }
    :last-child { right: 12px; }
}
`;
const ThumblistComp = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    .imgBox { line-height: 0; }
    ul > li {
        display: inline-block;
        :first-child { margin-left: 0 !important;}
        :last-child { margin-right: 0 !important;}
    }
    & img {
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 8px;
        overflow: hidden;
        
        ${({theme}) => theme.media.desktop`
        ${(props:ThumblistCompProps) => (props.size != null ? 'width: ' + props.size.width+'px;' : 'width: 160px;')};
        ${(props:ThumblistCompProps) => (props.size != null ? 'height: ' + props.size.height+'px;' : 'height: 160px;')};
        ${(props:ThumblistCompProps) => (props.marginRight != null ? 'margin-right: ' + props.marginRight+'px;' : 'margin-right: 25px;')};
        ${(props:ThumblistCompProps) => (props.marginRight != null ? 'margin-bottom: ' + props.marginRight+'px;' : 'margin-bottom: 25px')};
        `}
        ${({theme}) => theme.media.mobile`
        ${(props:ThumblistCompProps) => (props.size != null ? 'width: ' + props.size.width+'px;' : 'width: 92px;')};
        ${(props:ThumblistCompProps) => (props.size != null ? 'height: ' + props.size.height+'px;' : 'height: 92px;')};
        ${(props:ThumblistCompProps) => (props.marginRight != null ? 'margin-right: ' + props.marginRight+'px;' : 'margin-right: 6px;')};
        ${(props:ThumblistCompProps) => (props.marginRight != null ? 'margin-bottom: ' + props.marginRight+'px;' : 'margin-bottom: 16px')};
        `}
        :nth-child(${(props:ThumblistCompProps) => (props.columns != null ? props.columns : '5')}n) { margin-right: 0; }
    }
`;

export default Thumblist;