import React, {createRef, useEffect, useState} from 'react';
import styled from "styled-components";

function Submenubar(props) {
  const [activeBarPositions, setActiveBarPositions] = useState(new Array());
  const [submenubarRef, setSubmenubarRef] = useState(()=>createRef());

  useEffect((e) => {
    _setActiveBarPositions();
    _setActive(new Object(), props.activeIdx);
    window.addEventListener('resize', _resetActiveBarPositions);
    window.addEventListener('scroll', _isSubmenuTop);
  }, []);

  const _isSubmenuTop = function() {
    if(submenubarRef.current == null) return;
    const offsetTop = submenubarRef.current.previousElementSibling.offsetTop + submenubarRef.current.previousElementSibling.offsetHeight;
    if(window.scrollY > offsetTop){
      submenubarRef.current.classList.add('fixedOnTop');
    }
    else{
      submenubarRef.current.classList.remove('fixedOnTop');
    }
  }

  const _resetActiveBarPositions = function() {
    _setActiveBarPositions();
    _setActive(new Object(), props.activeIdx);
  }

  const _setActiveBarPositions = function() {
    if(props.menuList != null && props.menuList.length > 0) {
      let positionList = [];
      for(let i = 0; i < props.menuList.length; i++){
        let menuEl = document.getElementsByName("submenu"+i)[0];
        if(!menuEl || menuEl == null) continue;
        positionList[i] = {
          width: menuEl.offsetWidth,
          left: menuEl.offsetLeft
        };
      }

      setActiveBarPositions(positionList);
    }
  }

  const _setActive = function(data, idx) {
    if(data.highlight) return true;

    if(activeBarPositions.length < 1 || activeBarPositions[idx] == null) _setActiveBarPositions();
    if(props.onChangeTab != null) props.onChangeTab(idx);
  }

  const _setLiClass = function(menu, key) {
    if(menu.name == '-') {
      return 'flex';
    }

    let classes = [];
    if(props.activeIdx == key){
      classes.push('active');
    }
    if(menu.highlight){
      classes.push('highlight');
    }

    return classes.join(' ');
  }


  return (
      <SubmenuComp className='submenubar' customStyle={props.style} ref={submenubarRef} activePosition={activeBarPositions[props.activeIdx]}>
        <ul>
        {props.menuList && props.menuList.length > 0 ?
            props.menuList.map((el, key) => {
            return (
                <li key={key} className={_setLiClass(el, key)} name={'submenu'+key}>
                  {el.name != '-'?
                      <a onClick={()=>_setActive(el, key)}>{el.name}</a>
                      : ''
                  }
                  {el.cnt != null? <div className="count"><span>{el.cnt}</span></div> : ''}
                </li>
            )
          }) : null
        }
        </ul>
      </SubmenuComp>
  )
}

const SubmenuComp = styled.div`
width: 100%;
background: #ffffff;
border-top: 1px solid #E9E9E9;
border-bottom: 1px solid #E9E9E9;
box-sizing: border-box;
${props => (props.customStyle != null ? props.customStyle : '')}
ul {
  position: relative;
  display: flex;
  max-width: 1280px;
  width: 100%;
  height: 56px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  :after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: ${props => (props.activePosition != null ? props.activePosition.left+'px' : '0')};
    width: ${props => (props.activePosition != null ? props.activePosition.width+'px' : '100px')};
    height: 4px;
    background: #006CB9;
    border-radius: 2px;
    transition-duration:0.5s;
    transition-timing-function: ease;
  }
  & li {
    list-style: none;
    position: relative;
    margin: 0 10px;
    color: #999999;
    letter-spacing: -0.01em;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    height: 56px;
    line-height: 56px;
    :first-child { margin-left: 0; }
    :last-child { margin-right: 0; }
    &.flex {
      flex: 1;
    }
    &.highlight {
      color: #F58181;
    }
    &.active {
      color: #006CB9;
    }
    & a {
      display: inline-block;
      vertical-align: top;
      height: 100%;
      text-decoration: none;
      &:hover, &:visited,  &:active, &:focus { outline: none; text-decoration: none; color: inherit; }
    }
    & .count {
      position: relative;
      display: inline-block;
      margin-left: 5px;
      width: 16px;
      height: 24px;
      line-height: 24px;
      vertical-align: top;
      font-size: 12px;
      color: #fff;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 16px;
        height: 16px;
        background: #005CB9;
        border-radius: 50%;
        margin-top: -8px;
      }
      & span {
          position: relative;
          color: #fff;
      }
    }
  }
}
`;

export default Submenubar;