import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Language from "../language";
import {RootState} from "../../modules";
import { useSelector } from 'react-redux';
import {getBrowserSize} from "../../common/common";

function Footer(props) {
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const [deviceType, setDeviceType] = useState('pc');
    const _setDeviceType = () => {
        setDeviceType(getBrowserSize());
    };

    useEffect(()=>{
        _setDeviceType();
        window.addEventListener('resize', _setDeviceType);

        return function cleanup() {
            window.removeEventListener('resize', _setDeviceType);
        };
    }, []);

    return (
        <Mainfooter>
            <div className={'links'}>
                <Footeritem type={null}>
                    <li>{languageData.privacyPolicy}</li>
                    <li>{languageData.termsUse}</li>
                    <li>{languageData.participationRules}</li>
                    <li>{languageData.serviceIntro}</li>
                    <li>{languageData.contact}</li>
                </Footeritem>
            </div>
            <div>
                <Footeritem type={'icons'}>
                    <li>
                        {deviceType === 'pc'?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6667 12.6667V10.6667C17.6667 9.8 17.8667 9.33333 19.2667 9.33333H21V6H18.3333C15 6 13.6667 8.2 13.6667 10.6667V12.6667H11V16H13.6667V26H17.6667V16H20.6L21 12.6667H17.6667Z" fill="#999999"/>
                            </svg>
                        : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.25 9.5V8C13.25 7.35 13.4 7 14.45 7H15.75V4.5H13.75C11.25 4.5 10.25 6.15 10.25 8V9.5H8.25V12H10.25V19.5H13.25V12H15.45L15.75 9.5H13.25Z" fill="#999999"/>
                            </svg>
                        }
                    </li>
                    <li>
                        {deviceType === 'pc'?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9915 10.5126C14.5387 10.5126 13.1454 11.0898 12.1181 12.1171C11.0908 13.1444 10.5137 14.5377 10.5137 15.9905C10.5137 17.4433 11.0908 18.8366 12.1181 19.8639C13.1454 20.8912 14.5387 21.4684 15.9915 21.4684C17.4444 21.4684 18.8377 20.8912 19.865 19.8639C20.8923 18.8366 21.4694 17.4433 21.4694 15.9905C21.4694 14.5377 20.8923 13.1444 19.865 12.1171C18.8377 11.0898 17.4444 10.5126 15.9915 10.5126ZM15.9915 19.548C15.0477 19.548 14.1425 19.1731 13.4751 18.5057C12.8078 17.8383 12.4328 16.9331 12.4328 15.9893C12.4328 15.0455 12.8078 14.1403 13.4751 13.4729C14.1425 12.8055 15.0477 12.4306 15.9915 12.4306C16.9354 12.4306 17.8405 12.8055 18.5079 13.4729C19.1753 14.1403 19.5502 15.0455 19.5502 15.9893C19.5502 16.9331 19.1753 17.8383 18.5079 18.5057C17.8405 19.1731 16.9354 19.548 15.9915 19.548Z" fill="#999999"/>
                                <path d="M21.6862 11.5884C22.3915 11.5884 22.9633 11.0166 22.9633 10.3113C22.9633 9.606 22.3915 9.03424 21.6862 9.03424C20.9809 9.03424 20.4092 9.606 20.4092 10.3113C20.4092 11.0166 20.9809 11.5884 21.6862 11.5884Z" fill="#999999"/>
                                <path d="M26.1013 9.01286C25.827 8.30465 25.4079 7.6615 24.8708 7.12459C24.3337 6.58767 23.6904 6.16882 22.9821 5.89484C22.1532 5.5837 21.2775 5.41546 20.3924 5.39728C19.2516 5.34753 18.8902 5.33331 15.9973 5.33331C13.1044 5.33331 12.7336 5.33331 11.6022 5.39728C10.7177 5.41453 9.84272 5.5828 9.01493 5.89484C8.30643 6.1685 7.66295 6.58724 7.12579 7.12419C6.58863 7.66115 6.16965 8.30447 5.89572 9.01286C5.58452 9.84166 5.41666 10.7174 5.39935 11.6025C5.34841 12.7422 5.33301 13.1035 5.33301 15.9976C5.33301 18.8905 5.33301 19.259 5.39935 20.3927C5.41712 21.2788 5.58416 22.1531 5.89572 22.9835C6.17042 23.6917 6.58981 24.3347 7.1271 24.8716C7.66439 25.4085 8.30776 25.8274 9.01611 26.1016C9.84233 26.4252 10.7177 26.6055 11.6046 26.6347C12.7454 26.6844 13.1067 26.6998 15.9997 26.6998C18.8926 26.6998 19.2634 26.6998 20.3948 26.6347C21.2798 26.6167 22.1554 26.4488 22.9844 26.1383C23.6926 25.8637 24.3357 25.4445 24.8727 24.9074C25.4098 24.3703 25.829 23.7272 26.1036 23.0191C26.4152 22.1898 26.5822 21.3155 26.6 20.4294C26.6509 19.2898 26.6663 18.9285 26.6663 16.0343C26.6663 13.1402 26.6663 12.773 26.6 11.6393C26.5862 10.7416 26.4175 9.85308 26.1013 9.01286ZM24.6583 20.305C24.6507 20.9878 24.5261 21.6641 24.2899 22.3047C24.112 22.7654 23.8397 23.1838 23.4904 23.5328C23.1411 23.8819 22.7226 24.154 22.2618 24.3317C21.6283 24.5668 20.9591 24.6914 20.2834 24.7001C19.158 24.7522 18.8405 24.7653 15.9547 24.7653C13.0665 24.7653 12.7715 24.7653 11.6247 24.7001C10.9494 24.6918 10.2805 24.5672 9.64753 24.3317C9.18515 24.1551 8.76497 23.8835 8.41417 23.5344C8.06338 23.1852 7.78979 22.7663 7.61111 22.3047C7.37826 21.671 7.25371 21.0026 7.24268 20.3275C7.19174 19.2021 7.17989 18.8846 7.17989 15.9988C7.17989 13.1118 7.17989 12.8168 7.24268 11.6689C7.25033 10.9865 7.37495 10.3106 7.61111 9.67035C7.97243 8.73565 8.71284 7.99998 9.64753 7.64221C10.2808 7.40782 10.9495 7.28322 11.6247 7.27378C12.7513 7.22284 13.0676 7.20863 15.9547 7.20863C18.8417 7.20863 19.1378 7.20863 20.2834 7.27378C20.9591 7.28191 21.6284 7.40655 22.2618 7.64221C22.7225 7.82023 23.141 8.09262 23.4902 8.44189C23.8395 8.79116 24.1119 9.2096 24.2899 9.67035C24.5228 10.3041 24.6473 10.9725 24.6583 11.6475C24.7093 12.7742 24.7223 13.0905 24.7223 15.9775C24.7223 18.8633 24.7223 19.1737 24.6714 20.3062H24.6583V20.305Z" fill="#999999"/>
                            </svg>
                            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9941 7.88477C10.9045 7.88477 9.85954 8.31761 9.08906 9.08809C8.31859 9.85856 7.88574 10.9035 7.88574 11.9932C7.88574 13.0828 8.31859 14.1278 9.08906 14.8982C9.85954 15.6687 10.9045 16.1016 11.9941 16.1016C13.0838 16.1016 14.1287 15.6687 14.8992 14.8982C15.6697 14.1278 16.1025 13.0828 16.1025 11.9932C16.1025 10.9035 15.6697 9.85856 14.8992 9.08809C14.1287 8.31761 13.0838 7.88477 11.9941 7.88477ZM11.9941 14.6613C11.2863 14.6613 10.6074 14.3801 10.1068 13.8796C9.6063 13.379 9.3251 12.7001 9.3251 11.9923C9.3251 11.2844 9.6063 10.6055 10.1068 10.105C10.6074 9.60444 11.2863 9.32324 11.9941 9.32324C12.702 9.32324 13.3809 9.60444 13.8814 10.105C14.382 10.6055 14.6632 11.2844 14.6632 11.9923C14.6632 12.7001 14.382 13.379 13.8814 13.8796C13.3809 14.3801 12.702 14.6613 11.9941 14.6613Z" fill="#999999"/>
                                <path d="M16.2644 8.69098C16.7934 8.69098 17.2222 8.26216 17.2222 7.73319C17.2222 7.20421 16.7934 6.77539 16.2644 6.77539C15.7355 6.77539 15.3066 7.20421 15.3066 7.73319C15.3066 8.26216 15.7355 8.69098 16.2644 8.69098Z" fill="#999999"/>
                                <path d="M19.5762 6.75966C19.3705 6.2285 19.0562 5.74614 18.6533 5.34346C18.2505 4.94077 17.768 4.62663 17.2368 4.42115C16.6151 4.18779 15.9584 4.06161 15.2945 4.04798C14.4389 4.01066 14.1679 4 11.9982 4C9.82852 4 9.55042 4 8.70191 4.04798C8.03855 4.06091 7.38228 4.18712 6.76144 4.42115C6.23006 4.62639 5.74746 4.94044 5.34459 5.34316C4.94172 5.74588 4.62748 6.22836 4.42203 6.75966C4.18863 7.38126 4.06274 8.03806 4.04976 8.70191C4.01155 9.55664 4 9.82763 4 11.9982C4 14.1679 4 14.4442 4.04976 15.2945C4.06308 15.9591 4.18836 16.6148 4.42203 17.2377C4.62806 17.7688 4.9426 18.2511 5.34557 18.6537C5.74853 19.0564 6.23107 19.3706 6.76233 19.5762C7.38199 19.8189 8.03854 19.9541 8.70369 19.976C9.55931 20.0133 9.8303 20.0249 12 20.0249C14.1697 20.0249 14.4478 20.0249 15.2963 19.976C15.9601 19.9625 16.6168 19.8366 17.2386 19.6037C17.7697 19.3978 18.252 19.0834 18.6548 18.6806C19.0576 18.2778 19.372 17.7954 19.578 17.2643C19.8116 16.6424 19.9369 15.9867 19.9502 15.3221C19.9884 14.4673 20 14.1964 20 12.0258C20 9.85518 20 9.57974 19.9502 8.72945C19.9399 8.05622 19.8134 7.38983 19.5762 6.75966ZM18.494 15.2288C18.4883 15.7408 18.3948 16.2481 18.2177 16.7286C18.0843 17.0741 17.88 17.3878 17.618 17.6496C17.356 17.9115 17.0422 18.1156 16.6966 18.2488C16.2214 18.4251 15.7196 18.5186 15.2128 18.5251C14.3687 18.5642 14.1306 18.574 11.9662 18.574C9.80009 18.574 9.57885 18.574 8.71879 18.5251C8.21229 18.5189 7.71064 18.4254 7.2359 18.2488C6.8891 18.1164 6.57397 17.9127 6.31088 17.6508C6.04778 17.3889 5.84259 17.0747 5.70857 16.7286C5.53394 16.2533 5.44053 15.752 5.43225 15.2457C5.39405 14.4016 5.38516 14.1635 5.38516 11.9991C5.38516 9.83385 5.38516 9.61262 5.43225 8.75167C5.438 8.23991 5.53146 7.73294 5.70857 7.25278C5.97956 6.55175 6.53487 6 7.2359 5.73167C7.71087 5.55588 8.21237 5.46243 8.71879 5.45535C9.56375 5.41715 9.80098 5.40649 11.9662 5.40649C14.1315 5.40649 14.3536 5.40649 15.2128 5.45535C15.7196 5.46145 16.2216 5.55493 16.6966 5.73167C17.0421 5.86519 17.356 6.06948 17.6179 6.33143C17.8799 6.59339 18.0842 6.90722 18.2177 7.25278C18.3923 7.72808 18.4857 8.22937 18.494 8.73567C18.5322 9.58063 18.542 9.81786 18.542 11.9831C18.542 14.1475 18.542 14.3803 18.5038 15.2297H18.494V15.2288Z" fill="#999999"/>
                            </svg>
                        }
                    </li>
                    <li>
                        {deviceType === 'pc'?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.2324 10.3482C26.1109 9.89776 25.8737 9.48696 25.5442 9.1567C25.2147 8.82644 24.8044 8.58824 24.3542 8.46581C22.685 8.00747 16.0071 8.00001 16.0071 8.00001C16.0071 8.00001 9.33018 7.99255 7.6599 8.43064C7.21 8.5587 6.80058 8.80027 6.47094 9.13215C6.1413 9.46403 5.90251 9.87508 5.7775 10.3258C5.33727 11.995 5.33301 15.4571 5.33301 15.4571C5.33301 15.4571 5.32875 18.9363 5.76577 20.5884C6.01093 21.5019 6.73042 22.2235 7.64497 22.4698C9.33125 22.9281 15.9911 22.9356 15.9911 22.9356C15.9911 22.9356 22.669 22.943 24.3382 22.506C24.7886 22.3838 25.1992 22.1461 25.5296 21.8166C25.8599 21.487 26.0985 21.0769 26.2217 20.6268C26.663 18.9587 26.6662 15.4976 26.6662 15.4976C26.6662 15.4976 26.6875 12.0174 26.2324 10.3482ZM13.871 18.6645L13.8763 12.269L19.4265 15.4721L13.871 18.6645Z" fill="#999999"/>
                            </svg>
                            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6745 7.76116C19.5835 7.42332 19.4055 7.11522 19.1584 6.86753C18.9112 6.61983 18.6035 6.44118 18.2659 6.34936C17.014 6.0056 12.0055 6.00001 12.0055 6.00001C12.0055 6.00001 6.99788 5.99441 5.74517 6.32298C5.40775 6.41903 5.10068 6.6002 4.85345 6.84911C4.60622 7.09802 4.42713 7.40631 4.33337 7.74437C4.0032 8.99629 4 11.5928 4 11.5928C4 11.5928 3.9968 14.2022 4.32457 15.4413C4.50844 16.1264 5.04806 16.6677 5.73397 16.8523C6.99868 17.1961 11.9935 17.2017 11.9935 17.2017C11.9935 17.2017 17.002 17.2073 18.2539 16.8795C18.5917 16.7878 18.8997 16.6096 19.1474 16.3624C19.3952 16.1152 19.5741 15.8077 19.6665 15.4701C19.9975 14.219 19.9999 11.6232 19.9999 11.6232C19.9999 11.6232 20.0159 9.01307 19.6745 7.76116ZM10.4035 13.9983L10.4075 9.20174L14.5701 11.604L10.4035 13.9983Z" fill="#999999"/>
                            </svg>
                        }
                    </li>
                </Footeritem>
            </div>
            <Flexcomp alignItem="flex-end">
                <div>
                    <Footeritem type={null}>
                        <li>오픈북스</li>
                        <li>대표자명 허민재</li>
                        <li>사업자등록번호 432-98-348093</li>
                    </Footeritem>
                    <Footeritem type={null}>
                        <li>서울특별시 강남구 역삼로 512 인테크빌딩 6층, 오픈부스</li>
                        <li className='lastItem'>openbooth@openbooth.net</li>
                    </Footeritem>
                </div>
                <div>
                    Copyright © 2020 openbooth platform.
                </div>
            </Flexcomp>
            <div className={"lanBox"}>
                <Language />
            </div>
        </Mainfooter>
    )
}

interface FlexcompProps {
    alignItem: any
}
const Flexcomp = styled.div`
    position: relative;
    align-items: ${(props: FlexcompProps) => (props.alignItem != null ? props.alignItem : '')};
    ${({theme}) => theme.media.desktop`
    display: flex;
    > div:first-child {
        flex: 1;
    }
    > div:last-child {
        position: absolute;
        right: 0;
        top: 20px;
    }
    `}
    ${({theme}) => theme.media.mobile`
    display: block;
    > div:last-child {
        position: initial;
        top: 0;
        right: 0;
        padding: 24px 0 0 0;
        margin: 0;
    }
    `}
`;

interface FooteritemProps {
    type: any
}
const Footeritem = styled.ul`
list-style: none; margin: 0; padding: 0;
li { 
    position: relative;
    display: inline-block;
    ${({theme}) => theme.media.desktop`
    ${(props: FooteritemProps) => (props.type != null && props.type === 'icons' ? 'width: 40px;' : '')};
    `}
    ${({theme}) => theme.media.mobile`
    ${(props: FooteritemProps) => (props.type != null && props.type === 'icons' ? 'width: 30px;' : '')};
    &.lastItem { margin-left: 0; }
    `}
    margin: ${(props: FooteritemProps) => (props.type != null && props.type === 'icons' ? '0' : '0 8px')};
    text-align: ${(props: FooteritemProps) => (props.type != null && props.type === 'icons' ? 'center' : 'left')};
    &:first-child { margin-left: 0; }
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        margin-top: -8px;
        right: ${(props: FooteritemProps) => (props.type != null && props.type === 'icons' ? '0' : '-8px')};
        width: 1px;
        height: 16px;
        background: #E9E9E9;
    }
    &:last-child:after { display: none; }
    & svg {
        display: inline-block;
        vertical-align: middle;
    }
}
`;

const Mainfooter = styled.div`
    position: relative;
    background: #f7f7f9;
    width: 100%;
    border-top: 1px solid #E9E9E9;
    box-sizing: border-box;
    ${({theme}) => theme.media.desktop`
    height: 246px;
    `}
    ${({theme}) => theme.media.mobile`
    height: auto;
    padding: 0 12px;
    `}
    > div {
        max-width: 1280px;
        font-weight: bold;
        color: #999999;
        margin: 0 auto;
        &:first-child{
            padding-top: 32px;
        }
        ${({theme}) => theme.media.desktop`
        font-size: 14px;
        line-height: 22px;
        padding-bottom: 30px;
        `}
        ${({theme}) => theme.media.mobile`
        &.links { display: none; }
        padding-bottom: 24px;
        font-size: 10px;
        line-height: 18px;
        padding-bottom: 24px;
        &:nth-child(2){
            padding: 20.5px 0;
        }
        `}
        &:last-child{
            padding-bottom: 56px;
        }
    }
    > .lanBox {
        position: absolute;
        right: 0;
        top: 20px;
        ${({theme}) => theme.media.mobile`
        top: 7px;
        right: 12px;
        `}
    }
`;

export default Footer;