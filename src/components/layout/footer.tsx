import React, { Component } from 'react';
import styled from "styled-components";
import Language from "../language";
import {RootState} from "../../modules";
import { useSelector } from 'react-redux';

function Footer(props) {
    let languageData = useSelector((state: RootState) => state.tokenReducer.languageData);

        return (
            <Mainfooter>
                <Flexcomp alignItem="baseline">
                    <div>
                        <Footeritem type={null}>
                            <li>{languageData.privacyPolicy}</li>
                            <li>{languageData.termsUse}</li>
                            <li>{languageData.participationRules}</li>
                            <li>{languageData.serviceIntro}</li>
                            <li>{languageData.contact}</li>
                        </Footeritem>
                    </div>
                    <div className={"lanBox"}>
                        <Language lan={props.lan} setLanguage={props.setLanguage} />
                    </div>
                </Flexcomp>
                <div>
                    <Footeritem type={'icons'}>
                        <li>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6667 12.6667V10.6667C17.6667 9.8 17.8667 9.33333 19.2667 9.33333H21V6H18.3333C15 6 13.6667 8.2 13.6667 10.6667V12.6667H11V16H13.6667V26H17.6667V16H20.6L21 12.6667H17.6667Z" fill="#999999"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9915 10.5126C14.5387 10.5126 13.1454 11.0898 12.1181 12.1171C11.0908 13.1444 10.5137 14.5377 10.5137 15.9905C10.5137 17.4433 11.0908 18.8366 12.1181 19.8639C13.1454 20.8912 14.5387 21.4684 15.9915 21.4684C17.4444 21.4684 18.8377 20.8912 19.865 19.8639C20.8923 18.8366 21.4694 17.4433 21.4694 15.9905C21.4694 14.5377 20.8923 13.1444 19.865 12.1171C18.8377 11.0898 17.4444 10.5126 15.9915 10.5126ZM15.9915 19.548C15.0477 19.548 14.1425 19.1731 13.4751 18.5057C12.8078 17.8383 12.4328 16.9331 12.4328 15.9893C12.4328 15.0455 12.8078 14.1403 13.4751 13.4729C14.1425 12.8055 15.0477 12.4306 15.9915 12.4306C16.9354 12.4306 17.8405 12.8055 18.5079 13.4729C19.1753 14.1403 19.5502 15.0455 19.5502 15.9893C19.5502 16.9331 19.1753 17.8383 18.5079 18.5057C17.8405 19.1731 16.9354 19.548 15.9915 19.548Z" fill="#999999"/>
                                <path d="M21.6862 11.5884C22.3915 11.5884 22.9633 11.0166 22.9633 10.3113C22.9633 9.606 22.3915 9.03424 21.6862 9.03424C20.9809 9.03424 20.4092 9.606 20.4092 10.3113C20.4092 11.0166 20.9809 11.5884 21.6862 11.5884Z" fill="#999999"/>
                                <path d="M26.1013 9.01286C25.827 8.30465 25.4079 7.6615 24.8708 7.12459C24.3337 6.58767 23.6904 6.16882 22.9821 5.89484C22.1532 5.5837 21.2775 5.41546 20.3924 5.39728C19.2516 5.34753 18.8902 5.33331 15.9973 5.33331C13.1044 5.33331 12.7336 5.33331 11.6022 5.39728C10.7177 5.41453 9.84272 5.5828 9.01493 5.89484C8.30643 6.1685 7.66295 6.58724 7.12579 7.12419C6.58863 7.66115 6.16965 8.30447 5.89572 9.01286C5.58452 9.84166 5.41666 10.7174 5.39935 11.6025C5.34841 12.7422 5.33301 13.1035 5.33301 15.9976C5.33301 18.8905 5.33301 19.259 5.39935 20.3927C5.41712 21.2788 5.58416 22.1531 5.89572 22.9835C6.17042 23.6917 6.58981 24.3347 7.1271 24.8716C7.66439 25.4085 8.30776 25.8274 9.01611 26.1016C9.84233 26.4252 10.7177 26.6055 11.6046 26.6347C12.7454 26.6844 13.1067 26.6998 15.9997 26.6998C18.8926 26.6998 19.2634 26.6998 20.3948 26.6347C21.2798 26.6167 22.1554 26.4488 22.9844 26.1383C23.6926 25.8637 24.3357 25.4445 24.8727 24.9074C25.4098 24.3703 25.829 23.7272 26.1036 23.0191C26.4152 22.1898 26.5822 21.3155 26.6 20.4294C26.6509 19.2898 26.6663 18.9285 26.6663 16.0343C26.6663 13.1402 26.6663 12.773 26.6 11.6393C26.5862 10.7416 26.4175 9.85308 26.1013 9.01286ZM24.6583 20.305C24.6507 20.9878 24.5261 21.6641 24.2899 22.3047C24.112 22.7654 23.8397 23.1838 23.4904 23.5328C23.1411 23.8819 22.7226 24.154 22.2618 24.3317C21.6283 24.5668 20.9591 24.6914 20.2834 24.7001C19.158 24.7522 18.8405 24.7653 15.9547 24.7653C13.0665 24.7653 12.7715 24.7653 11.6247 24.7001C10.9494 24.6918 10.2805 24.5672 9.64753 24.3317C9.18515 24.1551 8.76497 23.8835 8.41417 23.5344C8.06338 23.1852 7.78979 22.7663 7.61111 22.3047C7.37826 21.671 7.25371 21.0026 7.24268 20.3275C7.19174 19.2021 7.17989 18.8846 7.17989 15.9988C7.17989 13.1118 7.17989 12.8168 7.24268 11.6689C7.25033 10.9865 7.37495 10.3106 7.61111 9.67035C7.97243 8.73565 8.71284 7.99998 9.64753 7.64221C10.2808 7.40782 10.9495 7.28322 11.6247 7.27378C12.7513 7.22284 13.0676 7.20863 15.9547 7.20863C18.8417 7.20863 19.1378 7.20863 20.2834 7.27378C20.9591 7.28191 21.6284 7.40655 22.2618 7.64221C22.7225 7.82023 23.141 8.09262 23.4902 8.44189C23.8395 8.79116 24.1119 9.2096 24.2899 9.67035C24.5228 10.3041 24.6473 10.9725 24.6583 11.6475C24.7093 12.7742 24.7223 13.0905 24.7223 15.9775C24.7223 18.8633 24.7223 19.1737 24.6714 20.3062H24.6583V20.305Z" fill="#999999"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.2324 10.3482C26.1109 9.89776 25.8737 9.48696 25.5442 9.1567C25.2147 8.82644 24.8044 8.58824 24.3542 8.46581C22.685 8.00747 16.0071 8.00001 16.0071 8.00001C16.0071 8.00001 9.33018 7.99255 7.6599 8.43064C7.21 8.5587 6.80058 8.80027 6.47094 9.13215C6.1413 9.46403 5.90251 9.87508 5.7775 10.3258C5.33727 11.995 5.33301 15.4571 5.33301 15.4571C5.33301 15.4571 5.32875 18.9363 5.76577 20.5884C6.01093 21.5019 6.73042 22.2235 7.64497 22.4698C9.33125 22.9281 15.9911 22.9356 15.9911 22.9356C15.9911 22.9356 22.669 22.943 24.3382 22.506C24.7886 22.3838 25.1992 22.1461 25.5296 21.8166C25.8599 21.487 26.0985 21.0769 26.2217 20.6268C26.663 18.9587 26.6662 15.4976 26.6662 15.4976C26.6662 15.4976 26.6875 12.0174 26.2324 10.3482ZM13.871 18.6645L13.8763 12.269L19.4265 15.4721L13.871 18.6645Z" fill="#999999"/>
                            </svg>
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
                            <li>openbooth@openbooth.net</li>
                        </Footeritem>
                    </div>
                    <div>
                        Copyright © 2020 openbooth platform.
                    </div>
                </Flexcomp>
            </Mainfooter>
        )
}

interface FlexcompProps {
    alignItem: any
}
const Flexcomp = styled.div`
    position: relative;
    display: flex;
    align-items: ${(props: FlexcompProps) => (props.alignItem != null ? props.alignItem : '')};
    > div:first-child {
        flex: 1;
    }
    > div:last-child {
        position: absolute;
        right: 0;
        top: 20px;
        &.lanBox {
            top: 13px;
        }
    }
`;

interface FooteritemProps {
    type: any
}
const Footeritem = styled.ul`
list-style: none; margin: 0; padding: 0;
li { 
    position: relative;
    display: inline-block;
    width: ${(props: FooteritemProps) => (props.type != null && props.type == 'icons' ? '40px' : '')};
    margin: ${(props: FooteritemProps) => (props.type != null && props.type == 'icons' ? '0' : '0 8px')};
    text-align: ${(props: FooteritemProps) => (props.type != null && props.type == 'icons' ? 'center' : 'left')};
    &:first-child { margin-left: 0; }
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        margin-top: -8px;
        right: ${(props: FooteritemProps) => (props.type != null && props.type == 'icons' ? '0' : '-8px')};
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
    background: #f7f7f9;
    width: 100%;
    height: 246px;
    border-top: 1px solid #E9E9E9;
    box-sizing: border-box;
    > div {
        max-width: 1280px;
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        color: #999999;
        padding-bottom: 30px;
        margin: 0 auto;
        &:first-child{
            padding-top: 32px;
        }
        &:last-child{
            padding-bottom: 56px;
        }
    }
`;

export default Footer;