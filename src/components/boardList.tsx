import React from 'react';
import styled from "styled-components";
import {Ellipsis} from "./index";

function Boardlist(props){
    const _onClickLink = (link) => {
        if(link == null) return;
        window.location.href = link;
    };
    return (
        <BoardListComp>
            {props.list && props.list.length > 0 ? props.list.map((el, key) => {
                return (
                    <BoardItemComp key={key}>
                        <div>
                            <div className='boardTitle'><Ellipsis>{el.title}</Ellipsis></div>
                            <div>
                                {el.reg_date}  | {el.registrant}
                            </div>
                        </div>
                        <div onClick={()=>_onClickLink(el.link)}>
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
    ${({theme}) => theme.media.desktop`
    padding: 16px 0 16px 24px;
    font-size: 12px;
    line-height: 20px;
    `}
    ${({theme}) => theme.media.mobile`
    padding: 9px 0 9px 15px;
    font-size: 10px;
    line-height: 18px;
    `}
    font-weight: normal;
    color: #999999;
    display: flex;
    flex-direction: row;
    align-items: center;
    > div {
        :first-child { flex: 1; }
        :last-child {
            text-align: right;
            ${({theme}) => theme.media.desktop`
            padding-right: 32px;
            `}
            ${({theme}) => theme.media.mobile`
            padding-right: 15px;
            `}
        }
    }
    .boardTitle {
        font-weight: bold;
        ${({theme}) => theme.media.desktop`
        font-size: 16px;
        line-height: 26px;
        `}
        ${({theme}) => theme.media.mobile`
        font-size: 12px;
        line-height: 20px;
        `}
    }
    
`;

export default Boardlist;