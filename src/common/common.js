import React from 'react';

export const textLineBreak = (lines) => {
    return lines ?
        lines.split(/[\r\n]/).map((partial, i) =>
            <span key={i}>{partial}{i !== lines.length - 1 && <br />}</span>
        )
        : lines;
}

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
}