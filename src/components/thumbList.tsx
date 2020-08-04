import React, { useState } from 'react';
import styled from "styled-components";
import Carousel from '@brainhubeu/react-carousel';
import {ImgViewer} from "./index"

function Thumblist(props){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [activeViewerIdx, setActiveViewerIdx] = useState(0);
    const [isShowViewer, setIsShowViewer] = useState(false);
    const numberOfPage = props.columns != null? props.columns : props.isMobile? 3 : 5;
    const margin = props.marginRight != null ? props.marginRight : props.isMobile? 6 : 25;
    const width = props.size != null ? props.size.width : props.isMobile? 92 : 160;

    const changeActiveItem = (idx) => {
        if(props.list != null && props.list.length > 0){
            if(idx > props.list.length - numberOfPage){
                idx = props.list.length - numberOfPage;
            }
            setActiveItemIndex(idx);
        }
    }

    const ShowViewer = (idx) => {
        setActiveViewerIdx(idx);
        setIsShowViewer(true)
    }

    return (
        <ThumblistComp size={props.size} marginRight={props.marginRight} columns={numberOfPage}>
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
                                <img src={el}/>
                            </div>
                        )
                    }) : null
                }
            </Carousel>

            {isShowViewer? <ImgViewer closeViewer={()=>setIsShowViewer(false)} list={props.list} activeIdx={activeViewerIdx} setActiveIdx={setActiveViewerIdx} companyData={props.companyData}/> : null }
        </ThumblistComp>
    )
}
interface ThumblistCompProps {
    size:any;
    marginRight:any;
    columns:any;
}
const ThumblistComp = styled.div`
    width: 100%;
    overflow: hidden;
    .imgBox { line-height: 0; }
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