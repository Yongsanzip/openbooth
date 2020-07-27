import React from 'react';
import { Route } from "react-router-dom";
import Login from "./login/login";
import Resetpwd from "./login/resetPwd";

const LoginMain = props => {
    return (
        <div>
            <Route path="/" exact={true} component={()=><Login login={props.login} logout={props.logout} />} ></Route>
            <Route path="/resetpwd/:token" component={()=><Resetpwd />} ></Route>
        </div>
    )
}

export default LoginMain;
