import React, {Component, useEffect, useState} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../../../modules";
import {Detailmenubar, MentordetailContentComp, Documentlist, Accesscode} from "../../../../components";
import {isMobileSize} from "../../../../common/common";

function Mentordetail(props){
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const [deviceType, setDeviceType] = useState('deskTop');
    const _setDeviceType = () => {
        if(isMobileSize()){
            setDeviceType('mobile');
        }
        else{
            setDeviceType('deskTop');
        }
    }

    useEffect(()=>{
        _setDeviceType();
        window.addEventListener('resize', _setDeviceType);

        return function cleanup() {
            window.removeEventListener('resize', _setDeviceType);
        };
    }, []);

    const mentorData = {
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
        },
        documentList: [{
            file_name: 'Company Co, ltd. Company Introduction_2020.04.31.pdf'
        },{
            file_name: 'Company Co, ltd. Company Introduction_2020.05.01.pdf'
        }],
        accessModalData: {
            title: languageData.accessMentoringRoom
        }
    }

    return (
        <div>
            <Detailmenubar data={mentorData.mentorInfo} title={mentorData.mentorInfo.name}/>
            <DetailContent>
                <MentordetailContentComp data={mentorData.mentorInfo} isMobile={deviceType == 'mobile'} />
                <div>
                    <Documentlist title={languageData.mentoringDocument} list={mentorData.documentList} isMobile={deviceType == 'mobile'} />
                    <Accesscode data={mentorData.accessModalData} btn={languageData.enter} type="small" isMobile={deviceType == 'mobile'} />
                </div>
            </DetailContent>
        </div>
    )
}

const DetailContent = styled.div`
background: #f7f7f9;
width: 100%;
${({theme}) => theme.media.desktop`
padding-top: 40px;
padding-bottom: 120px;
`}
${({theme}) => theme.media.mobile`
padding-top: 0;
padding-bottom: 40px;
`}
> div {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    &:nth-child(2){
        display: flex;
        ${({theme}) => theme.media.desktop`
        margin-top: 18px;
        `}
        ${({theme}) => theme.media.mobile`
        margin-top: 16px;
        flex-direction: column;
        padding: 0 20px;
        `}
        > div {
            border: 1px solid #E9E9E9;
            box-sizing: border-box;
            border-radius: 8px;
        }
        > div:first-child {
            margin-right: 20px;
            ${({theme}) => theme.media.desktop`
            width: 950px;
            `}
            ${({theme}) => theme.media.mobile`
            width: 100%;
            margin-top: 16px;
            flex-direction: column;
            `}
        }
        > div:last-child {
            margin-right: 0;
            ${({theme}) => theme.media.desktop`
            width: 310px;
            `}
            ${({theme}) => theme.media.mobile`
            width: 100%;
            margin-top: 16px;
            `}
        }
    }
}
`;

export default Mentordetail;