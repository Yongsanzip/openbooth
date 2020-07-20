import React, { Component } from 'react';
import Inputfield from './inputfield'
import styled from "styled-components";

class Searchfield extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      disabled: false,
    };
  }

  render(){
    const { placeholder, width, name } = this.props;
    const { disabled } = this.state;

    return (
      <SearchField width={width}>
        <Inputfield disabled={ disabled } width={width ? width : 355} name={name}/>
        <svg className="searchIcon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#999999"/>
        </svg>
      </SearchField>
    )
  }
}

const SearchField = styled.div`
  position: relative;
  width: ${props => (props.width != null && props.width > 0 ? props.width + 'px' : '355px')};
  top: 50%;
  margin-top: -20px;
  & .searchIcon {
    position: absolute;
    top: 50%;
    right: 11px;
    margin-top: -9px;
  }
`;

export default Searchfield;
