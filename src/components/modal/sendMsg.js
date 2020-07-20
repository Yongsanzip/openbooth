import React from 'react';
import styled from "styled-components";
import {Button, Custommodal} from "./../index";

function Sendmsg(props) {
    const _Send = function() {
        props.sentMsgToMentor();
    }

    const btnStyle = {
        padding: '7px 0',
        width: '105px'
    }

    return(
        <Custommodal showModal={props.showModal} width="560px" closeModal={props.closeModal}>
            <div className='modalcontent'>
                <div className='modalTitle'>Send Message to {props.data.name}</div>
                <textarea placeholder='Leave a message here' />
            </div>
            <div className='modalBtns'>
                <Button className='modalBtn' _clickBtn={_Send} width={150} style={btnStyle} fill={true}>
                    Send
                </Button>
            </div>
        </Custommodal>
    )
}

export default Sendmsg;