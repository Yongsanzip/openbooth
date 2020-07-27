import React, {Component, useEffect} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules";
import { getItroductionReducer } from "../../../modules/introduction/introduction";
import {Img} from "../../../components";

import dummyImg from "../../../assets/img/bg-dummy.png";

function Introduction(props) {
    const dispatch = useDispatch();
    let introduction = useSelector((state: RootState) => state.introductionReducer.data);
    if(introduction == null){
        introduction = {};
        dispatch(getItroductionReducer());
    }
    console.log("introduction::", introduction);
    return (
        <IntroduceComp>
            <IntroduceTitle src={introduction.introduction_image}>
                <div className='table'>
                    <div className='cell'>
                        <h2>“Built on Hope”</h2>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi. Praesent auctor nisl ut luctus mollis. Aliquam elementum nunc non libero sollicitudin, sit amet tempus tortor commodo. Mauris lectus lectus, congue quis erat sit amet, condimentum mattis erat.
                        <h2>D-34</h2>
                    </div>
                </div>
            </IntroduceTitle>
            <div className="compArea summary">
                <div className='title'>
                    111
                </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Nunc justo risus, ultrices in ultricies eget, dignissim et velit. Proin elementum ante eget metus rhoncus vulputate. Praesent tempor quam fermentum ipsum tristique placerat. Suspendisse ac laoreet arcu. Sed vitae lacinia felis, vel ullamcorper magna. Donec sagittis sem at dolor varius, et dapibus tellus placerat. In semper, sem vitae cursus pulvinar, libero odio condimentum ipsum, non consequat mi diam eu dolor.
            </div>
            <div className="compArea">
                <div className="parallel">
                    <Img src={dummyImg} />
                    <div className="description">
                        <div className="title-large">
                            The World Bank :
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Nunc justo risus, ultrices in ultricies eget, dignissim et velit.
                        <br/><br/>
                        Proin elementum ante eget metus rhoncus vulputate. Praesent tempor quam fermentum ipsum tristique placerat. Suspendisse ac laoreet arcu. Sed vitae lacinia felis, vel ullamcorper magna. Donec sagittis sem at dolor varius, et dapibus tellus placerat. In semper, sem vitae cursus pulvinar, libero odio condimentum ipsum, non consequat mi diam eu dolor.
                    </div>
                </div>
            </div>
            <div className="compArea">
                <div className='title'>
                    The mentor
                </div>
                <div className="parallel">
                    <div className="mentor">
                        <Img src={dummyImg} />
                        <div className='title-small'>Jane Cooper</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis.
                    </div>
                    <div className="mentor">
                        <Img src={dummyImg} />
                        <div className='title-small'>Jane Cooper</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Nunc justo risus, ultrices in ultricies eget.
                    </div>
                    <div className="mentor">
                        <Img src={dummyImg} />
                        <div className='title-small'>Jane Cooper</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum Phasellus sed augue ex. Vestibulum est urna.
                    </div>
                </div>
            </div>
            <div className="faq">
                <div className="compArea summary">
                    <div className="title-large">
                        FAQ
                    </div>
                    <div className="faqComp">
                        <div className="title-small">
                            1. Online Exhibition
                        </div>
                        <div className="answers">
                            <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis.</div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Nunc justo risus, ultrices in ultricies eget, dignissim et velit. Proin elementum ante eget metus rhoncus vulputate. Praesent tempor quam fermentum ipsum tristique placerat.
                        </div>
                        <div className="answers">
                            <div className="answer">Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis.</div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Nunc justo risus, ultrices in ultricies eget, dignissim et velit.
                        </div>
                        <div className="answers">
                            <div className="answer">Curabitur vel lacus quam. Nulla ut arcu sit amet risus ultricies aliquet sed eget turpis.</div>
                            Ut cursus erat quis posuere tempor. Phasellus vitae rutrum dolor. Praesent sit amet aliquet sem. Aliquam semper turpis elit. Mauris laoreet, metus eu semper volutpat, felis ligula tincidunt purus, a eleifend elit nunc et sapien. Curabitur lacinia bibendum justo. Integer gravida pulvinar mauris.
                        </div>
                    </div>
                    <div className="faqComp">
                        <div className="title-small">
                            2. Mentoring
                        </div>
                        <div className="answers">
                            <div className="answer">Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis.</div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna, posuere non pharetra quis, viverra quis turpis. Nunc justo risus, ultrices in ultricies eget, dignissim et velit.
                        </div>
                        <div className="answers">
                            <div className="answer">Curabitur vel lacus quam. Nulla ut arcu sit amet risus ultricies aliquet sed eget turpis.</div>
                            Ut cursus erat quis posuere tempor. Phasellus vitae rutrum dolor. Praesent sit amet aliquet sem. Aliquam semper turpis elit. Mauris laoreet, metus eu semper volutpat, felis ligula tincidunt purus, a eleifend elit nunc et sapien. Curabitur lacinia bibendum justo. Integer gravida pulvinar mauris.
                        </div>
                    </div>
                    <div className="faqComp">
                        <div className="title-small">
                            3. ETC
                        </div>
                        <div className="answers">
                            <div className="answer">Sed auctor egestas ipsum, vel blandit mauris mattis in</div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue ex. Vestibulum est urna.
                        </div>
                        <div className="answers">
                            <div className="answer">Integer convallis eu justo id efficitur. Mauris ultricies sit amet sem eget scelerisque.</div>
                            Praesent laoreet nisi sed fringilla tincidunt. Vestibulum nec orci commodo, placerat eros eu, gravida diam. Fusce in orci non nibh gravida suscipit.
                        </div>
                    </div>
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
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    h2 {
        font-weight: 800;
        font-size: 64px;
        line-height: 72px;
        margin: 88px 0;
        :first-child { margin-top: 0 }
        :last-child { margin-bottom: 0 }
    }
}
`;

const IntroduceComp = styled.div`
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
        font-size: 64px;
        line-height: 72px;
        color: #333333;
    }
    & .parallel {
        display: flex;
        & > *:first-child {
            width: 510px;
            // height: 364px;
            margin-right: 40px;
        }
        & .description {
            width: 550px;
        }
        & .mentor {
            flex: 1;
            margin-right: 40px;
            :last-child { margin-right: 0 }
            > *:first-child {
                width: 400px;
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
