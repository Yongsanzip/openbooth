import React  from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import {RootState} from "../../../modules";

import { Mentoringcard } from "./../../../components"

function Mentoring(props){
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
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
            img: "https://picsum.photos/400/400",
            name: 'The Walt Disney Campany'
        },{
            img: "https://picsum.photos/400/400",
            name: 'Gillette'
        },{
            img: "https://picsum.photos/400/400",
            name: 'Louis Vuitton'
        },{
            img: "https://picsum.photos/400/400",
            name: 'Ferrari'
        },{
            img: "https://picsum.photos/400/400",
            name: 'Johnson & Johnson'
        }],
        mentorInfo: {
            img: "https://picsum.photos/400/400",
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
            img: "https://picsum.photos/400/400",
            name: 'The Walt Disney Campany'
        },{
            img: "https://picsum.photos/400/400",
            name: 'Gillette'
        },{
            img: "https://picsum.photos/400/400",
            name: 'Louis Vuitton'
        },{
            img: "https://picsum.photos/400/400",
            name: 'Ferrari'
        },{
            img: "https://picsum.photos/400/400",
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
    };

    return (
        <div>
            <MentoringComp>
                <div className="compTitle">{languageData.mentoringListTitle}</div>
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
${({theme}) => theme.media.desktop`
padding: 80px 0;
min-width: 1090px;
overflow: auto
`}
${({theme}) => theme.media.mobile`
padding: 0;
min-width: auto;
`}
.compTitle {
    ${({theme}) => theme.media.mobile`
        display: none;
    `}
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    
    color: #000000;
}
.mentoringList {
    ${({theme}) => theme.media.mobile`
    padding: 0 20px;
    `}
    > * {
        transition: transform 0.5s 0s ease, box-shadow 0.3s 0s ease-in-out;
        transform: translatey(0);
        &:hover {
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
            transform: translatey(-4px);
        }
        :last-child { margin-bottom: 40px; }
    }
}
`;

export default Mentoring;
