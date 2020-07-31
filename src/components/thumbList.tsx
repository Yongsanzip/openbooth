import React, { useState } from 'react';
import styled from "styled-components";
import Carousel from '@brainhubeu/react-carousel';
import {ImgViewer} from "./index"

function Thumblist(props){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [activeViewerIdx, setActiveViewerIdx] = useState(0);
    const [isShowViewer, setIsShowViewer] = useState(false);
    const changeActiveItem = (idx) => {
        if(props.list != null && props.list.length > 0){
            if(idx > props.list.length - 5){
                idx = props.list.length - 5;
            }
            setActiveItemIndex(idx);
        }
    }

    const ShowViewer = (idx) => {
        setActiveViewerIdx(idx);
        setIsShowViewer(true)
    }
    const margin = props.marginRight != null ? props.marginRight : 25;
    const width = props.size != null ? props.size.width : 160;

    return (
        <ThumblistComp size={props.size} marginRight={props.marginRight} columns={props.columns}>
            <Carousel
                value={activeItemIndex}
                onChange={changeActiveItem}

                numberOfCards={5}
                itemWidth={width}
                offset={props.marginRight != null ? props.marginRight : 25}
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
            
            width: ${(props:ThumblistCompProps) => (props.size != null ? props.size.width+'px' : '160px;')};
            height: ${(props:ThumblistCompProps) => (props.size != null ? props.size.height+'px' : '160px;')};
            margin-right: ${(props:ThumblistCompProps) => (props.marginRight != null ? props.marginRight+'px' : '25px')};
            margin-bottom: ${(props:ThumblistCompProps) => (props.marginRight != null ? props.marginRight+'px' : '25px')};
            :nth-child(${(props:ThumblistCompProps) => (props.columns != null ? props.columns : '5')}n) { margin-right: 0; }
    }
`;

export default Thumblist;