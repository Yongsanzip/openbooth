import React, { Component } from 'react';
import styled from "styled-components";


import {Tabpannel, Pannel, Infofields, Thumblist, Documentlist} from './../../components/index'
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
            }]
        }
    }

    render() {
        const { tabList, exhibitInfo, thumbList, documentList } = this.state;
        const width = 840;

        return (
            <div>
                <DescriptionComp width={width}>
                    <div>
                        <img className='posterImg' src={dummyImg} />
                        <div className='title'>Online Exhibition of Third Countries with The World Bank | Bulit on Hope</div>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat
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
                                    <Infofields list={exhibitInfo} fieldWidth={110}/>
                                </Pannel>
                            </div>
                            <div className='border'>
                                <Documentlist title="Exhibition documents" list={documentList} />
                            </div>
                        </div>
                        <div className='tabContent visitors hide'>
                            visitors list
                        </div>
                    </Tabpannel>
                </TabpanelComp>
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
}
`;
const DescriptionComp = styled.div`
width: 100%;
background: #ffffff;
> div {
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
}
`;

export default Detail;
