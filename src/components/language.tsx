import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../modules";
import {isLanguageChangeTrueReducer, setLanguage, setLanguageDataReducer} from "../modules/token/token";

function Language(props){
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.tokenReducer.language);
    useEffect(()=>{
        if(language === 'kor'){
            import('./../language/kor.json').then(module => dispatch(setLanguageDataReducer(module)));
            dispatch(isLanguageChangeTrueReducer());
        }
        else{
            import('./../language/eng.json').then(module => dispatch(setLanguageDataReducer(module)));
            dispatch(isLanguageChangeTrueReducer());
        }
    }, [language]);

    const [isFocused, setIsFocused] = useState(false);
    const lanList = [{
        name: '대한민국',
        lan: 'kor'
    },{
        name: 'English',
        lan: 'eng'
    }];

    const _onClickLanBox = (el) => {
        setIsFocused(!isFocused);
        if(el != null){
            dispatch(setLanguage(el.lan));
        }
    };

  return (
      <LanguageComp>
        <div className="lanBox"
             onClick={()=>_onClickLanBox(null)}
        >
          {language != null && lanList != null && lanList.length > 0 && lanList.findIndex(l => l.lan === language) > -1 ?
              lanList[lanList.findIndex(l => l.lan === language)].name
              : lanList != null && lanList.length > 0?
                  lanList[0].name
                  : ''
          }
        </div>
        {isFocused?
            <div className="lanList">
              <ul>
                {lanList && lanList.length > 0 ?
                    lanList.map((el, key) => {
                      return (
                          <li key={key} className="lanBox" onClick={()=>_onClickLanBox(el)}>
                            {el.name}
                          </li>
                      )
                    }) : null
                }
              </ul>
            </div> : null }
      </LanguageComp>
  )
}

const LanguageComp = styled.div`
position: relative;
min-width: 74px;
height: 40px;
text-align: center;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 20px;
letter-spacing: -0.01em;
color: #999999;
& .lanList {
  position: absolute;
  bottom: 47px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  li {
    display: block;
    width: inherit;
    border-radius: 0;
    border-bottom: 0;
    :first-child {
      border-radius: 8px 8px 0 0;
    }
    :last-child {
      border-bottom: 1px solid #E9E9E9;
      border-radius: 0 0 8px 8px;
    }
  }
}
& .lanBox {
  background: #ffffff;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 14px;
}
`;

export default Language;