import React, { Component } from 'react';
import styled from "styled-components";
import List from "./list";

class Title extends Component {
    constructor() {
        super()
    }

    render(){
        const { title, img, onClick } = this.props;
        return (
            <CategoryTitle onClick={onClick}>
                <div className='titleImg'>{img}</div>
                <div className='titleText'>{title}</div>
            </CategoryTitle>
        )
    }
}

class Category extends Component {
    constructor() {
        super()
    }

    _onClickTitle = () => {
        console.log("click title on categoty");
        if(this.props.onClickTitle != null){
            this.props.onClickTitle();
        }
    }

    render(){
        const { data, showIndex, listType } = this.props;
        const { _onClickTitle } = this;
        return (
            <CategoryBox>
                <Title title={data.title} img={data.titleImg} onClick={_onClickTitle}>title</Title>
                <List type={listType} list={data.datas} showIndex={showIndex} >list</List>
            </CategoryBox>
        )
    }
}

const CategoryBox = styled.div`
    width: 400px;
`;

const CategoryTitle = styled.div`
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
`;



export default Category;