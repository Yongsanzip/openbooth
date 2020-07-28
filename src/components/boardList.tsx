import React, { Component } from 'react';
import styled from "styled-components";
import {Img} from "./index";

function Boardlist(props){
    return (
        <BoardListComp>
            {props.list && props.list.length > 0 ? props.list.map((el, key) => {
                return (
                    <BoardItemComp key={key}>
                        <div>
                            <div className='boardTitle'>{el.title}</div>
                            <div>
                                {el.date}  | {el.name}
                            </div>
                        </div>
                        <div>
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#999999"/>
                            </svg>

                        </div>
                    </BoardItemComp>
                )} ) : null
            }
        </BoardListComp>
    )
}
const BoardListComp = styled.div`
    margin: 0 !important;
    padding: 0 !important;
    > * {
        border-bottom: 1px solid #E9E9E9;
        box-sizing: border-box;
        :last-child { border-bottom: 0; }
    }
`;
const BoardItemComp = styled.div`
    padding: 16px 0 16px 24px;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #999999;
    display: flex;
    flex-direction: row;
    align-items: center;
    > div {
        :first-child { flex: 1; }
        :last-child { text-align: right; padding-right: 32px; }
    }
    .boardTitle {
        font-weight: bold;
        font-size: 16px;
        line-height: 26px;
    }
    
`;

export default Boardlist;