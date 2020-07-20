import React, { Component } from 'react';
import styled from "styled-components";
import Logininfo from "./loginInfo"
// import Searchfield from "../searchfield";
import {Custommodal, Profile} from "../index";
import { Link } from 'react-router-dom';


class UserinfoModal extends Component {
    constructor() {
        super();
    }

    render(){
        const { data, showModal, handleCloseModal, logout, modalPosition } = this.props;

        return(
            <Custommodal showModal={showModal} closeModal={handleCloseModal} overlay={0} modalPosition={modalPosition}>
                <Profile data={data} showLogoutBtn={logout} />
            </Custommodal>
        )
    }
}

class Header extends Component {
    constructor() {
        super()
        this.state = {
            isShowModal: false,
            UserinfoModalPosition: {
                top: 0,
                left: 0
            }
        }
    }

    componentDidMount() {
        this._setUserinfoModalPosition();
        window.addEventListener('resize', this._setUserinfoModalPosition);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this._setUserinfoModalPosition);
    }

    _setUserinfoModalPosition= () => {
        if(document.getElementsByName('userInfoMenu').length < 0) return;
        this.setState({
            UserinfoModalPosition: {
                top: document.getElementsByName('userInfoMenu')[0].offsetTop + 50,
                left: document.getElementsByName('userInfoMenu')[0].offsetLeft + 32 - 480
            }
        })
    }

    _showModal = ()=> {
        this.setState({
            isShowModal: true
        })
    }

    _closeModal = ()=> {
        this.setState({
            isShowModal: false
        })
    }

    render(){
        const { isLogined, logout, userinfo } = this.props;
        const { isShowModal, UserinfoModalPosition } = this.state;
        const { _showModal, _closeModal } = this;
        return (
            <Mainheader>
                <div className='header'>
                    <div className='logo'>
                        <Link to='/'>
                            <svg width="68" height="24" viewBox="0 0 68 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9 24C18.4722 24 23.8 18.6274 23.8 12C23.8 5.37258 18.4722 0 11.9 0C5.32782 0 0 5.37258 0 12C0 18.6274 5.32782 24 11.9 24Z" fill="#00416B"/>
                                <path d="M57.5732 0.114286C57.0632 0.0571429 56.6099 0 56.0999 0C53.9466 0 51.9066 0.571429 50.1499 1.6C50.0932 1.65714 50.0366 1.65714 49.9799 1.71429C49.1299 2.17143 48.1666 2.4 47.1466 2.4C46.1266 2.4 45.1632 2.11429 44.3132 1.71429C44.2566 1.71429 44.1999 1.65714 44.1432 1.6C42.4999 0.628571 40.6299 0.0571429 38.5899 0C38.4766 0 38.3066 0 38.1932 0C31.6199 0 26.2932 5.37143 26.2932 12C26.2932 18.6286 31.6199 24 38.1932 24C40.4599 24 42.5566 23.3714 44.3132 22.2857C45.1632 21.8286 46.1266 21.6 47.1466 21.6C48.1666 21.6 49.1299 21.8857 49.9799 22.2857C51.7932 23.3714 53.8899 24 56.0999 24C62.6732 24 67.9999 18.6286 67.9999 12C67.9999 5.88571 63.4666 0.857143 57.5732 0.114286Z" fill="#005CB9"/>
                            </svg>
                        </Link>
                    </div>
                    <Menuitem flex={1} className='menu'>
                        <Link to='/'>Online Exhibition of Third Countries with The World Bank | Bulit on Hope</Link>
                    </Menuitem>
                    <Menuitem onClick={_showModal} name="userInfoMenu">
                        <Logininfo isLogined={isLogined}/>
                    </Menuitem>
                </div>
                <UserinfoModal data={userinfo} showModal={isShowModal} handleCloseModal={_closeModal} logout={logout} modalPosition={UserinfoModalPosition}/>
            </Mainheader>
        )
    }
}

const Mainheader = styled.div`
    width: 100%;
    height: 56px;
    background: #ffffff;
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
            font-weight: normal;
            font-size: 14px;
            color: #999999;
            svg {
                height: 56px;
            }
            &.logo {
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