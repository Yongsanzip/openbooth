import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import {getRefreshTokenReducer, setLanguageDataReducer} from "./modules/token/token";

import base64 from 'base-64';

import Main from "./pages/main"
import Login from "./pages/login"
import FindPwd from "./pages/findPwd"

function App() {
  const dispatch = useDispatch();
  const isLoginCheck = useSelector((state: RootState) => state.tokenReducer.isLogin);
  const language = useSelector((state: RootState) => state.tokenReducer.language);
  if(language == 'kor'){
    import('./language/kor.json').then(module => dispatch(setLanguageDataReducer(module)))
  }
  else{
    import('./language/eng.json').then(module => dispatch(setLanguageDataReducer(module)))
  }
  console.log("isLoginCheck::", isLoginCheck, language);
  let isLogin = false;

  // sessionStorage.removeItem('token')
  if(sessionStorage.getItem('token') == null){
    isLogin = false;
  }
  else{
    const token = sessionStorage.getItem('token');
    const tokenData = token != null ? token.split('.') : new Array();
    const userInfo = JSON.parse(base64.decode(tokenData[1]));
    if(Date.now() > userInfo.exp){
      // 토큰 만료 시 갱신 >> 현재 제공 받은 토큰 정보가 만료기한이 지나 계속 재로그인 시도 >> api연결 후 주석 풀고 확인 필요
      // dispatch(getRefreshTokenReducer());
    }
    isLogin = true;
  }

    const isFindPwd = false;
    console.log("isLogin::", isLogin);
  return (
    <div className="App" id="app">
          {isLogin?
              <Main />
              : isFindPwd? <FindPwd /> : <Login />
          }
          
    </div>
  );
}

export default App;
