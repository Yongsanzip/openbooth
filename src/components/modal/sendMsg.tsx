import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Button, Custommodal, Ellipsis} from "./../index";
import {isMobileSize} from "../../common/common";

function Sendmsg(props) {
    const [deviceType, setDeviceType] = useState('deskTop');
    const _setDeviceType = () => {
        if(isMobileSize()){
            setDeviceType('mobile');
        }
        else{
            setDeviceType('deskTop');
        }
    }

    useEffect(()=>{
        _setDeviceType();
        window.addEventListener('resize', _setDeviceType);

        return function cleanup() {
            window.removeEventListener('resize', _setDeviceType);
        };
    }, []);

    const _Send = function() {
        props.sentMsgToMentor();
    }

    const btnStyle = {
        padding: '7px 0',
        width: '105px',
        height: deviceType == 'mobile'? '32px' : '36px'
    }

    return(
        <Custommodal showModal={props.showModal} width={deviceType == 'mobile'? "320px" : "640px"} height={deviceType == 'mobile'? "246px" : "400px"} closeModal={props.closeModal}>
            <div className='modalcontent'>
                <div className='modalTitle'><Ellipsis>Send Message to {props.data == null? '' : props.data.name}</Ellipsis></div>
                <div className='textAreaBox'><textarea placeholder='Leave a message here' /></div>
            </div>
            <SendMsgComp className='modalBtns'>
                {deviceType == 'mobile'? <Button _clickBtn={props.closeModal} className={'mobileCloseBtn'} >Close</Button> : null}
                <Button className='modalBtn' _clickBtn={_Send} width={deviceType == 'mobile'? 88 : 150} style={btnStyle} fill={true}>
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