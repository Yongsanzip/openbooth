import React, { Component, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Submenubar from "../components/submenubar";
import Introduction from "./submain/introduction"
import Mentoring from "./submain/mentoring"
import Exhibit from "./submain/exhibit"
import Detail from "./submain/detail";
import { Mainbanner } from "../components/index"

class Submain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [{
                name: 'Introduction'
            },{
                name: 'Mentoring hall'
            }, {
                name: 'Exhibit hall'
            }, {
                name: '-'
            },{
                name: 'Details'
            }],
            activeTabIdx: 4,
            isFixedSubmenuBar: false,
        }
    }

    _setActiveTabIdx = (idx) => {
        this.setState({
            activeTabIdx: idx
        })
    }

    render() {
        const { menuList, activeTabIdx, isFixedSubmenuBar, FixedSubmenuBarStyle } = this.state;
        const { _setActiveTabIdx } = this;

        return (
            <div>
                <MainBannerComp className={activeTabIdx == 2? 'open show' : 'close'}>
                    <Mainbanner />
                </MainBannerComp>
                <Submenubar menuList={menuList} activeIdx={activeTabIdx} onChangeTab={_setActiveTabIdx}/>
                <div>
                    <div className={activeTabIdx === 0? 'show' : 'hide'}><Introduction /></div>
                    <div className={activeTabIdx === 1? 'show' : 'hide'}><Mentoring /></div>
                    <div className={activeTabIdx === 2? 'show' : 'hide'}><Exhibit /></div>
                    <div className={activeTabIdx === 4? 'show' : 'hide'}><Detail /></div>
                    {/*{activeTabIdx == 0? <Route path="/" component={Introduction} />*/}
                    {/*: activeTabIdx == 1? <Route path="/" component={Mentoring} />*/}
                    {/*: activeTabIdx == 2? <Route path="/" component={Exhibit} /> : null}*/}
                </div>
            </div>
        )
    }
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

export default Submain;
