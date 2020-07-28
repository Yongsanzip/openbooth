import React, { useState } from 'react';
import styled from "styled-components";
import {Sendmsg, Namecard, Profile, Custommodal } from "../index";

function MentorinfoModal(props){
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

function Mentorinfo(props){

    const [showMentorInfoModal, setShowMentorInfoModal] = useState(false);

    const _showMentorInfo = (e) => {
        if(e != null) e.stopPropagation();
        setShowMentorInfoModal(true);
    }
    const _closeMentorInfo = () => {
        setShowMentorInfoModal(false);
    }

    return (
        <MentorinfoComp>
            <Namecard data={props.data} showMoreinfoBtn={_showMentorInfo} />
            {props.data.content}
            <MentorinfoModal showModal={showMentorInfoModal} handleCloseModal={_closeMentorInfo} data={props.data} />
        </MentorinfoComp>
    )
}

const MentorinfoComp = styled.div`
padding: 32px;
color: #999999;
> *:first-child {
margin-bottom: 16px;
}
`;

export default Mentorinfo;