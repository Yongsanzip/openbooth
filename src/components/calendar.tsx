import React, { useState, useRef } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue, DayRange, Day } from 'react-modern-calendar-datepicker'
// import DatePicker from "react-datepicker";
import styled from "styled-components";
import { Button } from "./index"

function CalendarField(props) {
    let from = '';
    if(props.dayRange != null && props.dayRange.from != null){
        from = props.dayRange.from.year+'/'+props.dayRange.from.month+'/'+props.dayRange.from.day;
    }
    let to = '';
    if(props.dayRange != null && props.dayRange.to != null){
        to = props.dayRange.to.year+'/'+props.dayRange.to.month+'/'+props.dayRange.to.day;
    }

    if(props.reset && props.afterReset != null && props.dayRange.from != null){
        props.setDayRange({
            from: null,
            to: null
        });
        props.afterReset();
    }

    const renderCustomInput = ({ ref }) => (
        <input
            readOnly
            ref={ref} // necessary
            placeholder={`${props.name}`}
            value={from != '' && to != '' ? `${from} ~ ${to}` : ''}
        />
    )


    return (
        <CalendarFieldComp>
            <DatePicker
                value={props.dayRange}
                onChange={props.setDayRange}
                renderInput={renderCustomInput}
                colorPrimary="#005CB9" // added this
                colorPrimaryLight="rgba(0, 92, 185, 0.4)"
                inputPlaceholder={props.name}
            />
        </CalendarFieldComp>
    );
}

const CalendarFieldComp = styled.div`
.DatePicker {
    width: 100%;
    > input {
        font-family: NanumSquare;
        padding: 9px 0 9px 8px;
        width: 100%;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #999999;
        text-align: left;
        border: 0;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 8px;
        :focus {
            outline: 0;
            border-color: #999999;
        }
        &::placeholder {
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.01em;
            color: #999999;
        }
    }
    * .DatePicker__clendarContainer {
        z-index: 10;
    }
}

`;

export default CalendarField;