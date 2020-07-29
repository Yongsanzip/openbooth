import React from 'react';

export const textLineBreak = (lines) => {
    return lines ?
        lines.split(/[\r\n]/).map((partial, i) =>
            <span key={i}>{partial}{i !== lines.length - 1 && <br />}</span>
        )
        : lines;
}