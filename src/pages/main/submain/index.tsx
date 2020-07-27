import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom'
import styled from "styled-components";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules";
import { getBoothBannerReducer } from "../../../modules/exhibition/exhibition";

import Mainbanner from "../../../components/mainBanner"
import Submenubar from "../../../components/submenubar";
import Introduction from "./introduction"
import Mentoring from "./mentoring"
import Exhibit from "./exhibit"
import Detail from "./detail";

export default function Submain(props) {
    const dispatch = useDispatch();
    let mainBannerData = useSelector((state: RootState) => state.exhibitionReducer.boothBanners);
    if(mainBannerData == null){
        mainBannerData = {};
        dispatch(getBoothBannerReducer());
    }
    console.log("mainBannerData::", mainBannerData);

    if(props.location.pathname == '/main') props._onMenuChange(0);

    return (
        <div>
            <MainBannerComp className={props.activeMenu == 2? 'open show' : 'close'}>
                <Mainbanner data={mainBannerData} />
            </MainBannerComp>
            <Submenubar menuList={props.submenus} activeIdx={props.activeMenu} onChangeTab={props._onMenuChange}/>
            <div>
                <Route path={`${props.match.path}/intro`} component={()=><Introduction />} />
                <Route path={`${props.match.path}/meeting`} component={()=><Mentoring _setSelectedMentor={props._selectMentor} />} />
                <Route path={`${props.match.path}/exhibit`} component={()=><Exhibit />} />
                <Route path={`${props.match.path}/detail`} component={()=><Detail />} />
            </div>
        </div>
    )
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