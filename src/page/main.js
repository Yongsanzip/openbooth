import React, { Component } from 'react';
import { Route, useHistory } from "react-router-dom";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Submain from "./submain"
import dummyImg from "../assets/img/bg-dummy.png";
import Mentordetail from "./submain/detail/mentorDetail";
import Companydetail from "./submain/detail/companyDetail";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lan: 'kor',
            isLogined: true,
            userInfo: {
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
            },
            activeSubMenu: 0,
            selectedMentor: null,
        }
    }

    _logout = () => {
        console.log("logout btn clicked");
        this.setState({
            isLogined: false,
        })
    }

    _onChangeLanguage = (lan) => {
        this.setState({
            lan: lan
        })
    }

    _onChangeActiveSubMenu = (idx) => {
        this.setState({
            activeSubMenu: idx
        })
    }

    _setSelectedMentor= (mentor) => {
        this.setState({
            selectedMentor: mentor
        })
        if(mentor != null) this.props.history.push("/mentor/"+mentor.id);
    }

    render() {
        const { isLogined, lan, userInfo, activeSubMenu, selectedMentor } = this.state;
        const { _onChangeLanguage, _onChangeActiveSubMenu, _setSelectedMentor, _logout } = this;
        return (
            <div>
                <div>
                    <Header isLogined={isLogined} logout={_logout} userinfo={userInfo} />
                </div>
                <div>
                    <Route path="/"exact={true} render={()=> <Submain _onMenuChange={_onChangeActiveSubMenu} activeMenu={activeSubMenu} _selectMentor={_setSelectedMentor} /> } />
                    {/*<Route path="/" component={Submain} exact={true} />*/}
                    <Route path="/mentor/:data" component={Mentordetail} />
                    <Route path="/company" component={Companydetail} />
                    {/* Not Found */}
                    {/*<Route component={() => <Redirect to="/" />} />*/}
                </div>
                <Footer lan={lan} setLanguage={_onChangeLanguage} />
            </div>
        )
    }
}
export default Main;
