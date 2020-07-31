import React from 'react';
import styled from "styled-components";
import {Pannel, Thumblist, Video} from "./index";

function TabContent(props) {
    return (
        <Pannel noPadding>
            {props.component != null && props.component.length > 0 ?
                props.component.map((component: any, key) => {
                    switch (component.type) {
                        case "text":
                            return <TabContentText key={key} className='text'>{component.value}</TabContentText>;
                        case "video":
                            return <Video key={key} height={'480px'} src={component.value}/>;
                        case "thumbnails":
                            return <Thumblist key={key} list={component.value}/>;
                    }
                }) : null
            }
        </Pannel>
    )
}

const TabContentText = styled.div`
line-height: 26px;
font-weight: normal;
font-size: 16px;
color: #999999;
`;

export default TabContent;