import React, { Component } from 'react';
import styled from "styled-components";
import { Route } from "react-router-dom";

import { Mentoringcard } from "./../../../components"
import dummyImg from "../../../assets/img/bg-dummy.png";
import Mentordetail from "./detail/mentorDetail";

function Mentoring(props){
     const mentoringList = [{
        id: 1,
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
            department: 'Design team',
            position: 'UI/UX designer'
        }
    },{
        id: 2,
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
            department: 'Design team',
            position: 'UI/UX designer'
        }
    }];

    const _onClickMentoringCard = (data) => {
        if(props._setSelectedMentor != null) props._setSelectedMentor(data);
    }

    return (
        <div>
            <MentoringComp>
                <div className="compTitle">Mentoring list</div>
                <div className="mentoringList">
                    {mentoringList && mentoringList.length > 0 ?
                        mentoringList.map((item, key) => {
                            return (
                                <Mentoringcard key={key} data={item} _onClick={_onClickMentoringCard} />)
                        }) : null }
                </div>
            </MentoringComp>
        </div>
    )
}

const MentoringComp = styled.div`
max-width: 1280px;
margin: 0 auto;
padding: 80px 0;
.compTitle {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    
    color: #000000;
}
.mentoringList {
    > * {
        transition: transform 0.5s 0s ease, box-shadow 0.3s 0s ease-in-out;
        transform: translatey(0);
        &:hover {
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
            transform: translatey(-4px);
        }
    }
}
`;

export default Mentoring;
