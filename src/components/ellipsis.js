import React, { Component } from 'react';
import styled from "styled-components";

class Ellipsis extends Component {
  constructor() {
    super();
  }

  render(){
    return (
        <EllipsisComp line={this.props.line}>
          {this.props.children}
        </EllipsisComp>
    )
  }
}
const EllipsisComp = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.line != null && props.line > 1 ? props.line : '1')};
  -webkit-box-orient: vertical;
  word-break: break-all;
}
`;
export default Ellipsis;