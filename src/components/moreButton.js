import React, { Component } from 'react';
import styled from "styled-components";

class MoreButton extends Component {
  constructor() {
    super()
  }

  render(){
    return (
        <Morebtn>
            <div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </Morebtn>
  )
  }
}

const Morebtn = styled.div`
width: 24px;
height: 24px;
& > div {
    padding: 3px 0;
    & .dot {
        width: 4px;
        height: 4px;
        background: #999999;
        border-radius: 50%;
        margin: 3px auto;
        &:first-child {
            margin-top: 0;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
}
`;

export default MoreButton;