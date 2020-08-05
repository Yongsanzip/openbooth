import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ReactModal from 'react-modal';
import CSS from 'csstype';
import {getBrowserSize} from "../common/common";


function Custommodal(props){
  const [deviceType, setDeviceType] = useState('pc');
  const _setDeviceType = () => {
    setDeviceType(getBrowserSize());
  }

  useEffect(()=>{
    ReactModal.setAppElement('#app');
    _setDeviceType();
    window.addEventListener('resize', _setDeviceType);

    return function cleanup() {
      window.removeEventListener('resize', _setDeviceType);
    };
  }, []);

  const onOverlayClick = (e)=> {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    props.closeModal();
  }

  const _onClickClose = (e)=> {
    e.stopPropagation();
    props.closeModal();
  }

  const _stopBubbling = (e)=> {
    e.stopPropagation();
  }

  let contentCustomStyles: any = {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : props.width != null? props.width : deviceType == 'pc'? '480px' : '320px',
    height                : props.height != null? props.height : 'auto',
    padding               : 0,
    borderRadius          : '8px',
    boxSizing             : 'border-box',
    overflow              : 'hidden'
  };
  let overlayCustomStyles: CSS.Properties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: props.overlay!=null ? 'rgba(0, 0, 0, '+props.overlay+')' : 'rgba(0, 0, 0, 0.7)'
  };
  if(props.modalPosition != null){
    contentCustomStyles.top = props.modalPosition.top;
    contentCustomStyles.left = props.modalPosition.left;
    contentCustomStyles.marginRight = '0';
    contentCustomStyles.transform = 'none';
  }
    return(
        <ReactModal isOpen={props.showModal} style={{content: contentCustomStyles, overlay: overlayCustomStyles}} onRequestClose={onOverlayClick} >
          <div onClick={_stopBubbling}>
            <CloseBtn onClick={_onClickClose}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="black"/>
              </svg>
            </CloseBtn>
            <ModalContent>
            {props.children}
            </ModalContent>
          </div>
        </ReactModal>
    )
}


const CloseBtn = styled.div`
  ${({theme}) => theme.media.mobile`
  display: none;
  `}
  position: absolute;
  right: 23px;
  top: 23px;
`;

const ModalContent = styled.div`
color: #999999;
.modalcontent {
  & .modalTitle {
    font-weight: bold;
    color: #000000;
    ${({theme}) => theme.media.desktop`
    font-size: 18px;
    line-height: 26px;
    `}
    ${({theme}) => theme.media.mobile`
    font-size: 14px;
    line-height: 22px;
    `}
  }
  & .modalDescription {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    padding-top: 16px;
  }
  & .textAreaBox {
    width: 100%;
    background: #F7F7F9;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    color: #999999;
    padding: 0;
    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    ${({theme}) => theme.media.desktop`
    height: 270px;
    margin-top: 24px;
    `}
    ${({theme}) => theme.media.mobile`
    height: 145px;
    margin-top: 16px;
    `}
    textarea {
      width: 100%;
      height: 100%;
      border: 0;
      background: #F7F7F9;
      resize: none;
      ${({theme}) => theme.media.desktop`
      font-size: 14px;
      line-height: 22px;
      padding: 12px 23px 20px 23px;
      `}
      ${({theme}) => theme.media.mobile`
      font-size: 12px;
      line-height: 20px;
      padding: 8px 16px 20px 16px;
      `}
      :focus {
        outline: 0;
      }
    }
    textarea::placeholder {
        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        color: #999999;
        ${({theme}) => theme.media.desktop`
        font-size: 14px;
        line-height: 22px;
        `}
        ${({theme}) => theme.media.mobile`
        font-size: 12px;
        line-height: 20px;
        `}
    }
  }

  > div {
    ${({theme}) => theme.media.desktop`
    padding: 24px 24px 0 24px;
    `}
    ${({theme}) => theme.media.mobile`
    padding: 16px 16px 0 16px;
    `}
    &.profile {
      padding: 32px 24px; 
    }
    &.details {
        padding: 0 24px 32px 24px;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        border-top: 1px solid #E9E9E9;
        box-sizing: border-box;
        > div {
            margin-top: 24px;
            & .fieldname {
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
  }
}
& .mobileCloseBtn {
  background: transparent;
  color: #818181;
  font-size: 12px;
  line-height: 20px;
  padding: 0 2px;
  width: auto;
  border: 0;
  &:hover {
    color: #818181;
    border: 0;
  }
}
& .modalBtns {
  ${({theme}) => theme.media.desktop`
  padding: 10px;
  `}
  ${({theme}) => theme.media.mobile`
  padding: 8px 16px;
  `}
  text-align: right;
  &> * {
    margin-right: 10px;
    display: inline-block;
    :last-child { margin-right: 0; }
  }
}
`;

export default Custommodal;