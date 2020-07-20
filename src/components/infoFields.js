import React, { Component } from 'react';
import styled from "styled-components";

class Infofields extends Component {

  constructor(props) {
    super(props)
  }
  render(){
    const { list, fieldWidth } = this.props;
    return (
        <div>
          {list && list.length > 0 ? list.map((el, key) => {
            return (
                <InfoComp key={key} className='row' fieldWidth={fieldWidth}>
                  <div>{el.fieldname}</div>
                  <div>{el.value}</div>
                </InfoComp>
            )} ) : null
          }
      </div>
    )
  }
}

const InfoComp = styled.div`
  margin-bottom: 24px;
  :last-child { margin-bottom: 0; }
  > * {
    display: inline-block;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #999999;
    :first-child {
      width: ${props => (props.fieldWidth != null ? props.fieldWidth+'px' : '223px')};
      margin-right: 5px;
      font-weight: bold;
    }
  }
`;

export default Infofields;
