import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useClientRect} from "../common/common";

function Tabpannel(props) {
    const [tabTitle, tabTitleRef] = useClientRect(null);
    const [tabContent, tabContentRef] = useClientRect(null);
    const [activePosition, setActivePosition] = useState({width:0, left: 0});
    const [activeTab, setActiveTab] = useState(0);

    const _onClickTab = function(idx){
        if(tabTitle.children == null || tabTitle.children.length < 0) return;
        setActivePosition({width: tabTitle.children[idx].offsetWidth, left: tabTitle.children[idx].offsetLeft});

        props.tabs.forEach(function(el, idx) {
            if(tabContent.children[idx] == null) return;
            tabContent.children[idx].classList.remove('show');
            tabContent.children[idx].classList.add('hide');
        });
        const key = props.tabs[idx].name;
        if(tabContent.getElementsByClassName(key).length < 1) return;
        tabContent.getElementsByClassName(key)[0].classList.add('show');
        tabContent.getElementsByClassName(key)[0].classList.remove('hide');

        if(idx === activeTab) return;
        setActiveTab(idx);
        if(props._onChangeTab) props._onChangeTab(idx);
    };

    const setTabTitleClass = (key) => {
        let classList:any = [];
        if(activeTab === key) classList.push("active");
        if(props.tabs[key].name === '-') classList.push("flex");

        return classList.join(" ");
    };

    useEffect(()=>{
        if(props.children != null && props.tabs != null && props.tabs.length > 0){
            _onClickTab(props.activeTab == null? 0 : props.activeTab);
        }
    }, [props.children]);
    useEffect(() => {
        function setActiveTabStyle() {
            _onClickTab(props.activeTab == null? 0 : props.activeTab);
        }

        if(props.tabs != null && props.tabs.length > 0 && activePosition.width === 0){
            setActiveTabStyle();
            window.addEventListener('resize', setActiveTabStyle);
        }
        if(props.activeTab != null && props.activeTab !== activeTab){
            setActiveTabStyle();
        }

        return () => {
            window.removeEventListener('resize', setActiveTabStyle);
        };
    }, [props.tabs, props.activeTab, tabTitle.current, tabContent.current, activePosition]);

    return (
        <TabPannelComp activePosition={activePosition} width={props.width} noMargin={props.noMargin} type={props.type}>
            <div className='tabTitle'>
                <ul ref={tabTitleRef}>
                    {props.tabs && props.tabs.length > 0 ?
                        props.tabs.map((item, key) => {
                            return (
                                <li className={setTabTitleClass(key)} key={key} onClick={()=>_onClickTab(key)}>{item.title !== '-'? item.title : ''}</li>
                            )
                        }) : null }
                </ul>
            </div>
            <div className='tabContent' ref={tabContentRef}>
                {props.children}
            </div>
        </TabPannelComp>
    )
}

interface TabPannelCompProps {
    activePosition: any
    width: any
    noMargin: any
    type: any
}
const TabPannelComp = styled.div`
background: #FFFFFF;
border-radius: 8px;
> * {
    ${({theme}) => theme.media.desktop`
    ${(props: TabPannelCompProps) => (props.noMargin != null ? null: 'padding: 0 24px;')};
    `}
    ${({theme}) => theme.media.mobile`
    ${(props: TabPannelCompProps) => (props.noMargin != null ? null: 'padding: 0 16px;')};
    `}
}
.tabTitle {
    position: relative;
    border-bottom: 1px solid #E9E9E9;
    box-sizing: border-box;
    ${({theme}) => theme.media.desktop`
    height: 56px;
    line-height: 56px;
    `}
    ${({theme}) => theme.media.mobile`
    height: 40px;
    line-height: 40px;
    `}
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
        ${({theme}) => theme.media.desktop`
        ${(props: TabPannelCompProps) => (props.type != null && props.type === 'contactBox'? 'font-size: 14px;' : 'font-size: 16px;line-')};
        line-height: 24px;
        margin-right: 24px;
        `}
        ${({theme}) => theme.media.mobile`
        font-size: 12px;
        line-height: 20px;
        margin-right: 16px;
        `}        
        color: #999999;
        :focus { outline: 0; }
        .active { color: #005CB9; }
        :last-child { margin-right: 0; }
    }
}
`;

export default Tabpannel;