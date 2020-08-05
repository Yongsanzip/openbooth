import React, {Component, useEffect} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules";
import { getItroductionReducer } from "../../../modules/introduction/introduction";

function Introduction(props) {
    const dispatch = useDispatch();
    let introduction = useSelector((state: RootState) => state.introductionReducer.data);
    if(introduction == null){
        introduction = {};
        dispatch(getItroductionReducer());
    }
    return (
        <IntroduceComp>
            <img src={introduction.introduction_image} width="100%" height="auto" />
        </IntroduceComp>
    )
}

const IntroduceComp = styled.div`
width: 100%;
height: auto;
`;
export default Introduction;
