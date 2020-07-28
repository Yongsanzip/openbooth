import React, {Component, createRef, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Pannel} from "./index";
import {Link} from "react-router-dom";
import CompanyListitem from "./category/companylistitem";
import Listitem from "./category/listitem";

function Tabpannel(props) {
    const tabTitle = useRef(null);
    const tabContent = useRef(null);
    const [activePosition, setActivePosition] = useState({width:0, left: 0});
    const _onClickTab = function(idx){
        if(props.changeActiveTab == null) return;
        props.changeActiveTab(idx);
        let tabTitleEl:any;
        if (typeof tabTitle !== 'undefined' &&
            typeof tabTitle.current !== 'undefined') {
            tabTitleEl = tabTitle.current;
        }
        if(tabTitleEl == null || tabTitleEl.children.length < 1) return;
        setActivePosition({width: tabTitleEl.children[idx].offsetWidth, left: tabTitleEl.children[idx].offsetLeft});

        if(tabContent.current == null) return;
        let tabContentEl:any;
        if (typeof tabContent !== 'undefined' &&
            typeof tabContent.current !== 'undefined') {
            tabContentEl = tabContent.current;
        }
        props.tabs.forEach(function(el, idx) {
            tabContentEl.children[idx].classList.remove('show')
            tabContentEl.children[idx].classList.add('hide');
        });
        const key = props.tabs[idx].name;
        tabContentEl.getElementsByClassName(key)[0].classList.add('show');
        tabContentEl.getElementsByClassName(key)[0].classList.remove('hide');
    }

    useEffect(() => {
        _onClickTab(props.activeTab == null? 0 : props.activeTab);
    }, []);

    return (
        <TabPannelComp activePosition={activePosition} width={props.width} noMargin={props.noMargin}>
            <div className='tabTitle'>
                <ul ref={tabTitle}>
                    {props.tabs && props.tabs.length > 0 ?
                        props.tabs.map((item, key) => {
                            return (
                                <li className={props.activeTab==key? 'active':''} key={key} onClick={()=>_onClickTab(key)}>{item.title}</li>
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

interface TabPannelCompProps {
    activePosition: any
    width: any
    noMargin: any
}
const TabPannelComp = styled.div`
background: #FFFFFF;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #999999;
> * {
    padding: ${(props: TabPannelCompProps) => (props.noMargin != null ? '0': '0 24px')};
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
        width: ${(props: TabPannelCompProps) => (props.activePosition != null ? props.activePosition.width+'px' : '100px')};
        height: 4px;
        left: ${(props: TabPannelCompProps) => (props.activePosition != null ? props.activePosition.left+'px' : '0')};
        bottom: 0;
        background: #005CB9;
        border-radius: 2px;
        transition-duration:0.5s;
        transition-timing-function: ease;
    }
    
    ul, li { list-style: none; margin: 0; padding: 0; }
    ul {
    ${(props: TabPannelCompProps) => (props.width != null ? 'width: '+props.width+'px; margin: 0 auto; ' : '')};
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