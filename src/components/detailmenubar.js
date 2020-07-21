import React, {createRef, useEffect, useState} from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

import {Hambutton, Sendmsg} from './index'

const Detailmenubar = (props) => {
  const history = useHistory();
  const [isShowMsgModal, setIsShowMsgModal] = useState(false);
  const [detailmenubarRef, setDetailmenubarRef] = useState(()=>createRef());

  const _sentMsg = function(){
    console.log("SEND MSG");
    setIsShowMsgModal(false);
  };

  useEffect((e) => {
    window.addEventListener('scroll', _isSubmenuTop);
  }, []);

  const _isSubmenuTop = function() {
    if(detailmenubarRef.current == null) return;

    const offsetTop = detailmenubarRef.current.offsetTop;
    if(window.scrollY > offsetTop){
      detailmenubarRef.current.classList.add('fixedOnTop');
    }
    else{
      detailmenubarRef.current.classList.remove('fixedOnTop');
    }
  }

  return (
      <DetailmenuComp ref={detailmenubarRef}>
        <div>
          <Hambutton onClick={history.goBack}/>
          <div>{props.title}</div>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setIsShowMsgModal(true)}>
            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V4L8.94 8.34C9.59 8.75 10.41 8.75 11.06 8.34L18 4V13C18 13.55 17.55 14 17 14ZM10 7L2 2H18L10 7Z" fill="#999999"/>
          </svg>
        </div>
          <Sendmsg showModal={isShowMsgModal} data={props.data} closeModal={()=>setIsShowMsgModal(false)} sentMsgToMentor={_sentMsg} />
      </DetailmenuComp>
  )
}

const DetailmenuComp = styled.div`
width: 100%;
height: 56px;
background: #ffffff;
border-bottom: 1px solid #E9E9E9;
box-sizing: border-box;
> div {
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  > *:nth-child(2) {
    flex: 1;
  }
}
`;

export default Detailmenubar;