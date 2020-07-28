import React, { useState, useRef } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue, DayRange, Day } from 'react-modern-calendar-datepicker'
// import DatePicker from "react-datepicker";
import styled from "styled-components";
import { Button } from "./index"

function CalendarField(props) {
    const [dayRange, setDayRange] = React.useState<DayRange>({
        from: null,
        to: null
    });

    let from = '';
    if(dayRange != null && dayRange.from != null){
        from = dayRange.from.year+'/'+dayRange.from.month+'/'+dayRange.from.day;
    }
    let to = '';
    if(dayRange != null && dayRange.to != null){
        to = dayRange.to.year+'/'+dayRange.to.month+'/'+dayRange.to.day;
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
                value={dayRange}
                onChange={setDayRange}
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
        padding: 9px 0 9px 8px;
        width: 100%;
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        color: #999999;
        text-align: left;
        border: 0;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 8px;
    }
    * .DatePicker__clendarContainer {
        z-index: 10;
    }
}

`;

export default CalendarField;