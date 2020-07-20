import React, { Component } from 'react';
import styled from "styled-components";

class Pannel extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
        <PannelComp noPadding={this.props.noPadding}>
            {this.props.title != null && this.props.title != ''? <div className='title'>{this.props.title}</div> : null }
          <div className='content'>
              {this.props.children}
          </div>
        </PannelComp>
    )
  }
}

const PannelComp = styled.div`
background: #FFFFFF;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #999999;
.title {
    height: 56px;
    font-weight: bold;
    font-size: 16px;
    line-height: 56px;
    color: #000000;
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    padding: ${props => (props.noPadding ? '0' : '0 24px')};
}
.content {
    & > * { margin-top: 20px; padding: ${props => (props.noPadding ? '0' : '0 24px')}; }
    padding-bottom: 20px;
    .video {
        width: inherit;
        height: 480px;
        > div {
            width: 100%;
            height: 100%;
            background: #333333;
            border-radius: 8px;
        }
    }
    .thumbs {
        display: flex;
        width: 900px;
        height: 160px;
        overflow-x: auto;
        overflow-y: hidden;
        // ::-webkit-scrollbar {
        //   height: 2px;
        // }
        // ::-webkit-scrollbar-track {
        //   background-color: transparent;
        // }
        // ::-webkit-scrollbar-thumb {
        //   border-radius: 3px;
        //   background-color: gray;
        // }
        // ::-webkit-scrollbar-button {
        //   width: 0;
        //   height: 0;
        // }
        > .thumb {
            flex: none;
            display: inline-block;
            vertical-align: top;
            width: 160px;
            height: 160px;
            margin-right: 25px;
            :last-child { margin-right: 0; }
            background: #DBDBDB;
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
        }
    }
}
`;

export default Pannel;