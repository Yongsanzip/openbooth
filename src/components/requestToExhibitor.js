import React, {Component, createRef} from 'react';
import styled from "styled-components";
import { Inputfield, Checkboxfield, Button } from "./index";

class RequestToExhibitor extends Component {
    constructor() {
        super();
        this.state = {
            requestForm: createRef()
        }
    }

    _sendRequestToExhibitor = (e) => {
        // const target = this.state.requestForm.current;
        // console.log(values)
    }

    render(){
        const { _sendRequestToExhibitor } = this;
        const { requestForm } = this.state;
        return (
            <RequestToExhibitorComp>
                <div className='title border-bottom'>
                    Send inquiries and requests to Exhibitor!
                </div>
                <div className='formpanel'>
                    <form ref={requestForm} onSubmit={()=> function(){ return false; } }>
                        <div className='border-bottom'>
                            <Inputfield name='name' placeholder='Name' width='inherit' />
                            <Inputfield name='email' placeholder='Email' width='inherit' />
                            <Inputfield name='company' placeholder='Company or affiliation' width='inherit' />
                        </div>
                        <div className='border-bottom'>
                            <Checkboxfield name='intro' text='Introduction materials' />
                            <Checkboxfield name='cost' text='Cost information' />
                            <Checkboxfield name='meeting' text='On/offline meeting request' />
                            <Checkboxfield name='collaboration' text='Collaboration proposal' />
                        </div>
                        <div className='border-bottom'>
                            <textarea placeholder='Detail' />
                        </div>
                        <div className='border-bottom btns'>
                            <Button fill={true} width={104} _clickBtn={_sendRequestToExhibitor}>Send</Button>
                        </div>
                    </form>
                </div>
            </RequestToExhibitorComp>
        )
    }
}

const RequestToExhibitorComp = styled.div`
background: #ffffff;
> div {
    &.title {
        padding: 16px 12px 13px 12px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #999999;
    }
    &.formpanel {
        > form {
            > div {
                padding: 8px 12px 0 12px;
                > * {
                    margin-bottom: 8px;
                }
                &.btns {
                    text-align: right;
                }
            }
            & textarea {
                width: 100%;
                height: 185px;
                background: #F7F7F9;
                border: 1px solid #E9E9E9;
                box-sizing: border-box;
                border-radius: 8px;
                font-weight: normal;
                font-size: 14px;
                line-height: 22px;
                color: #999999;
                padding: 8px 12px;
                :focus { outline: none; }
                ::placeholder {
                    font-weight: normal;
                    font-size: 14px;
                    color: #999999;
                }
            }
        }
    }
}
.border-bottom {
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    overflow: hidden;
    :last-child { border-bottom: 0; }
}
`;

export default RequestToExhibitor;