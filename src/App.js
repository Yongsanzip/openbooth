import React, {useEffect, useState} from 'react';
import './App.css';
import { useHistory } from "react-router-dom";

import Main from './page/main'
import LoginMain from './page/loginMain'

function App(props) {
    const history = useHistory();
    const [isLogin, setIsLoin] = useState(true);

    const _login = () => {
        setIsLoin(true);
    }
    const _logout = () => {
        setIsLoin(false);
    }
    
    useEffect(() => {
        //isLogin check
        if(history.location.pathname.indexOf('/resetpwd') < 0){
            console.log(history.location.pathname);
            // props.login(history);
        } 
    }, []);

    console.log(isLogin);
    
  return (
    <div id='app' className="App">
        {isLogin?
            <Main />
            : <LoginMain login={_login} logout={_logout} />
        }
    </div>
  );
}

export default App;