import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Route,Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import {setLanguage} from "../../modules/token/token";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Submain from "./submain"
import Mentordetail from "./submain/detail/mentorDetail";
import Companydetail from "./submain/detail/companyDetail";

function Main(){
    const dispatch = useDispatch();
    const history = useHistory();
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const [activeSubMenu, setActiveSubMenu] = useState(0);
    const [selectedMentor, setSelectedMentor] = useState(null);

    useEffect(()=>{
        if(history.location.pathname.indexOf('/main') > -1){
            _onChangeActiveSubMenu(0);
        }
    },[]);

    const menuList = [{
        name: languageData.subMenu_intoroduction,
        path: 'intro'
    },{
        name: languageData.subMenu_mentoring,
        path: 'meeting'
    }, {
        name: languageData.subMenu_exhibition,
        path: 'exhibit'
    }, {
        name: '-'
    },{
        name: languageData.subMenu_detail,
        path: 'detail'
    }];

    const _onChangeActiveSubMenu = function(idx){
        setActiveSubMenu(idx);
        history.push("/main/"+menuList[idx].path);
    };

    const _setSelectedMentor = function(mentor){
        setSelectedMentor(mentor);
        if(mentor != null) history.push("/mentor/"+mentor.id);
    };

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
            <Footer />
        </div>
    )
}
export default Main;
