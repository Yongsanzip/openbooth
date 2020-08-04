import React from 'react';
import styled from "styled-components";
import {Ellipsis} from "../index";

function CategoryTitle(props){
    console.log(props);
    return (
        <CategoryTitleComp onClick={props._onClick != null? props._onClick : null}>
            <CategoryTitleImgComp src={props.data.category_image}></CategoryTitleImgComp>
            <div className='titleText'><Ellipsis>{props.data.category}</Ellipsis></div>
        </CategoryTitleComp>
    )
}
interface CategoryTitleImgCompProps {
    src: any
}
const CategoryTitleImgComp = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(props: CategoryTitleImgCompProps) => (props.src != null ? props.src : '')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    
`;
const CategoryTitleComp = styled.div`
position: relative;
width: 144px;
height: 80px;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 8px;
overflow: hidden;
.titleText {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 16px;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 10px;
    line-height: 18px;
    color: #FFFFFF;
}
`;

export default CategoryTitle;