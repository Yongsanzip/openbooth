import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        font-family: NanumSquare;
        letter-spacing: -0.01em;
        box-sizing: border-box;
    }
    html, body, #root, #app { height: 100%; }
    body{
        font-family: 'NanumSquare';
        font-style: normal;
        font-weight: normal;
        letter-spacing: -0.01em;
    }
    .alignRight {
        text-align: right;
    }
    .fixedOnTop {
        position: fixed;
        top: 0;
        z-index: 1;
    }
    
    .hide {
        opacity: 0;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;
        display: none;
    }
    .show {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;
    }
    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export default GlobalStyle;