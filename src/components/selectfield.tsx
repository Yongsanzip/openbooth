import React, { useState, useRef } from 'react';
import styled from "styled-components";

function Selectfield(props){
    let valueIdx = null;
    if(props.value != null) {
        props.list.forEach((item, idx) => {
            if(item.name === props.value) valueIdx = idx;
        });
    }
    const [isFocus, setIsfocus] = useState(false);
    const [selected, setSelected] = useState(props.list !=null && props.list.length > 0? valueIdx != null? props.list[valueIdx] : props.list[0] : '');
    const selectRef = useRef(null);
    if(props.reset && props.afterReset != null){
        if(selected.name !== props.value && props.value != null){
            setSelected(props.list !=null && props.list.length > 0? valueIdx != null? props.list[valueIdx] : props.list[0] : '');
        }
        else if(selected.name !== props.list[0].name){
            setSelected(props.list[0]);
        }
        props.afterReset();
    }

    const _setIsFocus = () => {
        setIsfocus(!isFocus);
    };
    const _setSelectedOption = (idx) => {
        let selectEl:any;
        if (typeof selectRef !== 'undefined' &&
            typeof selectRef.current !== 'undefined') {
            selectEl = selectRef.current;
        }
        if(selectEl != null){
            selectEl.value = props.list[idx].value;
            setSelected(props.list[idx]);
        }
        _setIsFocus();

    };
  return (
      <SelectFieldComp type={props.type} rows={props.rows} padding={props.padding}>
          <select name={props.name} ref={selectRef}>
              {props.list && props.list.length > 0 ?
                  props.list.map((el, key) => {
                      return (
                          <option key = {key} value = {el.value} > {el.name} </option>
                      )}
                  ) : null
              }
          </select>

          <div className="selectBox" onClick={() => setIsfocus(true)}>
              <div>{selected.name}</div>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.94 -3.08602e-07L4 3.05333L7.06 -4.10887e-08L8 0.94L4 4.94L-4.10887e-08 0.94L0.94 -3.08602e-07Z" fill="#999999"/>
              </svg>
          </div>
          {isFocus?
              <div className="selectList">
                  <ul>
                      {props.list && props.list.length > 0 ?
                          props.list.map((el, key) => {
                              return (
                                  <li key={key} className="lanBox" onClick={()=>_setSelectedOption(key)}>
                                      {el.name}
                                  </li>
                              )
                          }) : null
                      }
                  </ul>
              </div>
          : null}

      </SelectFieldComp>
  )
}

interface SelectBoxProps {
    type: any,
    rows: any,
    padding: any
}

const SelectFieldComp = styled.div`
position: relative;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 22px;
letter-spacing: -0.01em;
color: #999999;
width: 'auto';
& .selectBox {
    padding: ${(props: SelectBoxProps) => (props.padding != null ? props.padding : '8px 12px 8px 8px')};
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    background: ${(props: SelectBoxProps) => (props.type !== 'white' ? '#F7F7F9' : '#ffffff')};
    border-radius: 8px;
    display: flex;
    align-items: center;
    > * {
        :first-child { flex: 1; }
    }
}
& .selectList {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 101;
    overflow: hidden;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    color: #999999;
    ul, li { 
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul {
    }
    li {
        display: ${(props: SelectBoxProps) => (props.rows != null ? 'inline-block' : 'block')};
        width: ${(props: SelectBoxProps) => (props.rows != null ? 'calc(100%/'+props.rows+')' : '')};
        background: ${(props: SelectBoxProps) => (props.type !== 'white' ? '#F7F7F9' : '#ffffff')};
        padding: ${(props: SelectBoxProps) => (props.padding != null ? props.padding : '8px 16px')};
        border-bottom: 1px solid #E9E9E9;
        box-sizing: border-box;
        :nth-last-child(2) {border-bottom: 0}
        :last-child {border-bottom: 0}
    }
}


> select { display: none; }
   
  background-image: url('data:image/svg+xml;utf8,<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.94 -3.08602e-07L4 3.05333L7.06 -4.10887e-08L8 0.94L4 4.94L-4.10887e-08 0.94L0.94 -3.08602e-07Z" fill="#999999"/></svg>');
`;

export default Selectfield;