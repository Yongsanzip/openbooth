import React from 'react';
import styled from "styled-components";
import {Button, Custommodal} from "./../index";

function Alertmodal(props) {
    return(
        <Custommodal showModal={props.showModal} closeModal={props.closeModal}>
            <AlertModalComp type={props.type}>
                <div>
                    {props.data != null ? props.data.title : ''}
                </div>
                <div>
                    {props.data != null ? props.data.contents : ''}
                </div>
                <div className={'btns'}>
                    <Button width={104} fill={true} _clickBtn={props.onClick}>Button</Button>
                </div>
            </AlertModalComp>
        </Custommodal>
    )
}

const AlertModalComp = styled.div`
    width: 100%;
    background: ${props => (props.type != null && props.type == 'dark'? '#212121': '#ffffff')};
    > div {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #999999;
        padding: 0 24px 24px 16px;
        :first-child {
            padding: 24px 24px 24px 16px;
            font-size: 18px;
            line-height: 26px;
            color: ${props => (props.type != null && props.type == 'dark'? '#E9E9E9': '#000000')};
        }
        :nth-child(2){
            min-height: 102px;
        }
        &.btns {
            text-align: right;
            border-top: 1px solid ${props => (props.type != null && props.type == 'dark'? '#333333': '#E9E9E9')};
            padding: 10px;
        }
    }
`;
export default Alertmodal;