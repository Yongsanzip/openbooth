import React, { useEffect } from 'react';
import styled from "styled-components";
import ReactModal from 'react-modal';
import CSS from 'csstype';


function Custommodal(props){
  useEffect(()=>{
    ReactModal.setAppElement('#app');
  },[])

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

  let contentCustomStyles: CSS.Properties = {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : props.width != null? props.width : '480px',
    padding               : 0
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
  position: absolute;
  right: 23px;
  top: 23px;
`;

const ModalContent = styled.div`
color: #999999;
.modalcontent {
  & .modalTitle {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
  }
  & .modalDescription {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    padding-top: 16px;
  }
  textarea {
    width: 100%;
    height: 250px;
    background: #F7F7F9;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    padding: 10px 15px;
    margin-top: 24px;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    resize: none;
    :focus {
      outline: 0;
    }
  }
  > div {
    padding: 24px 24px 0 24px;
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
& .modalBtns {
  padding: 10px 0;
  text-align: right;
  &> * {
    margin-right: 10px;
  }
}
`;

export default Custommodal;