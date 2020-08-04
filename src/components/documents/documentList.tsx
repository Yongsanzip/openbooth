import React from 'react';
import styled from "styled-components";
import Documentitem from "./documentitem"

function Documentlist(props) {
    return (
        <DocumentlistComp>
            <div className='title'>{props.title}</div>
            {props.list && props.list.length > 0 ? props.list.map((el, key) => {
                return (
                    <Documentitem key = {key} title = {el.file_name} isMobile={props.isMobile} />
                )} ) : null
            }
        </DocumentlistComp>
    )
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
    ${({theme}) => theme.media.desktop`
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    padding: 0 24px;
    `}
    ${({theme}) => theme.media.mobile`
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    padding: 0 16px;
    `}
    font-weight: bold;
    color: #000;
}
`;

export default Documentlist;