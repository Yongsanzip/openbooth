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
    if(list.length == null || list.length < 0){
        list = new Array(data.booth);
    }

    const _onErrorImg = (e) => {
        e.target.style.display = 'none';
    }
    return (
        <CategoryBox>
            <div className='categoryTitle' onClick={props.onClickTitle}>
                <div className='titleImg'>
                    {data.category_image != null? <img src={data.category_image} width="100%" height="100%" onError={_onErrorImg}/> : null }
                </div>
                <div className='titleText'>{data.category}</div>
            </div>
            <List type={listType} list={list} showIndex={showIndex}  >list</List>
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
            box-sizing: border-box;
            overflow: hidden;
            &:after {
                content: '';
                position: absolute;
                left: 0;
                height: 100%;
                width: 100%;
                border: 1px solid #E9E9E9;
                background: linear-gradient(360deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0) 100%);
                box-sizing: border-box;
                border-radius: 8px;
            }
            > img {
                box-sizing: border-box;
                border-radius: 8px;
            }
        }
    }
`;

export default Category;