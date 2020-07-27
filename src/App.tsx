import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import {getRefreshTokenReducer} from "./modules/token/token";

import base64 from 'base-64';

import Main from "./pages/main"
import Login from "./pages/login"
import FindPwd from "./pages/findPwd"

function App() {
  const dispatch = useDispatch();
  const isLoginCheck = useSelector((state: RootState) => state.tokenReducer.isLogin);
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
      //만료
      console.log("만료")
      dispatch(getRefreshTokenReducer());
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
