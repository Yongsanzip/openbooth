import React, { Component } from 'react';
import styled from "styled-components";

class Img extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <ImgComp src={this.props.src} width={this.props.width} height={this.props.height}>
                {this.props.src == null || this.props.src == ''? <div className='empty' /> : null}
            </ImgComp>
        )
    }
}
const ImgComp = styled.div`
width: ${props => (props.width != null ? props.width : 'auto')};
height: ${props => (props.height != null ? props.height : 'auto')};
background: ${props => (props.src != null ? 'url('+props.src+')' : '#DBDBDB')};
background-position: center;
background-size: auto 100%;
background-repeat: no-repeat;
overflow: hidden;
.empty {
width: 100%;
height: 100%;
background: #DBDBDB
}
`;
export default Img;