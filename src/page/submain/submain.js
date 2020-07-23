import React, {Component, useEffect, useState} from 'react';
import {Route,Link} from 'react-router-dom'
import styled from "styled-components";

import { Mainbanner } from "../../components"
import Submenubar from "../../components/submenubar";
import Introduction from "./introduction"
import Mentoring from "./mentoring"
import Exhibit from "./exhibit"
import Detail from "./detail";

export default function Submain(props) {
        return (
            <div>
                <MainBannerComp className={props.activeMenu == 2? 'open show' : 'close'}>
                    <Mainbanner />
                </MainBannerComp>
                <Submenubar menuList={props.submenus} activeIdx={props.activeMenu} onChangeTab={props._onMenuChange}/>
                <div>
                    <Route path={`${props.match.path}/:subPage`} component={getSubPage} />
                </div>
            </div>
        )
}

function getSubPage(props) {
    if(props.match != null && props.match.params != null && props.match.params.subPage != null){
        switch (props.match.params.subPage) {
            case 'intro':
                return <Introduction />
            case 'meeting':
                return <Mentoring _setSelectedMentor={props._selectMentor} />
            case 'exhibit':
                return <Exhibit />
            case 'detail':
                return <Detail />

        }

    }
    return <Introduction />
}

const MainBannerComp = styled.div`
height: 0;
transition: all .5s ease-in-out;
overflow: hidden;
&.open {
  height: 280px;
}
&.close {
    height: 0;
    opacity: 0;
}
`;
