import React, {useState, useEffect} from 'react';
import { useHistory, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import {logoutReducer, setLanguageDataReducer, isLanguageChangeTrueReducer} from "./modules/token/token";

import base64 from 'base-64';

import Main from "./pages/main"
import Login from "./pages/login"

function App(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.tokenReducer.isLogin);
  const language = useSelector((state: RootState) => state.tokenReducer.language);
  if(language == 'kor'){
    import('./language/kor.json').then(module => dispatch(setLanguageDataReducer(module)))
    dispatch(isLanguageChangeTrueReducer());
  }
  else{
    import('./language/eng.json').then(module => dispatch(setLanguageDataReducer(module)))
    dispatch(isLanguageChangeTrueReducer());
  }

  const [isFindPwd, setIsFindPwd] = useState(false);
  useEffect(()=>{
    if(history.location.pathname.indexOf("resetpwd") > -1) {
      setIsFindPwd(true);
    }

    history.listen((location, action) => {
      console.log("on route change###########################################");
      //Router path 이동 시 토큰 여부 확인,
      if(sessionStorage.getItem('token') == null){
        //없으면 로그인 페이지로 이동
        dispatch(logoutReducer());
      }
      else{
        const token = sessionStorage.getItem('token');
        const tokenData = token != null ? token.split('.') : new Array();
        const userInfo = JSON.parse(base64.decode(tokenData[1]));
        if(Date.now() > userInfo.exp){
          // 토큰 만료 시 갱신 >> 현재 제공 받은 토큰 정보가 만료기한이 지나 계속 재로그인 시도 >> api연결 후 주석 풀고 확인 필요
          // dispatch(getRefreshTokenReducer());
        }
      }
    });
  }, []);

  return (
    <div className="App" id="app">
          {isFindPwd?
              <Route path={`/resetpwd/:data`} component={Login} />
              : isLogin? <Main /> : <Login />
          }
          
    </div>
  );
}

export default App;
