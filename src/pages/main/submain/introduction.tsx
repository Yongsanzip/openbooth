import React, {useEffect} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules";
import { getItroductionReducer } from "../../../modules/introduction/introduction";

function Introduction() {
    const dispatch = useDispatch();
    const introduction = useSelector((state: RootState) => state.introductionReducer.data);

    useEffect(()=>{
        if(introduction == null){
            dispatch(getItroductionReducer());
        }
    }, [introduction]);
    return (
        <IntroduceComp>
            <img src={introduction != null? introduction.introduction_image : null} width="100%" height="auto" alt={''} />
        </IntroduceComp>
    )
}

const IntroduceComp = styled.div`
width: 100%;
height: auto;
`;
export default Introduction;
