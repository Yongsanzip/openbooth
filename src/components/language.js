import React, { Component } from 'react';
import styled from "styled-components";

class Language extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
      lanList : [{
        name: '대한민국',
        lan: 'kor'
      },{
        name: 'English',
        lan: 'eng'
      }]
    }
  }

  _onClickLanBox = (el) => {
    if(el != null){
      this.props.setLanguage(el.lan);
    }
    this.setState({
      isFocused: !this.state.isFocused
    })
  }

  render(){
    const { isFocused, lanList } = this.state;
    const { lan } = this.props;
    const { _onClickLanBox } = this;
    return (
        <LanguageComp>
          <div className="lanBox" onClick={()=>_onClickLanBox()}>{lanList[lanList.findIndex(l => l.lan === lan)].name}</div>
          {isFocused?
              <div className="lanList">
                <ul>
                  {lanList && lanList.length > 0 ?
                      lanList.map((el, key) => {
                        return (
                            <li key={key} className="lanBox" onClick={()=>_onClickLanBox(el)}>
                              {el.name}
                            </li>
                        )
                      }) : null
                  }
                </ul>
              </div> : null }
        </LanguageComp>
    )
  }
}

const LanguageComp = styled.div`
position: relative;
min-width: 80px;
text-align: center;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 20px;
letter-spacing: -0.01em;
color: #999999;
& .lanList {
  position: absolute;
  bottom: 47px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  li {
    display: block;
    width: inherit;
    border-radius: 0;
    border-bottom: 0;
    :first-child {
      border-radius: 8px 8px 0 0;
    }
    :last-child {
      border-bottom: 1px solid #E9E9E9;
      border-radius: 0 0 8px 8px;
    }
  }
}
& .lanBox {
  background: #ffffff;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 14px;
}
`;

export default Language;