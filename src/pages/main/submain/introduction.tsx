import React, {Component, useEffect} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules";
import { getItroductionReducer } from "../../../modules/introduction/introduction";
import {Img} from "../../../components";
import {textLineBreak} from "../../../common/common";

import dummyImg from "../../../assets/img/bg-dummy.png";
import dummyImg2 from "../../../assets/img/2.jpg";

function Introduction(props) {
    const dispatch = useDispatch();
    let introduction = useSelector((state: RootState) => state.introductionReducer.data);
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    if(introduction == null){
        introduction = {};
        dispatch(getItroductionReducer());
    }
    console.log("introduction::", introduction);
    return (
        <IntroduceComp>
            <IntroduceTitle src={introduction.introduction_image}>
                <div>
                    <h2>{languageData==null || languageData.introduction == null? '' : languageData.introduction.title}</h2>
                    {languageData==null || languageData.introduction == null? '' : textLineBreak(languageData.introduction.title_description)}
                    <h2>{languageData==null || languageData.introduction == null? '' : languageData.introduction.dday}</h2>
                </div>
            </IntroduceTitle>
            <div className="compArea summary">
                <div className='title'>
                    {languageData==null || languageData.introduction == null? '' : languageData.introduction.summaryTitle}
                </div>
                {languageData==null || languageData.introduction == null? '' : textLineBreak(languageData.introduction.summary)}
            </div>
            <div className="compArea">
                <div className="parallel verticalMiddle">
                    {/*<Img src={dummyImg2} widthFull={true} />*/}
                    <img src={dummyImg2} width={510} height={560} />
                    <div className="description">
                        <div className="title-large">
                            {languageData==null || languageData.introduction == null? '' : textLineBreak(languageData.introduction.theWorldBankTitle)}
                        </div>
                        {languageData==null || languageData.introduction == null? '' : textLineBreak(languageData.introduction.theWorldBank)}
                    </div>
                </div>
            </div>
            <div className="compArea">
                <div className='title'>
                    {languageData==null || languageData.introduction == null? '' : languageData.introduction.mentorTitle}
                </div>
                <div className="parallel">
                    {languageData==null || languageData.introduction == null? '' :
                        languageData.introduction.mentors.map((item, key)=>{
                            return <div className="mentor" key={key}>
                                <Img src={dummyImg} />
                                <div className='title-small'>{item.name}</div>
                                {textLineBreak(item.content)}
                            </div>;
                        })}
                </div>
            </div>
            <div className="faq">
                <div className="compArea summary">
                    <div className="title-large">
                        {languageData==null || languageData.introduction == null? '' : languageData.introduction.faqTitle}
                    </div>
                    {languageData==null || languageData.introduction == null? '' :
                        languageData.introduction.faqList.map((item, key)=>{
                            return <div className="faqComp" key={key}>
                                <div className="title-small">
                                    {item.title}
                                </div>
                                {item.list != null && item.list.length > 0?
                                    item.list.map((qItem, key) => {
                                        return <div className="answers" key={key}>
                                            <div className="answer">{qItem.question}</div>
                                            {textLineBreak(qItem.answer)}
                                        </div>
                                    })
                                    : null
                                }
                            </div>;
                        })}
                </div>
            </div>
        </IntroduceComp>
    )
}

interface IntroduceTitleProps {
    src: any
}
const IntroduceTitle = styled.div`
position: relative;
height: 920px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(props: IntroduceTitleProps) => (props.src != null ? props.src : '')});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
> div {
    padding-top: 200px;
    max-width: 840px;
    margin: 0 auto;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    h2 {
        font-weight: 800;
        font-size: 64px;
        line-height: 72px;
        :first-child { margin-top: 0; margin-bottom: 62px }
        :last-child { margin-top: 90px; margin-bottom: 0; }
    }
}
.table {
    display: table;
    width: 840px;
    height: 100%;
    margin: 0 auto;
}
.cell {
    display: table-cell;
    vertical-align: middle;
    
    margin: 0 auto;
}
`;

interface IntroductionCompProps {
    verticalMiddle: any;
}
const IntroduceComp = styled.div`
background: #f7f7f9;
.compArea {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto 200px auto;
    
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #555555;

    :last-child { padding-bottom: 200px; margin-bottom: 0; }
    &.summary {
        padding-top: 120px;
        margin-top: 0;
    }
    & .title {
        font-weight: 800;
        font-size: 24px;
        line-height: 32px;
        color: #333333;
        margin-bottom: 40px;
    }
    & .title-large {
        font-weight: 800;
        font-weight: 800;
        font-size: 64px;
        line-height: 72px;
        color: #333333;
        margin-bottom: 48px;
    }
    & .parallel {
        > * {
            display: inline-block;
            vertical-align: middle;
        }
        &.verticalMiddle {
            align-items: center;
        }
        & > *:first-child {
            width: 100%;
            max-width: 550px;
            // height: 364px;
            padding-right: 40px;
        }
        & .description {
            max-width: 550px;
        }
        & .mentor {
            vertical-align: top;
            max-width: 400px;
            margin-right: 40px;
            :last-child { margin-right: 0 }
            > *:first-child {
                max-width: 400px;
                height: 560px;
            }
        }
    }
    & .title-small {
        font-weight: 800;
        font-size: 32px;
        line-height: 40px;
        color: #333333;
        margin: 32px 0 16px 0;
    }
}
.faq {
    background: #333333;
    color: #FFFFFF;
    
    .compArea, .title-large, .title-small {
        color: #FFFFFF;
    }
    .title-small {
        margin-top: 80px;
        margin-bottom: 0;
    }
    
    .answers {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 48px;
        .answer {
            font-weight: 800;
            font-size: 24px;
            line-height: 32px;
            color: #FFFFFF;
            margin-bottom: 8px;
        }
    }
}
`;
export default Introduction;
