import React, { Component } from 'react';
import styled from "styled-components";
import {Sendmsg, Namecard, Profile, Custommodal } from "../index";

class MentorinfoModal extends Component {
    constructor() {
        super();
        this.state = {
            showSendMsgModal: false,
        }
    }

    _showSendMsgModal = ()=> {
        this.setState({
            showSendMsgModal: true
        })
    }

    _closeSendMsgModal = ()=> {
        this.setState({
            showSendMsgModal: false
        })
    }

    _sentMsg = () => {
        this._closeSendMsgModal();
        this.props.handleCloseModal();
    }

    render(){
        const { showSendMsgModal } = this.state;
        const { data, showModal, handleCloseModal } = this.props;
        const { _showSendMsgModal, _closeSendMsgModal, _sentMsg } = this;

        return(
            <Custommodal showModal={showModal} closeModal={handleCloseModal}>
                <Profile data={data} showMailBtn={_showSendMsgModal} />
                <Sendmsg showModal={showSendMsgModal} data={data} closeModal={_closeSendMsgModal} sentMsgToMentor={_sentMsg} />
            </Custommodal>
        )
    }
}

class Mentorinfo extends Component {
    constructor() {
        super();
        this.state = {
            showMentorInfoModal: false
        };
    }

    _showMentorInfo = (e) => {
        if(e != null) e.stopPropagation();
        this.setState({ showMentorInfoModal: true });
    }
    _closeMentorInfo = () => {
        this.setState({ showMentorInfoModal: false });
    }

    render(){
        const { data } = this.props;
        const { _showMentorInfo, _closeMentorInfo, _onclick } = this;
        const { showMentorInfoModal } = this.state;
        return (
            <MentorinfoComp>
                <Namecard data={data} showMoreinfoBtn={_showMentorInfo} />
                {data.content}
                <MentorinfoModal showModal={showMentorInfoModal} handleCloseModal={_closeMentorInfo} data={data} />
            </MentorinfoComp>
        )
    }
}

const MentorinfoComp = styled.div`
padding: 32px;
color: #999999;
> *:first-child {
margin-bottom: 16px;
}
`;

export default Mentorinfo;