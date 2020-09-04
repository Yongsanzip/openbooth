import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import getDate from "date-fns/getDate";
import {useClientRect} from "../common/common";

function DateRangePicker(props){
    const [thisEl, thisRef] = useClientRect(null);
    const [calendarEl, calendarRef] = useClientRect(null);
    const defaultValue:any = null;
    const [startDate, setStartDate] = useState(defaultValue);
    const [endDate, setEndDate] = useState(defaultValue);
    const [isFocus, setIsFocus] = useState(false);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function range(startAt = 0, size) {
        return [new Array(size).keys()].map(i => {
            return Number(i) + startAt;
        });
    }
    const years = range(1990, getYear(new Date()));

    const onChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        if(end != null) setIsFocus(false);
    };

    useEffect(() => {
        if(thisEl != null && calendarEl != null){
            const onClickOutThis = (e) => {
                if(e.target != null &&
                    (e.target.parentElement === thisEl
                    || (e.target.parentElement != null && e.target.parentElement.parentElement === thisEl)
                    || (e.target.parentElement != null && e.target.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement === thisEl)
                    || (e.target.parentElement != null && e.target.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement === thisEl)
                    || (e.target.parentElement != null && e.target.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement.parentElement === thisEl)
                    || (e.target.parentElement != null && e.target.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement === thisEl)
                    || (e.target.parentElement != null && e.target.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement != null && e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement === thisEl) )){
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }
                // setIsFocus(false);
            };
            window.addEventListener('click', onClickOutThis);


            return () => {
                window.removeEventListener('click', onClickOutThis);
            };
        }

    }, [thisEl.current, calendarEl.current, startDate, endDate]);

    const renderDayContents = (day, date) => {
        return <div>{getDate(date)}</div>;
    };

    return (
        <DateRangePickerInputComp ref={thisRef}>
            <div onClick={()=>setIsFocus(!isFocus)}>
                {startDate == null || endDate == null? 'Request date'
                    : startDate.getFullYear() + "/" + startDate.getMonth() + "/" + startDate.getDate() + "~" + endDate.getFullYear() + "/" + endDate.getMonth() + "/" + endDate.getDate()
                }
            </div>
            <HideInput type={'text'} name={'sdate'} value={startDate != null? startDate : ''} readOnly />
            <HideInput type={'text'} name={'edate'} value={endDate != null? endDate : ''} readOnly />
            <DateRangePickerComp className={isFocus? 'show' : 'hide'}>
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    useWeekdaysShort={true}
                    calendarClassName={props.theme != null? "customCalendar "+props.theme : "customCalendar"}
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                    }) => (
                        <div className={'customCalendarHeader'}>
                            <div>
                                Calender
                                <div className={'monthBtns'}>
                                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z" fill="#999999"/>
                                        </svg>
                                    </button>
                                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z" fill="#999999"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                {months[getMonth(date)]} {getYear(date)}
                            </div>
                        </div>
                    )}
                    renderDayContents={renderDayContents}
                />
            </DateRangePickerComp>
        </DateRangePickerInputComp>
    )
}

export default DateRangePicker;

const HideInput = styled.input`
display: none;
`;
const DateRangePickerComp = styled.div`
position: absolute;
top: 45px;
left: 50%;
margin-left: -157px;
z-index: 100;
.customCalendar {
    width: 315px;
    border-radius: 8px;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    background: #FFFFFF;
    .react-datepicker__month-container { width: 100%; }
    .react-datepicker__header {
        text-align: left;
        background: #FFFFFF;
        border-bottom: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding-top: 0;
        position: relative;
    }
    .customCalendarHeader {
        background: #FFFFFF;
        color: #000000;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        > * {
            padding: 16px 24px;
            font-weight: bold;
            :first-child {
                height: 56px;
                position: relative;
                font-size: 16px;
                line-height: 24px;
                border-bottom: 1px solid #E9E9E9;
                .monthBtns {
                    > * {
                        position: absolute;
                        top: 22px;
                        border: 0;
                        background: transparent;
                        :first-child {
                            right: 46.6px;
                        }
                        :last-child {
                            right: 22px;
                        }
                    }
                }
            }
            :last-child {
                height: 40px;
                font-size: 12px;
                line-height: 20px;
                padding-bottom: 4px;
            }
        }
    }
    .react-datepicker__month {
        margin: 0;
        padding: 20px 14px 24px 14px;
    }
    .react-datepicker__day-name {
        display: inline-block;
        font-weight: bold;
        font-size: 10px;
        line-height: 18px;
        color: #818181 !important;
        :first-child {color: #F58181 !important;}
    }
    .react-datepicker__day {
        display: inline-block;
    }
    .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
        background: transparent;
    }
    .react-datepicker__day, button {
        :focus { outline: 0; }
    }
    .react-datepicker__day-names, .react-datepicker__week {
        text-align: center;
    }
    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        color: #000000;
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin: 0;
    }
    .react-datepicker__day--outside-month {
        color: #818181;
    }
    .react-datepicker__day--in-range, .react-datepicker__day--in-selecting-range {
        background: rgba(0, 92, 185, 0.4);
        border-radius: 0;
    }
    .react-datepicker__day--selected, .react-datepicker__day--range-start, .react-datepicker__day--range-end {
        border-radius: 50%;
        > * {
            background-color: #005CB9;
            border-radius: 50%;
        }
    }
    .react-datepicker__day--selecting-range-start {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        color: #ffffff;
    }
    .react-datepicker__day--selecting-range-end {
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
        color: #ffffff;
    }
    .react-datepicker__day--range-start {
        background: rgba(0, 92, 185, 0.4);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        color: #ffffff;
    }
    .react-datepicker__day--range-end {
        background: rgba(0, 92, 185, 0.4);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: #ffffff;
    }

`;
const DateRangePickerInputComp = styled.div`
position: relative;
> div:first-child {
    height: 40px;
    width: 100%;
    padding 9px 12px;
    background: #fffff;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: #999999;
}
`;