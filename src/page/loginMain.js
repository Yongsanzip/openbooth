import React, {Component, useEffect, useState} from 'react';
import { useHistory,Route,Switch } from "react-router-dom";
import Login from "./login/login";
import Resetpwd from "./login/resetPwd";

function LoginMain(props){
    console.log("login main ::", props);
    return (
        <div>
            <Route path="/" exact={true} ><Login history={props.history} login={props.login} logout={props.logout} isLogin={props.isLogin} /></Route>
            <Route path="/resetpwd/:data"><Resetpwd /></Route>
        </div>
    )
}
export default LoginMain;
