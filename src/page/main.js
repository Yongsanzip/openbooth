import React, {Component, useEffect, useState} from 'react';
import { useHistory,Route,Switch } from "react-router-dom";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Submain from "./submain/submain"
import Mentordetail from "./submain/detail/mentorDetail";
import Companydetail from "./submain/detail/companyDetail";

import dummyImg from "../assets/img/bg-dummy.png";

function Main(props){
    const history = useHistory();
    const [lan, setlan] = useState('kor');
    const [activeSubMenu, setActiveSubMenu] = useState(0);
    const [selectedMentor, setSelectedMentor] = useState(null);
    const menuList = [{
        name: 'Introduction',
        path: 'intro'
    },{
        name: 'Mentoring hall',
        path: 'meeting'
    }, {
        name: 'Exhibit hall',
        path: 'exhibit'
    }, {
        name: '-'
    },{
        name: 'Details',
        path: 'detail'
    }];

    const _onChangeLangage = function(lan){
        setlan(lan);
    }

    const _onChangeActiveSubMenu = function(idx){
        setActiveSubMenu(idx);
        history.push("/main/"+menuList[idx].path);
    }

    const _setSelectedMentor = function(mentor){
        setSelectedMentor(mentor);
        if(mentor != null) this.props.history.push("/mentor/"+mentor.id);
    }

    return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Switch>
                        <Route path="/main" render={(props)=> <Submain submenus={menuList} _onMenuChange={_onChangeActiveSubMenu} activeMenu={activeSubMenu} _selectMentor={_setSelectedMentor} {...props} /> } />
                        <Route path="/mentor/:data" component={Mentordetail} />
                        <Route path="/company" component={Companydetail} />
                    </Switch>
                </div>
                <Footer lan={lan} setLanguage={_onChangeLangage} />
            </div>
    )
}
export default Main;
