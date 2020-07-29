import React from 'react';
import styled from "styled-components";
import {Button, Custommodal, Ellipsis} from "./../index";

function Sendmsg(props) {
    const _Send = function() {
        props.sentMsgToMentor();
    }

    const btnStyle = {
        padding: '7px 0',
        width: '105px',
        height: '36px'
    }

    return(
        <Custommodal showModal={props.showModal} width="640px" height="400px" closeModal={props.closeModal}>
            <div className='modalcontent'>
                <div className='modalTitle'><Ellipsis>Send Message to {props.data == null? '' : props.data.name}</Ellipsis></div>
                <textarea placeholder='Leave a message here' />
            </div>
            <SendMsgComp className='modalBtns'>
                <Button className='modalBtn' _clickBtn={_Send} width={150} style={btnStyle} fill={true}>
                    Send
                </Button>
            </SendMsgComp>
        </Custommodal>
    )
}

const SendMsgComp = styled.div`
    margin-top: -2px;
    padding-top: 8px !important;
`;
export default Sendmsg;