import React, { Component, useState } from 'react';
import styled from "styled-components";
import ReactModal from 'react-modal';

// ReactModal.setAppElement(document.getElementById('app'));
class Custommodal extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    ReactModal.setAppElement('#app');
  }

  onOverlayClick = (e) => {
    console.log("overlay clicked");
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.props.closeModal();
  }

  _onClickClose = (e)=> {
    e.stopPropagation();
    this.props.closeModal();
  }

  _stopBubbling = (e)=> {
    console.log("_stopBubbling");
    e.stopPropagation();
  }

  render() {
    const { showModal, modalPosition } = this.props;
    const { _onClickClose, _stopBubbling, onOverlayClick } = this;
    let customStyles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: this.props.overlay!=null ? 'rgba(0, 0, 0, '+this.props.overlay+')' : 'rgba(0, 0, 0, 0.7)'
      },
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : this.props.width != null? this.props.width : '480px',
        padding               : 0
      }
    };
    if(modalPosition != null){
      customStyles.content.top = modalPosition.top;
      customStyles.content.left = modalPosition.left;
      customStyles.content.marginRight = '0';
      customStyles.content.transform = 'none';
    }

    return(
        <ReactModal
            isOpen={showModal}
            style={customStyles}
            onRequestClose={onOverlayClick}
        >
          <div onClick={_stopBubbling}>
            <CloseBtn onClick={_onClickClose}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="black"/>
              </svg>
            </CloseBtn>
            <ModalContent>
            {this.props.children}
            </ModalContent>
          </div>
        </ReactModal>
    )
  }
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