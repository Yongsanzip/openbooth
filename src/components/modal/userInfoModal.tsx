import React, {useState} from 'react';
import styled from "styled-components";
import {Custommodal, Profile, Sendmsg} from "./../index";

function UserinfoModal(props){
    const [showSendMsgModal, setShowSendMsgModal] = useState(false);
    const _showSendMsgModal = ()=> {
        setShowSendMsgModal(true);
    }

    const _closeSendMsgModal = ()=> {
        setShowSendMsgModal(false);
    }

    const _sentMsg = () => {
        _closeSendMsgModal();
        props.handleCloseModal();
    }

    return(
        <Custommodal showModal={props.showModal} closeModal={props.handleCloseModal}>
            <Profile data={props.data} showMailBtn={_showSendMsgModal} />
            <Sendmsg showModal={showSendMsgModal} data={props.data} closeModal={_closeSendMsgModal} sentMsgToMentor={_sentMsg} />
        </Custommodal>
    )
}
export default UserinfoModal;