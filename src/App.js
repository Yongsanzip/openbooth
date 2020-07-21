import React, {useState} from 'react';
import './App.css';
import { useHistory } from "react-router-dom";
import Main from './page/main'
import Login from './page/login'

function App() {
    const [login, setLogin] = useState(false);
    const history = useHistory();

    const _logout = function(){
        setLogin(false);
    }
    const _login = function(){
        setLogin(true);
    };

  return (
    <div id='app' className="App">
        {login?
            <Main history={history} logout={_logout} isLogin={login} />
            : <Login login={_login} isLogin={login} />
        }
    </div>
  );
}

export default App;
