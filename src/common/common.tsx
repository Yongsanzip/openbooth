import React, {useCallback, useRef, useState} from 'react';
import base64 from 'base-64';

export const getTokenUserInfo = () => {
    const sessionToken = sessionStorage.getItem('token');
    const tokenData = sessionToken != null ? sessionToken.split('.') : [];
    if(tokenData.length > 0){
        return JSON.parse(base64.decode(tokenData[1]));
    }
    return null;
};
export const textLineBreak = (lines) => {
    return lines ?
        lines.split(/[\r\n]/).map((partial, i) =>
            <span key={i}>{partial}{i !== lines.length - 1 && <br />}</span>
        )
        : lines;
};

export const getBrowserSize = () => {
    if(window.outerWidth >= 769){
        return 'pc'
    }
    else if(window.outerWidth >= 415){
        return 'tablet';
    }
    else {
        return 'mobile';
    }
};

export function useClientRect(callback) {
    const defaultVal:any = useRef(null);
    const [rect, setRect] = useState(defaultVal);
    const ref = useCallback(el => {
        if(callback != null) callback(el);
        setRect(el);
    }, [callback]);
    return [rect, ref];
};