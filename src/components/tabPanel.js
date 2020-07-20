import React, {Component, createRef, useEffect, useState} from 'react';
import styled from "styled-components";
import {Pannel} from "./index";
import {Link} from "react-router-dom";
import CompanyListitem from "./category/companylistitem";
import Listitem from "./category/listitem";

function Tabpannel(props) {
    const [tabContent, setTabContent] = useState(()=>createRef());
    const [tabTitle, setTabTitle] = useState(()=>createRef());
    const [activeTab, setActiveTab] = useState(0);
    const [activePosition, setActivePosition] = useState({width:0, left: 0});
    const _onClickTab = function(idx){
        console.log("_onClickTab::", idx, tabTitle.current.children[idx]);
        setActiveTab(idx);
        if(tabTitle.current == null || tabTitle.current.children.length < 1) return;
        setActivePosition({width: tabTitle.current.children[idx].offsetWidth, left: tabTitle.current.children[idx].offsetLeft});

        if(tabContent.current == null) return;
        props.tabs.forEach(function(el, idx) {
            tabContent.current.children[idx].classList.remove('show')
            tabContent.current.children[idx].classList.add('hide');
        });
        const key = props.tabs[idx].name;
        tabContent.current.getElementsByClassName(key)[0].classList.add('show');
        tabContent.current.getElementsByClassName(key)[0].classList.remove('hide');
    }

    useEffect((e) => {
        _onClickTab(activeTab == null? 0 : activeTab);
    }, []);

    return (
        <TabPannelComp activePosition={activePosition} width={props.width}>
            <div className='tabTitle'>
                <ul ref={tabTitle}>
                    {props.tabs && props.tabs.length > 0 ?
                        props.tabs.map((item, key) => {
                            return (
                                <li className={activeTab==key? 'active':''} key={key} onClick={()=>_onClickTab(key)}>{item.title}</li>
                            )
                        }) : null }
                </ul>
            </div>
            <div className='tabContent' ref={tabContent}>
                {props.children}
            </div>
        </TabPannelComp>
    )
}

const TabPannelComp = styled.div`
background: #FFFFFF;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #999999;
> * {
    padding: 0 24px;
}
.tabTitle {
    position: relative;
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    :after {
        content: '';
        position: absolute;
        width: ${props => (props.activePosition != null ? props.activePosition.width+'px' : '100px')};
        height: 4px;
        left: ${props => (props.activePosition != null ? props.activePosition.left+'px' : '0')};
        bottom: 0;
        background: #005CB9;
        border-radius: 2px;
        transition-duration:0.5s;
        transition-timing-function: ease;
    }
    
    ul, li { list-style: none; margin: 0; padding: 0; }
    ul {
    ${props => (props.width != null ? 'width: '+props.width+'px; margin: 0 auto; ' : '')};
    }
    li {
        display: inline-block;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #999999;
        margin-right: 24px;
        :focus { outline: 0; }
        .active { color: #005CB9; }
        :last-child { margin-right: 0; }
    }
}
`;

export default Tabpannel;