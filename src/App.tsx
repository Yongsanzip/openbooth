import React, {useState, useEffect} from 'react';
import { useHistory, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './modules';
import {logoutReducer, setLanguageDataReducer, isLanguageChangeTrueReducer} from "./modules/token/token";

//styled-components
import GlobalStyle from './assets/style/global-styles';
import theme from './assets/style/theme';
import { ThemeProvider } from './assets/style/theme-components';

import Main from "./pages/main"
import Login from "./pages/login"
import {getTokenUserInfo} from "./common/common";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [styleTheme, setStyleTheme] = useState(theme);
  const isLogin = sessionStorage.getItem('token') != null;

  const [isFindPwd, setIsFindPwd] = useState(false);
  useEffect(()=>{
    if(history.location.pathname.indexOf("resetpwd") > -1) {
      setIsFindPwd(true);
    }

    history.listen(() => {
      console.log("on route change###########################################");
      //Router path 이동 시 토큰 여부 확인,
      if(sessionStorage.getItem('token') == null){
        //없으면 로그인 페이지로 이동
        dispatch(logoutReducer());
      }
      else{
        const userInfo:any = getTokenUserInfo();
        if(Date.now() > userInfo.exp){
          // 토큰 만료 시 갱신 >> 현재 제공 받은 토큰 정보가 만료기한이 지나 계속 재로그인 시도 >> api연결 후 주석 풀고 확인 필요
          // dispatch(getRefreshTokenReducer());
        }
      }
    });
  }, []);

  return (
      <ThemeProvider theme={styleTheme}>
        <GlobalStyle/>
        <div className="App" id="app">
              {isFindPwd?
                  <Route path={`/resetpwd/:data`} component={Login} />
                  : isLogin? <Main /> : <Login />
              }

        </div>
      </ThemeProvider>

  );
}

export default App;
