import React, {createRef, useEffect, useState} from 'react';
import styled from "styled-components";

function Submenubar(props) {
  // const isLanguageChange = useSelector((state: RootState) => state.tokenReducer.isLanguageChange);
  // console.log("isLanguageChange::", isLanguageChange);
  const [activePosition, setActivePosition] = useState({width:0, left: 0});
  const [submenubarRef, setSubmenubarRef] = useState(()=>createRef());

  useEffect(() => {
    _setActive(new Object(), props.activeIdx);
    _isSubmenuTop();
    window.addEventListener('resize', function(){_setActive(new Object(), props.activeIdx)});
    window.addEventListener('scroll', _isSubmenuTop);
    setTimeout(function(){
      _setActive(new Object(), props.activeIdx);
    }, 300)
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

    // _setActiveUnderBar(props.activeIdx);
  }

  const _setActive = function(data, idx) {
    _setActiveUnderBar(idx);
    if(data.highlight) return true;

    if(props.onChangeTab != null) props.onChangeTab(idx);
  }

  const _setActiveUnderBar = function(idx){
    let menuEl: any;
    if(document.getElementsByClassName("submenu"+idx).length > 0){
      menuEl = document.getElementsByClassName("submenu"+idx)[0];
    }
    if(menuEl == null) return;
    console.log("offsetWidth::::", menuEl.offsetWidth);
    setActivePosition({width: menuEl.offsetWidth, left: menuEl.offsetLeft});
    console.log(activePosition);

  }

  const _setLiClass = function(menu, key) {
    if(menu.name == '-') {
      return 'flex';
    }

    let classes:any = new Array();
    classes.push('submenu' + key);
    if(props.activeIdx == key){
      classes.push('active');
    }
    if(menu.highlight){
      classes.push('highlight');
    }

    return classes.join(' ');
  }

  return (
      <SubmenuComp className='submenubar' activePosition={activePosition} customStyle={props.style} ref={submenubarRef}>
        <ul>
          {props.menuList && props.menuList.length > 0 ?
              props.menuList.map((el, key) => {
                return (
                    <li key={key} className={_setLiClass(el, key)} >
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
border-bottom: 1px solid #E9E9E9;
box-sizing: border-box;
${(props: any) => (props.customStyle != null ? props.customStyle : '')}
ul {
  position: relative;
  display: flex;
  max-width: 1280px;
  width: 100%;
  height: 55px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  :after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: ${(props: any) => (props.activePosition != null ? props.activePosition.left+'px' : '0')};
    width: ${(props: any) => (props.activePosition != null ? props.activePosition.width+'px' : '100px')};
    height: 4px;
    background: #006CB9;
    border-radius: 2px;
    transition-duration:0.5s;
    transition-timing-function: ease;
  }
  & li {
    list-style: none;
    margin-right: 22px;
    :nth-child(2){
      margin-right: 24px;
    }
    color: #999999;
    letter-spacing: -0.01em;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    height: 56px;
    line-height: 56px;
    // :first-child { margin-left: 10px; }
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