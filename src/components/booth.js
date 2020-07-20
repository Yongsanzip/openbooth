import React, { Component } from 'react';
import styled from "styled-components";
import {Img, Hash} from "./index";

class Booth extends Component {
    constructor() {
        super();
    }

    render(){
        const { data, onClick, type } = this.props;

        return (
            <BoothComp type={type}>
                <Img src={data.imgSrc} width={type != null && type == 'sub'? '290px' : '400px'} height={type != null && type == 'sub'? '174px' : '240px'} />
                <div className='boothInfo'>
                        {data.category != null && data.category.length > 0?
                            "<div className='hash'>" +
                            data.category.map(function(el, key) {
                                return (
                                    <Hash name='Category' key={key} data={el} />
                                );
                            })
                            + "</div>"
                            : null}
                    <div className='title'>{data.title}</div>
                </div>
                <div className='company'>
                    <Img src={data.company.img} width="24px" height="24px"/>
                    <div>{data.company.name}</div>
                </div>
            </BoothComp>
        )
    }
}

const BoothComp = styled.div`
width: ${props => (props.type != null && props.type == 'sub'? '290px' : '400px')};
height: ${props => (props.type != null && props.type == 'sub' ? '306px' : '420px')};
background: #FFFFFF;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 8px;
overflow: hidden;
position: relative;
transition: transform 0.5s 0s ease, box-shadow 0.3s 0s ease-in-out;
transform: translatey(0);
:hover {
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
    transform: translatey(-4px);
}
> .boothInfo {
    padding-top: 12px;
    height: ${props => (props.type != null && props.type == 'sub' ? '82px' : '122px')};
    border-top: 1px solid #E9E9E9;
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    > * {
        padding: ${props => (props.type != null && props.type == 'sub' ? '0 12px' : '0 16px')};
    }
    > .hash> * {
        margin-right: 8px;
        :last-child { margin-right: 0; }
    }
    > .title {
        margin: ${props => (props.type != null && props.type == 'sub' ? '0' : '8px 0')};
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
}
> .company {
    height: ${props => (props.type != null && props.type == 'sub' ? '48px' : '56px')};
    line-height: 56px;
    vertical-align: middle;
    margin-left: 16px;
    
    font-weight: normal;
    font-size: 12px;
    color: #999999;
    > * {
        display: inline-block;
        vertical-align: top;
        :first-child {
            vertical-align: middle;
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
            margin-right: 4px;
        }
    }
}
`;

export default Booth;