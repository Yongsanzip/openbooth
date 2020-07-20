import React, { Component } from 'react';
import styled from "styled-components";

class Panneltitle extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    const { title, link } = this.props;

    return (
        <PanneltitleComp>
          <div>{title}</div>
          <div className='moreLink'>
            더보기&nbsp;
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.06L3.05333 4L0 0.94L0.94 0L4.94 4L0.94 8L0 7.06Z" fill="#999999"/>
            </svg>
          </div>
        </PanneltitleComp>
    )
  }
}

const PanneltitleComp = styled.div`
position: relative;
width: 100%;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 32px;
color: #000000;
.moreLink {
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 32px;
  color: #999999;
}
`;

export default Panneltitle;