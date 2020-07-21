import React, { Component } from 'react';
import styled from "styled-components";


import {
    Tabpannel,
    Pannel,
    Infofields,
    Thumblist,
    Documentlist,
    Boardlist,
    Namecard,
    Booth, Profile, Sendmsg, Custommodal
} from './../../components/index'
import dummyImg from "./../../assets/img/bg-dummy.png"

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabList: [{
                title: 'Exhibition details',
                name: 'details'
            }, {
                title: 'Registered visitor',
                name: 'visitors'
            }],
            exhibitInfo: [{
                'fieldname': 'name',
                'value': 'Online Exhibition of Thired Countries with The World Bank | Bulit on Hope'
            },{
                'fieldname': 'Exhibits',
                'value': 'hashes'
            },{
                'fieldname': 'Date',
                'value': 'September 15th ~ September 21th, 2020'
            },{
                'fieldname': 'Hosted',
                'value': 'The World Bank'
            },{
                'fieldname': 'Organized',
                'value': 'Bank of America, Ministry of Science and ICT of Korea'
            },{
                'fieldname': 'Operated',
                'value': 'Openbooth'
            }],
            thumbList: [{
                src: dummyImg
            },{
                src: dummyImg
            },{
                src: dummyImg
            },{
                src: dummyImg
            },{
                src: dummyImg
            }],
            documentList: [{
                title: 'Company Co, ltd. Company Introduction_2020.04.31.pdf'
            },{
                title: 'Phasellus dignissim vitae velit.pdf'
            },{
                title: 'Nam vel bibendum.pdf'
            }],
            boardList: [{
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.',
                date: '2020.09.12',
                name: 'Press name'
            },{
                title: 'In faucibus est ipsum, a cursus mi commodo sit amet?',
                date: '2020.09.12',
                name: 'Press name'
            },{
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.',
                date: '2020.09.12',
                name: 'Press name'
            },{
                title: 'Maecenas accumsan sem consectetu?',
                date: '2020.09.12',
                name: 'Press name'
            }],
            visitors: [{
                img: '',
                name: 'Username',
                email: 'sinhyeok@openbooth.net',
                phone: 'Company or affiliation'
            },{
                img: '',
                name: 'Username',
                email: '',
                phone: ''
            },{
                img: '',
                name: 'Username',
                email: '',
                phone: ''
            },{
                img: '',
                name: 'Username',
                email: '',
                phone: ''
            },{
                img: '',
                name: 'Username',
                email: '',
                phone: ''
            }],
            showSendMsgModal: false,
            modalData: {
                name: 'sajflkasf'
            }
        }
    }

    _showSendMsgModal = () => {
        this.setState({
            showSendMsgModal: true
        })
    }
    _closeSendMsgModal = () => {
        this.setState({
            showSendMsgModal: false
        })
    }
    _sentMsg = () => {
        console.log("_sentMsg");
        this._closeSendMsgModal();
    }

    render() {
        const { _showSendMsgModal, _closeSendMsgModal, _sentMsg } = this;
        const { tabList, exhibitInfo, thumbList, documentList, boardList, visitors, showSendMsgModal, modalData } = this.state;
        const width = 840;

        return (
            <div>
                <DescriptionComp width={width}>
                    <div>
                        <img className='posterImg' src={dummyImg} />
                        <div className='title'>Online Exhibition of Third Countries with The World Bank | Bulit on Hope</div>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat
                        <div className='sendMailBtn' onClick={_showSendMsgModal}>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V4L8.94 8.34C9.59 8.75 10.41 8.75 11.06 8.34L18 4V13C18 13.55 17.55 14 17 14ZM10 7L2 2H18L10 7Z" fill="#999999"/>
                            </svg>
                        </div>
                    </div>
                </DescriptionComp>
                <TabpanelComp width={width}>
                    <Tabpannel tabs={tabList} width={width} titleBg={'#ffffff'} contentBg={'#E5E5E5'}>
                        <div className='tabContent details hide'>
                            <div className='border'>
                                <Pannel title="Exhibition information">
                                    <Infofields list={exhibitInfo} fieldWidth={110}/>
                                </Pannel>
                            </div>
                            <div className='border'>
                                <Pannel title="Exhibition introduction">
                                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum Phasellus sed augue ex. Vestibulum est urna.</div>
                                    <div className='video'><div/></div>
                                    <Thumblist list={thumbList} size={{width: 144, height: 144}} marginRight={18}>
                                    </Thumblist>
                                </Pannel>
                            </div>
                            <div className='border'>
                                <Pannel title="Press release">
                                    <Boardlist list={boardList}/>
                                </Pannel>
                            </div>
                            <div className='border'>
                                <Documentlist title="Exhibition documents" list={documentList} />
                            </div>
                        </div>
                        <div className='tabContent visitors hide'>
                            <div className='visitorCount'>
                                Number of visitors : {visitors.length}
                            </div>
                            <div className='visitorList'>
                                {visitors != null && visitors.length > 0 ?
                                    visitors.map((el, key) => {
                                        return (
                                            <div key={key}><Namecard data={el} showMoreinfoBtn={true} /></div>
                                        )
                                    }) : null
                                }
                            </div>
                        </div>
                    </Tabpannel>
                </TabpanelComp>
                <Sendmsg showModal={showSendMsgModal} data={modalData} closeModal={_closeSendMsgModal} sentMsgToMentor={_sentMsg} />
            </div>
        )
    }
}
const TabpanelComp = styled.div`
.tabContent {
    background: #f7f7f9;
    > * {
        width: ${props => (props.width != null ? props.width+'px;' : '100%')};
        margin: 0 auto;
    }
    & .border {
        padding-top: 40px;
        > * {
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
            overflow: hidden;
        }
        :last-child { padding-bottom: 120px; }        
        :last-child { padding-bottom: 120px; }        
    }
    & .visitors {
        & > * {
            padding-top: 40px;
            :last-child { padding-bottom: 80px; }
        }
        & .visitorCount{
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: #999999;
        }
        & .visitorList {
             > * {
                display: inline-block;
                width: 400px;
                margin-right: 40px;
                margin-bottom: 40px;
                :nth-child(2n) { margin-right: 0; }
             }
        }
    }
}
`;
const DescriptionComp = styled.div`
width: 100%;
background: #ffffff;
> div {
    position: relative;
    max-width: ${props => (props.width != null ? props.width+'px;' : '100%')};
    margin: 0 auto;
    padding: 40px 0 80px 0;
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #999999;
    & .posterImg {
        width: 176px;
    }
    & .title {
        font-weight: bold;
        font-size: 18px;
        color: #000000;
        margin-top: 32px;
        margin-bottom: 20px;
    }
    & .sendMailBtn {
        position: absolute;
        top: 40px;
        right: 0;
    }
}
`;

export default Detail;
