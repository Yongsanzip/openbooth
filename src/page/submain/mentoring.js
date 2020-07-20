import React, { Component } from 'react';
import styled from "styled-components";
import { Mentoringcard } from "./../../components/index"
import dummyImg from "../../assets/img/bg-dummy.png";

class Mentoring extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mentoringList: [{
                img: '',
                isLive: true,
                hashtags: [{
                    title: 'category1'
                },{
                    title: 'category2'
                }],
                title: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                mentees: [{
                    img: dummyImg,
                    name: 'The Walt Disney Campany'
                },{
                    img: dummyImg,
                    name: 'Gillette'
                },{
                    img: dummyImg,
                    name: 'Louis Vuitton'
                },{
                    img: dummyImg,
                    name: 'Ferrari'
                },{
                    img: dummyImg,
                    name: 'Johnson & Johnson'
                }],
                mentorInfo: {
                    img: dummyImg,
                    name: 'Mentor Name',
                    email: 'abcdef@ghijklmnopqr.com',
                    ltd: 'Global Co., Ltd',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.',
                    country: 'Republic of Korea',
                    phone: '+82-10-1234-1234',
                    company: 'Bank of America',
                    Department: 'Design team',
                    position: 'UI/UX designer'
                }
            },{
                img: '',
                isLive: false,
                hashtags: [{
                    title: 'category1'
                },{
                    title: 'category2'
                }],
                title: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                mentees: [{
                    img: dummyImg,
                    name: 'The Walt Disney Campany'
                },{
                    img: dummyImg,
                    name: 'Gillette'
                },{
                    img: dummyImg,
                    name: 'Louis Vuitton'
                },{
                    img: '',
                    name: 'Ferrari'
                },{
                    img: '',
                    name: 'Johnson & Johnson'
                }],
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
                }
            }]
        }
    }

    render() {
        const { mentoringList } = this.state;
        return (
            <MentoringComp>
                <div className="compTitle">Mentoring list</div>
                <div className="mentoringList">
                    {mentoringList && mentoringList.length > 0 ?
                        mentoringList.map((item, key) => {
                            return (
                                <Mentoringcard key={key} data={item} />)
                        }) : null }
                </div>
            </MentoringComp>
        )
    }
}

const MentoringComp = styled.div`
max-width: 1280px;
margin: 0 auto;
padding: 80px 0;
.compTitle {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
}
`;

export default Mentoring;
