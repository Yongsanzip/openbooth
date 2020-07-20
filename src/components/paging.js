import React, { Component } from 'react';
import styled from "styled-components";

class Paging extends Component {

  constructor(props) {
    super(props)
  }

  _onClickPageNum = (num) => {
    this.props.changePage(num);
  }

  _movePage = (arrow) => {
    const { now } = this.props;
    let num = Number(now);
    if(arrow == 'prev'){
      if(now - 1 <= 0) return false;
      num = num - 1;
    }
    else if(arrow == 'next') {
      if (now + 1 > this.props.totalCnt) return false;
      num = num + 1;
    }

    console.log(num);

    this._onClickPageNum(num);
  }

  render(){
    const { totalCnt, now, showNumbs, changePage } = this.props;
    const { _onClickPageNum, _movePage } = this;
    let i = 0,
        middleNum = Math.ceil(Number(showNumbs) / 2) - 1,
        start = 0,
        last = Number(totalCnt),
        slimit = Number(now) - middleNum,
        elimit = Number(showNumbs);

    if(Number(now) - middleNum > 0){
      start = Number(now) - middleNum - 1;
    }

    last = start + Number(showNumbs);
    if(last > Number(totalCnt)) last = Number(totalCnt);

    i = start;
    let pagingArr = [];
    while(i++ <= last) {
      if(i > last) continue;
      pagingArr.push(i);
    }
    return (
        <PagingNavi>
          <ul>
            <li>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>_movePage('prev')}>
                <path d="M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.000156927 6L6.00016 -1.23266e-07L7.41016 1.41Z" fill="#999999"/>
              </svg>
            </li>

            {pagingArr && pagingArr.length > 0 ?
              pagingArr.map((num) => {
                return (
                  <li key = {num} className={now == num? 'active' : ''} ><a href='#' onClick={()=>_onClickPageNum(num)}> {num} </a>< /li>
                  )}
                ) : null
              }
              { Number(totalCnt) - 1 != last ? <li>...</li> : '' }
              {last < Number(totalCnt) &&  <li><a href='#' onClick={()=>_onClickPageNum(totalCnt)}> {totalCnt} </a></li>}

              <li>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>_movePage('next')}>
                  <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#999999"/>
                </svg>
              </li>
          </ul>
        </PagingNavi>
    )
  }
}

const PagingNavi = styled.div`
text-align: center;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    & li {
      list-style: none;
      position: relative;
      display: inline-block;
      margin: 0 4px;
      color: #999999;
      letter-spacing: -0.01em;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      height: 24px;
      width: 24px;
      &.active {
        color: #006CB9;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 4px;
          background: #006CB9;
          border-radius: 2px;
        }
      }
      & a {
        text-decoration: none;
        &:hover, &:visited,  &:active, &:focus {outline: none; text-decoration: none; color: inherit;}
      }
    }
  }
`;

export default Paging;