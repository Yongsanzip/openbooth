import React, { Component } from 'react';
import styled from "styled-components";

class Hash extends Component {
  constructor() {
    super()
  }

  _clickHash = (id) => {
      console.log("clicked hash");
  }

  render(){
    const { id, name } = this.props;
    const { _clickHash } = this;
    return (
        <HashBox>
          <div onClick={()=>_clickHash(id)}>{name}</div>
        </HashBox>
  )
  }
}

const HashBox = styled.div`
    display: inline-block;
    vertical-align: middle;
    border: 0.8px solid #005CB9;
    box-sizing: border-box;
    border-radius: 12px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #005CB9;
    padding: 3px 10px;
    font-size: 10px;
    line-height: 18px;
    font-weight: bold;
`;

export default Hash;