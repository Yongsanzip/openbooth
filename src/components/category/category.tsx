import React, { Component } from 'react';
import styled from "styled-components";
import List from "./list";

function Category(props) {
    const _onClickTitle = () => {
        if(props.onClickTitle != null){
            props.onClickTitle();
        }
    }

    const { data, showIndex, listType } = props;
    let list = data.booth;
    if(typeof list == "object"){
        list = new Array(data.booth);
    }
    return (
        <CategoryBox>
            <div className='categoryTitle' onClick={props.onClickTitle}>
                <div className='titleImg'>{data.category_image}</div>
                <div className='titleText'>{data.category}</div>
            </div>
            <List type={listType} list={list} showIndex={showIndex} >list</List>
        </CategoryBox>
    )
}

const CategoryBox = styled.div`
    width: 400px;
    .categoryTitle {
        position: relative;
        height: 120px;
        .titleText {
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0 0 16px 16px;
            font-weight: normal;
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: -0.01em;
        }
        .titleImg {
            width: 100%;
            height: 100%;
            background: linear-gradient(360deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0) 100%);
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
        }
    }
`;

export default Category;