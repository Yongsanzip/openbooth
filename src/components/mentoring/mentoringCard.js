import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import dummyImg from "../../assets/img/bg-dummy.png";

import {Hash, Accesscode, Custommodal, Img, Ellipsis} from "./../index"
import Mentorinfo from "./mentorInfo"

class MenteeItem extends Component {
    render() {
        const {src, name} = this.props;
        return (
            <MenteeComp>
                <Img src={src}></Img>
                <div className="menteeName">{name}</div>
            </MenteeComp>
        )
    }
}

const MenteeComp = styled.div`
max-width: 200px;
> * {
    display: inline-block;
    vertical-align: middle;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #999999;
    :first-child {
        width: 24px;
        height: 24px;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 8px;
        margin-right: 4px;
    }
}
`;


class Mentoringcard extends Component {
    constructor() {
        super();
        this.cardRef = React.createRef();
        this.state = {
            isShowAccessCodeModal: false
        }
    }

    componentDidMount() {
        this.cardRef.current.addEventListener('click', this._showModal);
    }
    componentWillUnmount() {
        this.cardRef.current.removeEventListener('click', this._showModal);
    }

    _showModal = (e) => {
        if(e != null) e.stopPropagation();
        this.setState({
            isShowAccessCodeModal: true
        })
    }
    _closeModal = () => {
        this.setState({
            isShowAccessCodeModal: false
        })
    }

    _onClickAccessBtn = (data) => {
        this.props._onClick(data);
        this._closeModal();
    }

    render(){
        const { isShowAccessCodeModal } = this.state;
        const { data } = this.props;
        const { _closeModal, _onClickAccessBtn } = this;
        const accessModalData = {
            title: 'Please enter the access code',
            content: 'An access code is required to enter the mentoring room.'
        }
        return (
            <Card ref={this.cardRef}>
                <Img src={dummyImg} />
                <div className="mentoringInfo">
                    <div className="status">
                        <div className={data.isLive? 'isOpen live' : 'isOpen off'}>{data.isLive? 'LIVE' : 'OFF'}</div>
                        <div className="hashes">
                            {data.hashtags && data.hashtags.length > 0 ?
                                data.hashtags.map((hashItem, key) => {
                                    return (
                                        <Hash id={1} name={hashItem.title} key={key}/>)
                                }) : null }
                        </div>
                    </div>
                    <div className="title">
                        <Ellipsis line={2}>{data.title}</Ellipsis>
                    </div>
                    <div className="mentees">
                        <div className="title">Mentees</div>
                        {data.mentees && data.mentees.length > 0 ?
                            data.mentees.map((mentee, key) => {
                                return (
                                    <MenteeItem src={mentee.img} name={mentee.name} key={key}/>)
                            }) : null }
                    </div>
                </div>
                <Mentorinfo data={data.mentorInfo} className="mentorInfo" />
                <Custommodal showModal={isShowAccessCodeModal} closeModal={_closeModal} width={480}>
                    <Accesscode data={accessModalData} btn={'Enter'} _access={()=>_onClickAccessBtn(data)} />
                </Custommodal>
            </Card>
        )
    }
}

const Card = styled.div`
width: 100%;
height: 280px;
display: flex;
margin-top: 40px;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 8px;
overflow: hidden;
> *:first-child {
    width: 360px;
    height: 280px;
}
> .mentoringInfo {
    flex: 1;
    padding-left: 40px;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    & .status {
        position: relative;
        margin-top: 24px;  
        & .isOpen {
            position: relative;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            color: #005CB9;
            padding-left: 20px;
            :before {
                content: '';
                position: absolute;
                top: 3px;
                left: 0;
                background: #005CB9;
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }
            &.off {
                color: #F58181;
                &:before {
                    background: #F58181;
                }
            }
        }
        & .hashes {
            position: absolute;
            top: -2px;
            right: 16px;
            > * {
                margin-right: 8px;
                :last-child { margin-right: 0 }
            }
        }
    }
    & .title {
        width: 400px;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #000000;
        margin-top: 10px;
    }
    & .mentees {
        > .title {
            display: block;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            color: #999999;    
            margin-top: 26px;
        }
        > * {
            display: inline-block;
            margin-top: 10px;
            width: 200px;
        }
    }
}
> :last-child {
    width: calc(440px - 64px);
}
`;

export default Mentoringcard;