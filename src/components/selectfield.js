import React, { Component } from 'react';
import styled from "styled-components";

class Selectfield extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    const { list, name } = this.props;
    return (
        <div className='selectField'>
        <SelectBox name={name}>
        {list && list.length > 0 ?
            list.map((el, key) => {
              const view_url = '/view/' + el.board_id;

              return (
                  <option key = {key} value = {el.value} > {el.name} </option>
              )}
            ) : null
        }
        </SelectBox>
    </div>
  )
  }
}

const SelectBox = styled.select`
  height: 40px;
  background: #F7F7F9;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
  background-image: url('data:image/svg+xml;utf8,<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.94 -3.08602e-07L4 3.05333L7.06 -4.10887e-08L8 0.94L4 4.94L-4.10887e-08 0.94L0.94 -3.08602e-07Z" fill="#999999"/></svg>');
  :focus {
    outline: none;
  }
`;

export default Selectfield;