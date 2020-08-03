import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

function Submenubar(props) {
  // const isLanguageChange = useSelector((state: RootState) => state.tokenReducer.isLanguageChange);
  // console.log("isLanguageChange::", isLanguageChange);
  const [activePosition, setActivePosition] = useState({width:0, left: 0});
  const submenubarRef = useRef(null);

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
    let submenubarEl:any;
    if (typeof submenubarRef !== 'undefined' &&
        typeof submenubarRef.current !== 'undefined') {
      submenubarEl = submenubarRef.current;

      if(submenubarEl != null){
        const offsetTop = submenubarEl.previousElementSibling.offsetTop + submenubarEl.previousElementSibling.offsetHeight;
        if (window.scrollY > offsetTop) {
          submenubarEl.classList.add('fixedOnTop');
        } else {
          submenubarEl.classList.remove('fixedOnTop');
        }
      }
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
    setActivePosition({width: menuEl.offsetWidth, left: menuEl.offsetLeft});

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
      <SubmenuComp activePosition={activePosition} customStyle={props.style} ref={submenubarRef}>
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

interface SubmenuCompProps {
  activePosition: any;
  customStyle: any;
}
const SubmenuComp = styled.div`
width: 100%;
background: #ffffff;
border-bottom: 1px solid #E9E9E9;
box-sizing: border-box;
${({theme}) => theme.media.desktop`
overflow: hidden;
`};
${({theme}) => theme.media.mobile`
overflow-x: auto;
overflow-y: hidden;
`}
${(props: SubmenuCompProps) => (props.customStyle != null ? props.customStyle : '')}
ul {
  position: relative;
  max-width: 1280px;
  height: 55px;
  ${({theme}) => theme.media.desktop`
  display: flex;
  width: 100%;
  `}
  ${({theme}) => theme.media.mobile`
  min-width: 420px;
  height: 40px;
  padding: 0 12px;
  `}
  list-style: none;
  margin: 0 auto;
  padding: 0;
  :after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: ${(props: SubmenuCompProps) => (props.activePosition != null ? props.activePosition.left+'px' : '0')};
    width: ${(props: SubmenuCompProps) => (props.activePosition != null ? props.activePosition.width+'px' : '100px')};
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
    ${({theme}) => theme.media.mobile`
    margin-right: 16px;
    display: inline-block;
    vertical-align: middle;
    height: 40px;
    line-height: 40px;
    `}
    // :first-child { margin-left: 10px; }
    :first-child { margin-left: 0; }
    :last-child { margin-right: 0; }
    &.flex {
      flex: 1;
    ${({theme}) => theme.media.mobile`
      display: none;
    `}
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