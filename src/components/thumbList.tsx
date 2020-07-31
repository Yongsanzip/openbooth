import React, { useState } from 'react';
import styled from "styled-components";
import Carousel from '@brainhubeu/react-carousel';

function Thumblist(props){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const changeActiveItem = (idx) => {
        if(props.list != null && props.list.length > 0){
            if(idx > props.list.length - 5){
                idx = props.list.length - 5;
            }
            setActiveItemIndex(idx);
        }
    }
    const margin = props.marginRight != null ? props.marginRight : 25;
    const width = props.size != null ? props.size.width : 160;

    return (
        // {props.list && props.list.length > 0 ? props.list.map((el, key) => {
        //         return (
        //             <Img key={key} src={el} />
        //         )} ) : null
        // }
        <ThumblistComp size={props.size} marginRight={props.marginRight} columns={props.columns} itemWidth={width + margin} cnt={props.list && props.list.length > 0 ? props.list.length : null}>
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
                            <div key={key} className={'imgBox'}>
                                <img src={el}/>
                            </div>
                        )
                    }) : null
                }
            </Carousel>
        </ThumblistComp>
    )
}

const ThumblistComp = styled.div`
    width: 100%;
    overflow: hidden;
    .imgBox { line-height: 0; }
    & ul { width: ${props => (props.cnt != null && props.cnt > 5 && props.itemWidth != null? props.itemWidth * props.cnt + "px !important" : '')}; }
    & img {
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
            overflow: hidden;
            
            width: ${props => (props.size != null ? props.size.width+'px' : '160px;')};
            height: ${props => (props.size != null ? props.size.height+'px' : '160px;')};
            margin-right: ${props => (props.marginRight != null ? props.marginRight+'px' : '25px')};
            margin-bottom: ${props => (props.marginRight != null ? props.marginRight+'px' : '25px')};
            :nth-child(${props => (props.columns != null ? props.columns : '5')}n) { margin-right: 0; }
    }
`;

export default Thumblist;