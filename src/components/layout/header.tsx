import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

import Logininfo from "./loginInfo"
import {Custommodal, Profile} from "../index";
import {isMobileSize} from "../../common/common";

function UserinfoModal(props) {
    return(
        <Custommodal showModal={props.showModal} closeModal={props.handleCloseModal} overlay={0} modalPosition={props.modalPosition}>
            <Profile showLogoutBtn={props.logout} isMobile={props.isMobile} />
        </Custommodal>
    )
}

function Header(props) {
    const [ isShowModal, setIsShowModal ] = useState(false);
    const [ userinfoModalPosition, setUserinfoModalPosition ] = useState({
        top: 0,
        left: 0
    });
    console.log("userinfoModalPosition::", userinfoModalPosition);
    const [deviceType, setDeviceType] = useState('deskTop');
    const _setDeviceType = () => {
        if(isMobileSize()){
            setDeviceType('mobile');
        }
        else{
            setDeviceType('deskTop');
        }
    }

    useEffect(() => {
        _setUserinfoModalPosition();
        window.addEventListener('resize', _setUserinfoModalPosition);
        return () => {
            window.removeEventListener('resize', _setUserinfoModalPosition);
        };
    }, []);

    const _setUserinfoModalPosition= () => {
        _setDeviceType();
        let iconEl:any;
        if(document.getElementsByClassName('userInfoMenuIcon').length > 0){
            iconEl = document.getElementsByClassName('userInfoMenuIcon')[0];
            console.log(deviceType, iconEl.offsetTop, iconEl.offsetLeft);
            if(isMobileSize()){
                setUserinfoModalPosition({
                    top: iconEl.offsetTop + 50,
                    left: iconEl.offsetLeft - 280 - 10
                })
            }
            else{
                setUserinfoModalPosition({
                    top: iconEl.offsetTop + 50,
                    left: iconEl.offsetLeft + 32 - 480
                })
            }
        }
    }

    const _showModal = ()=> {
        setIsShowModal(true);
    }

    const _closeModal = ()=> {
        setIsShowModal(false);
    }

    const history = useHistory();
    const goMain = ()=> {
        history.push("/main");
    }

    return (
        <Mainheader>
            <div className='header'>
                <div className={'logo'} onClick={goMain}>
                    {deviceType == 'mobile'?
                        <svg width="52" height="18" viewBox="0 0 52 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#00416B"/>
                            <path d="M43.5429 0.0857143C43.1572 0.0428571 42.8143 0 42.4286 0C40.8 0 39.2572 0.428571 37.9286 1.2C37.8857 1.24286 37.8429 1.24286 37.8 1.28571C37.1572 1.62857 36.4286 1.8 35.6572 1.8C34.8857 1.8 34.1572 1.58571 33.5143 1.28571C33.4715 1.28571 33.4286 1.24286 33.3857 1.2C32.1429 0.471429 30.7286 0.0428571 29.1857 0C29.1 0 28.9715 0 28.8857 0C23.9143 0 19.8857 4.02857 19.8857 9C19.8857 13.9714 23.9143 18 28.8857 18C30.6 18 32.1857 17.5286 33.5143 16.7143C34.1572 16.3714 34.8857 16.2 35.6572 16.2C36.4286 16.2 37.1572 16.4143 37.8 16.7143C39.1715 17.5286 40.7572 18 42.4286 18C47.4 18 51.4286 13.9714 51.4286 9C51.4286 4.41429 48 0.642857 43.5429 0.0857143Z" fill="#005CB9"/>
                        </svg>
                        :
                        <svg width="68" height="24" viewBox="0 0 68 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9 24C18.4722 24 23.8 18.6274 23.8 12C23.8 5.37258 18.4722 0 11.9 0C5.32782 0 0 5.37258 0 12C0 18.6274 5.32782 24 11.9 24Z" fill="#00416B"/>
                            <path d="M57.5732 0.114286C57.0632 0.0571429 56.6099 0 56.0999 0C53.9466 0 51.9066 0.571429 50.1499 1.6C50.0932 1.65714 50.0366 1.65714 49.9799 1.71429C49.1299 2.17143 48.1666 2.4 47.1466 2.4C46.1266 2.4 45.1632 2.11429 44.3132 1.71429C44.2566 1.71429 44.1999 1.65714 44.1432 1.6C42.4999 0.628571 40.6299 0.0571429 38.5899 0C38.4766 0 38.3066 0 38.1932 0C31.6199 0 26.2932 5.37143 26.2932 12C26.2932 18.6286 31.6199 24 38.1932 24C40.4599 24 42.5566 23.3714 44.3132 22.2857C45.1632 21.8286 46.1266 21.6 47.1466 21.6C48.1666 21.6 49.1299 21.8857 49.9799 22.2857C51.7932 23.3714 53.8899 24 56.0999 24C62.6732 24 67.9999 18.6286 67.9999 12C67.9999 5.88571 63.4666 0.857143 57.5732 0.114286Z" fill="#005CB9"/>
                        </svg>
                    }
                </div>
                <div className='title' onClick={goMain}>
                    <div>Online Exhibition of Third Countries with The World Bank | Bulit on Hope</div>
                </div>
                <div onClick={_showModal}>
                    <Logininfo/>
                </div>
            </div>
            <UserinfoModal showModal={isShowModal} handleCloseModal={_closeModal} logout={true} modalPosition={userinfoModalPosition} isMobile={deviceType == 'mobile'}/>
        </Mainheader>
    )
}

const Mainheader = styled.div`
    width: 100%;
    height: 56px;
    ${({theme}) => theme.media.mobile`
    height: 40px;
    `}
    background: #ffffff;
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    .header {
        display: flex;
        max-width: 1280px;
        height: inherit;
        margin: 0 auto;
        a {
            color: inherit;
            text-decoration: none;
        }
        > div {
            :first-child { flex: 1 }
            line-height: 56px;
            ${({theme}) => theme.media.mobile`
            line-height: 40px;
            `}
            vertical-align: middle;
            margin-right: 16px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            color: #000000;
            letter-spacing: -0.01em;
            svg {
                height: 56px;
                ${({theme}) => theme.media.mobile`
                height: 40px;
                `}
            }
            &.logo {
                margin-right: 24px;
                ${({theme}) => theme.media.mobile`
                margin-left: 12px;
                margin-right: 0;
                `}
            }
            &.title {
                font-weight: bold;
                font-size: 16px;
                color: #000000;
                position: absolute;
                width: 100%;
                top: 0;
                left: 0;
                > * {
                    margin: 0 auto;
                    width: fit-content;
                }
            }
            &.menu {
                font-weight: bold;
                font-size: 16px;
                color: #000000;
            }
        }
        > div:last-child {
            margin-right: 0;
        }
    }
`;


const Menuitem = styled.div`
    flex: ${(props:any) => (props.flex != null && props.flex > 0 ? props.flex : '')};
    text-align: center;
`;

export default Header;