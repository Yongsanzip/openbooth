import React, { Component } from 'react';
import styled from "styled-components";

class Button extends Component {
  constructor() {
    super()
  }

  _onclick = (e) => {
      e.stopPropagation();
      this.props._clickBtn();
  }

  render(){
      const { id, name, width, style, fill } = this.props;
      const { _onclick } = this;
      return (
          <Buttoncomp width={width} customStyle={style} className={fill? 'fill' : ''} onClick={_onclick}>
              <button type={"button"}>{this.props.children}</button>
          </Buttoncomp>
    )
  }
}

const Buttoncomp = styled.div`
& button {
    width: ${props => (props.width != null && props.width > 0 ? props.width + 'px' : 'auto')};
    background: #fff;
    border: 0.8px solid #005CB9;
    box-sizing: border-box;
    border-radius: 24px;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    vertical-align: center;
    text-align: center;
    color: #005CB9;
    padding: 13px 0;
    &:hover {
        color: #00416B;
        border: 0.8px solid #00416B;
    }
    &:focus {
        outline: 0;
    }
    & a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
    
    ${props => (props.customStyle != null ? props.customStyle : '')};
}
&.fill {
    & button {
        background: #005CB9;
        border: 0;
        color: #FFFFFF;
        &:hover {
            background: #00416B;
        }
    }
}
`;

export default Button;