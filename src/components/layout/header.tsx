import React, { Component, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

import Logininfo from "./loginInfo"
import {Custommodal, Profile} from "../index";

function UserinfoModal(props) {
    return(
        <Custommodal showModal={props.showModal} closeModal={props.handleCloseModal} overlay={0} modalPosition={props.modalPosition}>
            <Profile showLogoutBtn={props.logout} />
        </Custommodal>
    )
}

function Header(props) {
    const [ isShowModal, setIsShowModal ] = useState(false);
    const [ userinfoModalPosition, setUserinfoModalPosition ] = useState({
        top: 0,
        left: 0
    });

    useEffect(() => {
        _setUserinfoModalPosition();
        window.addEventListener('resize', _setUserinfoModalPosition);
        return () => {
            window.removeEventListener('resize', _setUserinfoModalPosition);
        };
    }, []);

    const _setUserinfoModalPosition= () => {
        if(document.getElementsByName('userInfoMenu').length < 0) return;
        setUserinfoModalPosition({
            top: document.getElementsByName('userInfoMenu')[0].offsetTop + 50,
            left: document.getElementsByName('userInfoMenu')[0].offsetLeft + 32 - 480
        })
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
                <div className='logo' onClick={goMain}>
                    <svg width="68" height="24" viewBox="0 0 68 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9 24C18.4722 24 23.8 18.6274 23.8 12C23.8 5.37258 18.4722 0 11.9 0C5.32782 0 0 5.37258 0 12C0 18.6274 5.32782 24 11.9 24Z" fill="#00416B"/>
                        <path d="M57.5732 0.114286C57.0632 0.0571429 56.6099 0 56.0999 0C53.9466 0 51.9066 0.571429 50.1499 1.6C50.0932 1.65714 50.0366 1.65714 49.9799 1.71429C49.1299 2.17143 48.1666 2.4 47.1466 2.4C46.1266 2.4 45.1632 2.11429 44.3132 1.71429C44.2566 1.71429 44.1999 1.65714 44.1432 1.6C42.4999 0.628571 40.6299 0.0571429 38.5899 0C38.4766 0 38.3066 0 38.1932 0C31.6199 0 26.2932 5.37143 26.2932 12C26.2932 18.6286 31.6199 24 38.1932 24C40.4599 24 42.5566 23.3714 44.3132 22.2857C45.1632 21.8286 46.1266 21.6 47.1466 21.6C48.1666 21.6 49.1299 21.8857 49.9799 22.2857C51.7932 23.3714 53.8899 24 56.0999 24C62.6732 24 67.9999 18.6286 67.9999 12C67.9999 5.88571 63.4666 0.857143 57.5732 0.114286Z" fill="#005CB9"/>
                    </svg>
                </div>
                <Menuitem flex={1} className='menu' onClick={goMain}>
                    Online Exhibition of Third Countries with The World Bank | Bulit on Hope
                </Menuitem>
                <Menuitem onClick={_showModal} name="userInfoMenu">
                    <Logininfo/>
                </Menuitem>
            </div>
            <UserinfoModal showModal={isShowModal} handleCloseModal={_closeModal} logout={true} modalPosition={userinfoModalPosition}/>
        </Mainheader>
    )
}

const Mainheader = styled.div`
    width: 100%;
    height: 56px;
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
            line-height: 56px;
            vertical-align: middle;
            margin-right: 16px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 56px;
            color: #000000;
            letter-spacing: -0.01em;
            svg {
                height: 56px;
            }
            &.logo {
                margin-left: 8px;
                margin-right: 24px;
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
    flex: ${props => (props.flex > 0 ? props.flex : '')};
    text-align: center;
`;

export default Header;