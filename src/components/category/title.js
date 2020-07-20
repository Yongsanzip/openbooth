import React, { Component } from 'react';
import styled from "styled-components";

class Title extends Component {
    constructor() {
        super()
    }

    render(){
        const { title, img } = this.props;
        return (
            <CategoryTitle>
                <div className='titleImg'>{img}</div>
                <div className='titleText'>{title}</div>
            </CategoryTitle>
        )
    }
}

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

export default Title;