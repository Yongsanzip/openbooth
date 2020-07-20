import React, { Component } from 'react';
import styled from "styled-components";
import { Img } from "./index";

class Thumblist extends Component {

  constructor(props) {
    super(props)
  }

  render(){
      const { list, size, marginRight } = this.props;
    return (
        <ThumblistComp size={size} marginRight={marginRight}>
            {list && list.length > 0 ? list.map((el, key) => {
                return (
                    <Img key={key} src={list.src} />
                )} ) : null
            }
        </ThumblistComp>
    )
  }
}

const ThumblistComp = styled.div`
    width: 100%;
    > * {
        display: inline-block;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 8px;
        overflow: hidden;
        
        width: ${props => (props.size != null ? props.size.width+'px' : '160px;')};
        height: ${props => (props.size != null ? props.size.height+'px' : '160px;')};
        margin-right: ${props => (props.marginRight != null ? props.marginRight+'px' : '25px')};
        :last-child { margin-right: 0; }
    }  
`;

export default Thumblist;