import React, {Component, createRef} from 'react';
import styled from "styled-components";
import {Detailmenubar, Img, Profile, Pannel, Documentlist, Qnalist, RequestToExhibitor, Infofields, Booth, Thumblist, Tabpannel} from "../../../../components";

import dummyImg from "../../../../assets/img/bg-dummy.png";

class Companydetail extends Component {
    constructor() {
        super();
        this.state = {
            requestFormBoxRef: createRef(),
            bottomPanelRef: createRef(),
            companyInfo: {
                img: dummyImg,
                name: 'Company',
                email: 'abcdef@ghijklmnopqr.com',
                ltd: 'Global Co., Ltd',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.',
                country: 'Republic of Korea',
                phone: '+82-10-1234-1234',
                company: 'Bank of America',
                Department: 'Design team',
                position: 'UI/UX designer'
            },
            documentList: [{
                title: 'Company Co, ltd. Company Introduction_2020.04.31.pdf'
            },{
                title: 'Phasellus dignissin vitae velit.pdf'
            }],
            accessModalData: {
                title: 'To enter another mentoring room'
            },
            questionList: [{
                question: 'Company Co, ltd. Company Introduction_2020.04.31.pdf',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.'
            },{
                question: 'Phasellus dignissin vitae velit.pdf',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.'
            }],
            businessInfo: [{
                'fieldname': 'Business model',
                'value': 'B2B, B2G, B2C'
            },{
                'fieldname': 'Currnet entry area',
                'value': '동북아시아, 대한민국, 중국, 일본'
            },{
                'fieldname': 'Desired entry area',
                'value': '유럽, 북아메리카, 영국, 프랑스, 미국'
            },{
                'fieldname': 'Sell, contract condition',
                'value': '단품 판매'
            },{
                'fieldname': 'Desired investment stage',
                'value': 'Series-A'
            }],
            boothList: [{
                title: 'Amet minim mollit non deserunt ulla est sit aliqua dolor do amet sint.',
                company: {
                    name: 'The Walt Disney Company',
                    img: ''
                }
            },{
                title: 'Amet minim mollit non deserunt ulla est sit aliqua dolor do amet sint.',
                company: {
                    name: 'The Walt Disney Company',
                    img: ''
                }
            },{
                title: 'Amet minim mollit non deserunt ulla est sit aliqua dolor do amet sint.',
                company: {
                    name: 'The Walt Disney Company',
                    img: ''
                }
            },{
                title: 'Amet minim mollit non deserunt ulla est sit aliqua dolor do amet sint.',
                company: {
                    name: 'The Walt Disney Company',
                    img: ''
                }
            }],
            thumbList: [{
                src: ''
            },{
                src: ''
            },{
                src: ''
            },{
                src: ''
            },{
                src: ''
            },{
                src: ''
            },{
                src: ''
            },{
                src: ''
            }]
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this._isSubmenuTop);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._isSubmenuTop);
    }

    _isSubmenuTop = ()=> {
        const formBox = this.state.requestFormBoxRef;
        const bottomPanel = this.state.bottomPanelRef;
        if(formBox.current == null || bottomPanel.current == null) return;

        if(window.scrollY + 40 > formBox.current.parentElement.previousElementSibling.offsetTop){
            if(window.scrollY + 40 > bottomPanel.current.offsetTop - formBox.current.clientHeight) {
                formBox.current.classList.remove('fixedOnTopForm');
                formBox.current.style.position = 'absolute';
                formBox.current.style.top = bottomPanel.current.offsetTop - formBox.current.clientHeight + 'px';
            }
            else{
                formBox.current.style.position = '';
                formBox.current.style.top = '56px';
                formBox.current.classList.add('fixedOnTopForm');
            }
        }
        else{
            formBox.current.classList.remove('fixedOnTopForm');
        }
    }


    render(){
        const { data } = this.props;
        const { requestFormBoxRef, bottomPanelRef, companyInfo, questionList, businessInfo, boothList, thumbList } = this.state;
        const tabList = [{
            title: '제품/서비스명1',
            name: 'product1'
        },{
            title: '제품/서비스명21111',
            name: 'product2'
        }];
        return (
            <CompanyDetailComp>
                <Detailmenubar data={companyInfo} title={companyInfo.name} />
                <Img src={companyInfo.img} width="100%" height="800px"/>
                <div className='content'>
                    <div>
                        <div className='companyContents'>
                            <CompanyNamePannel>
                                <div style={{background: '#000'}}>img</div>
                                <Profile data={companyInfo} type='company' />
                            </CompanyNamePannel>
                            <div className='border'>
                                <Pannel title="Exhibitor description">
                                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum Phasellus sed augue ex. Vestibulum est urna.</div>
                                    <div className='video'><div/></div>
                                    <Thumblist list={thumbList} />
                                </Pannel>
                            </div>
                            <div className='border'>
                                <Tabpannel tabs={tabList}>
                                    <div className='product1 hide'>
                                        <Pannel noPadding>
                                            <div className='video'><div/></div>
                                            <div className='text'>product 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum Phasellus sed augue ex. Vestibulum est urna.</div>
                                            <Thumblist list={thumbList} />
                                        </Pannel>
                                    </div>
                                    <div className='product2 hide'>
                                        <Pannel noPadding>
                                            <div className='text'>product 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum Phasellus sed augue ex. Vestibulum est urna.</div>
                                            <div className='video'><div/></div>
                                            <Thumblist list={thumbList} />
                                        </Pannel>
                                    </div>
                                </Tabpannel>
                            </div>
                            <div className='border'>
                                <Pannel title="Business information">
                                    <Infofields list={businessInfo} />
                                </Pannel>
                            </div>
                            <div className='border'>
                                <Documentlist title="Mentoring documents" list={this.state.documentList} />
                            </div>
                            <div className='border'>
                                <Qnalist title="Frequently asked questions" list={questionList} />
                            </div>
                        </div>
                        <div className='requestBox'>
                            <div ref={requestFormBoxRef}>
                                <RequestToExhibitor/>
                            </div>
                        </div>
                    </div>
                    <div className='bottomContent' ref={bottomPanelRef}>
                        <div className='panelTitle'>Related online booth</div>
                        <div className='boothList'>
                        {boothList != null && boothList.length > 0 ?
                            boothList.map((el, key) => {
                                return (
                                    <Booth data={el} key={key} type={'sub'} />
                                )
                            }) : null
                        }
                        </div>
                    </div>
                </div>
            </CompanyDetailComp>
        )
    }
}

const CompanyNamePannel = styled.div`
width: 100%;
height: 455px;
> * {
    display: inline-block;
    vertical-align: top;
    width: 455px;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 8px;
    
    :first-child { margin-right: 40px; border: 0; }
}
`;

const CompanyDetailComp = styled.div`
width: 100%;
> div.content {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    > div {
        :first-child { display: flex; }
        & .companyContents {
            flex: 1;
            width: 950px;
            & > * {
                margin-top: 40px;
            }
        }
        & .requestBox {
            margin-top: 40px;
            width: 330px;
            > div {
                width: 310px;
                margin-left:20px;
                border: 1px solid #E9E9E9;
                box-sizing: border-box;
                border-radius: 8px;
                overflow: hidden;
            }
        }
    }
    & .bottomContent {
        padding-top: 80px;
        margin-bottom: 100px;
        & .panelTitle {
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            color: #000000;
        }
        & .boothList {
            padding-top: 40px;
            > * {
                display: inline-block;
                margin-right: 40px;
                :last-child { margin-right: 0; }
            }
        }
    }
}
.border {
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
}
.fixedOnTopForm {
    position: fixed;
    top: 56px;
    margin-top: 40px;
}
`;

export default Companydetail;