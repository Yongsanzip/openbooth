import React, { Component } from 'react';
import styled from "styled-components";
import {Detailmenubar, MentordetailContentComp, Documentlist, Accesscode} from "../../../components/index";

class Mentordetail extends Component {
    constructor() {
        super();
        this.state = {
            mentorInfo: {
                img: '',
                name: 'Mentor Name',
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
                title: 'Company Co, ltd. Company Introduction_2020.05.01.pdf'
            }],
            accessModalData: {
                title: 'To enter another mentoring room'
            }
        }
    }

    render(){
        const { data } = this.props;
        return (
            <div>
                <Detailmenubar data={this.state.mentorInfo} title={this.state.mentorInfo.name}/>
                <DetailContent>
                    <MentordetailContentComp data={this.state.mentorInfo} />
                    <div>
                        <Documentlist title="Mentoring documents" list={this.state.documentList} />
                        <Accesscode data={this.state.accessModalData} btn="Button" type="small" />
                    </div>
                </DetailContent>
            </div>
        )
    }
}

const DetailContent = styled.div`
width: 100%;
margin: 40px 0 120px 0;
> div {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    &:nth-child(2){
        margin-top: 18px;
        display: flex;
        > div {
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
        }
        > div:first-child {
            width: 950px;
            margin-right: 20px;
        }
        > div:last-child {
            width: 310px;
            margin-right: 0;
        }
    }
}
`;

export default Mentordetail;