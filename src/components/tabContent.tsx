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
                            return <div key={key} className='text'>{component.value}</div>;
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

export default TabContent;