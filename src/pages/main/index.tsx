import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Route,Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../modules';
import {setLanguage} from "./../../modules/token/token";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import Submain from "./submain"
import Mentordetail from "./submain/detail/mentorDetail";
import Companydetail from "./submain/detail/companyDetail";

function Main(){
    const history = useHistory();
    const lan = useSelector((state: RootState) => state.tokenReducer.language);
    const dispatch = useDispatch();
    const [activeSubMenu, setActiveSubMenu] = useState(0);
    const [selectedMentor, setSelectedMentor] = useState(null);

    useEffect(()=>{
        _onChangeActiveSubMenu(activeSubMenu);
    },[])

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
    const _onChangeLangage = (key) => {
        dispatch(setLanguage(key));
    }

    const _onChangeActiveSubMenu = function(idx){
        setActiveSubMenu(idx);
        history.push("/main/"+menuList[idx].path);
    }

    const _setSelectedMentor = function(mentor){
        setSelectedMentor(mentor);
        if(mentor != null) history.push("/mentor/"+mentor.id);
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
