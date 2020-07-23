import React, {useEffect, useState} from 'react';
import './App.css';
import { useHistory } from "react-router-dom";
import Main from './page/main'
import LoginMain from './page/loginMain'
import dummyImg from "./assets/img/bg-dummy.png";

function App() {
    useEffect((e) => {
        //check login token here

        //if login == false -> move url "/"
        // _logout();
    }, []);

    const [login, setLogin] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const history = useHistory();

    const _logout = function(){
        setLogin(false);
        history.push('/');
    }
    const _login = function(){
        setLogin(true);
        setUserInfo({
            img: dummyImg,
            name: 'Login User',
            email: 'abcdef@ghijklmnopqr.com',
            ltd: 'Global Co., Ltd',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus nunc, vulputate eget sollicitudin ac, pretium vitae nisi.',
            country: 'Republic of Korea',
            phone: '+82-10-1234-1234',
            company: 'Bank of America',
            department: 'Design team',
            position: 'UI/UX designer'
        })
        history.push("/main");
    };
    const _setLoginInfo = (data) => {
        console.log(data);
    }


  return (
    <div id='app' className="App">
        {login?
            <Main history={history} logout={_logout} isLogin={login} userInfo={userInfo}/>
            : <LoginMain history={history} login={_login} logout={_logout} isLogin={login} />
        }
    </div>
  );
}

export default App;
