import React, { Component } from 'react';
import styled from "styled-components";
import Documentitem from "./documentitem"

class Documentlist extends Component {
    constructor() {
        super()
    }

    render(){
        const { title, list } = this.props;
        return (
            <DocumentlistComp>
                <div className='title'>{title}</div>
                {list && list.length > 0 ? list.map((el, key) => {
                    return (
                        <Documentitem key = {key} title = {el.title} />
                    )} ) : null
                }
            </DocumentlistComp>
        )
    }
}

const DocumentlistComp = styled.div`
width: 100%;
background: #fff;
> * {
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    &:last-child { border: 0 }
}
.title {
    height: 56px;
    line-height: 56px;
    font-weight: bold;
    font-size: 16px;
    color: #000;
    padding: 0 24px;
}
`;

export default Documentlist;