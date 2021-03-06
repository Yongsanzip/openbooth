import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Button, Custommodal, Ellipsis} from "./../index";
import {getBrowserSize} from "../../common/common";

function Sendmsg(props) {
    const [deviceType, setDeviceType] = useState('pc');
    const _setDeviceType = () => {
        setDeviceType(getBrowserSize());
    };

    useEffect(()=>{
        _setDeviceType();
        window.addEventListener('resize', _setDeviceType);

        return function cleanup() {
            window.removeEventListener('resize', _setDeviceType);
        };
    }, []);

    const _Send = function() {
        props.sentMsgToMentor();
    };

    const btnStyle = {
        padding: '7px 0',
        width: '105px',
        height: deviceType !== 'pc'? '32px' : '36px'
    };

    return(
        <Custommodal showModal={props.showModal} width={deviceType !== 'pc'? "320px" : "640px"} height={deviceType !== 'pc'? "246px" : "400px"} closeModal={props.closeModal}>
            <div className='modalcontent'>
                <div className='modalTitle'><Ellipsis>Send Message to {props.data == null? '' : props.data.name}</Ellipsis></div>
                <div className='textAreaBox'><textarea placeholder='Leave a message here' /></div>
            </div>
            <SendMsgComp className='modalBtns'>
                {deviceType !== 'pc'? <Button _clickBtn={props.closeModal} className={'mobileCloseBtn'} >Close</Button> : null}
                <Button className='modalBtn' _clickBtn={_Send} width={deviceType !== 'pc'? 88 : 150} style={btnStyle} fill={true}>
                    Send
                </Button>
            </SendMsgComp>
        </Custommodal>
    )
}
export default Sendmsg;

const SendMsgComp = styled.div`
    margin-top: -2px;
    padding-top: 8px !important;
`;