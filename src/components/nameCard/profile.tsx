import React, { useState } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../modules';
import base64 from 'base-64';
import { Hash } from "./../index"

import {Img, Namecard, UserinfoModal} from "./../index";

function Profile(props) {
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const [isShowModal, setIsShowModal] = useState(false);
    const companyFields = [{
        name: languageData.name,
        fieldname: 'company_name'
    },{
        name: languageData.field,
        fieldname: 'company_field',
        type: 'hash'
    },{
        name: languageData.website,
        fieldname: 'website'
    },{
        name: languageData.email,
        fieldname: 'email'
    },{
        name: languageData.sns,
        fieldname: 'sns'
    },{
        name: languageData.manager,
        fieldname: 'manager'
    }];

    const userFields = [{
        name: languageData.country,
        fieldname: 'country'
    },{
        name: languageData.email,
        fieldname: 'email'
    },{
        name: languageData.phone,
        fieldname: 'phone'
    },{
        name: languageData.company,
        fieldname: 'company'
    },{
        name: languageData.department,
        fieldname: 'department'
    },{
        name: languageData.position,
        fieldname: 'position'
    }];

    const _onClickSns = (link) => {
        window.location.href = link;
    }

    let list = userFields;
    let data:any;
    if(props.type == 'company'){
        list = companyFields;
        data = props.data;
    }
    else if (props.data == null) {
        const token = sessionStorage.getItem('token');
        const tokenData = token != null ? token.split('.') : new Array();
        const userInfo = JSON.parse(base64.decode(tokenData[1]));
        data = userInfo;
    }
    else{
        data = props.data;
    }

    const _showModal = ()=> {
        setIsShowModal(true)
    }
    const _closeModal = ()=> {
        setIsShowModal(false)
    }

    return (
        <Profilecomp type={props.type}>
            <Namecard type={props.type} size={props.size} isMobile={props.isMobile} data={data} showMailBtn={props.showMailBtn} showMoreinfoBtn={props.showMoreinfoBtn} showLogoutBtn={props.showLogoutBtn} />
            <div className="details">
                {list && list.length > 0 ?
                    list.map((item, key) => {
                        if(item.fieldname == "sns"){
                            return (
                                <div key={key}>
                                    <div className="fieldname">{item.name}</div>
                                    {data['sns'] != null && data['sns'].length > 0?
                                        data['sns'].map((snsItem, snsKey) => {
                                            switch (snsItem.type) {
                                                case "facebook":
                                                    return <div key={snsKey} className='snsIcon' onClick={()=>_onClickSns(snsItem.value)}><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.66667 6.66667V4.66667C6.66667 3.8 6.86667 3.33333 8.26667 3.33333H10V0H7.33333C4 0 2.66667 2.2 2.66667 4.66667V6.66667H0V10H2.66667V20H6.66667V10H9.6L10 6.66667H6.66667Z" fill="#999999"/>
                                                    </svg></div>;
                                                case "instagram":
                                                    return <div key={snsKey} className='snsIcon' onClick={()=>_onClickSns(snsItem.value)}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.9918 5.5127C9.53896 5.5127 8.14564 6.08983 7.11835 7.11712C6.09105 8.14442 5.51392 9.53774 5.51392 10.9906C5.51392 12.4434 6.09105 13.8367 7.11835 14.864C8.14564 15.8913 9.53896 16.4684 10.9918 16.4684C12.4446 16.4684 13.8379 15.8913 14.8652 14.864C15.8925 13.8367 16.4696 12.4434 16.4696 10.9906C16.4696 9.53774 15.8925 8.14442 14.8652 7.11712C13.8379 6.08983 12.4446 5.5127 10.9918 5.5127ZM10.9918 14.5481C10.0479 14.5481 9.14278 14.1732 8.47539 13.5058C7.808 12.8384 7.43306 11.9332 7.43306 10.9894C7.43306 10.0455 7.808 9.14037 8.47539 8.47298C9.14278 7.80559 10.0479 7.43066 10.9918 7.43066C11.9356 7.43066 12.8408 7.80559 13.5082 8.47298C14.1756 9.14037 14.5505 10.0455 14.5505 10.9894C14.5505 11.9332 14.1756 12.8384 13.5082 13.5058C12.8408 14.1732 11.9356 14.5481 10.9918 14.5481Z" fill="#999999"/>
                                                        <path d="M16.6865 6.58843C17.3918 6.58843 17.9635 6.01667 17.9635 5.31136C17.9635 4.60606 17.3918 4.0343 16.6865 4.0343C15.9812 4.0343 15.4094 4.60606 15.4094 5.31136C15.4094 6.01667 15.9812 6.58843 16.6865 6.58843Z" fill="#999999"/>
                                                        <path d="M21.1015 4.01292C20.8273 3.30471 20.4082 2.66156 19.871 2.12465C19.3339 1.58773 18.6906 1.16888 17.9823 0.894902C17.1534 0.58376 16.2778 0.41552 15.3926 0.397345C14.2518 0.34759 13.8905 0.333374 10.9976 0.333374C8.10461 0.333374 7.73382 0.333374 6.60247 0.397345C5.71799 0.41459 4.84296 0.582865 4.01517 0.894902C3.30667 1.16856 2.6632 1.5873 2.12604 2.12426C1.58888 2.66121 1.16989 3.30453 0.895965 4.01292C0.584761 4.84173 0.416906 5.71745 0.399593 6.60259C0.348653 7.74223 0.333252 8.10355 0.333252 10.9977C0.333252 13.8906 0.333252 14.259 0.399593 15.3928C0.417363 16.2789 0.584399 17.1532 0.895965 17.9836C1.17066 18.6917 1.59005 19.3348 2.12734 19.8717C2.66463 20.4086 3.30801 20.8275 4.01636 21.1016C4.84258 21.4253 5.71797 21.6056 6.60484 21.6347C7.74566 21.6845 8.10698 21.6999 10.9999 21.6999C13.8929 21.6999 14.2637 21.6999 15.395 21.6347C16.2801 21.6167 17.1557 21.4489 17.9847 21.1383C18.6928 20.8637 19.3359 20.4445 19.873 19.9075C20.41 19.3704 20.8293 18.7273 21.1039 18.0191C21.4154 17.1899 21.5825 16.3156 21.6002 15.4295C21.6512 14.2898 21.6666 13.9285 21.6666 11.0344C21.6666 8.14027 21.6666 7.77303 21.6002 6.63931C21.5865 5.74166 21.4177 4.85314 21.1015 4.01292ZM19.6586 15.3051C19.651 15.9878 19.5263 16.6642 19.2902 17.3048C19.1123 17.7655 18.8399 18.1838 18.4906 18.5329C18.1413 18.882 17.7228 19.1541 17.262 19.3317C16.6285 19.5668 15.9593 19.6915 15.2836 19.7002C14.1582 19.7523 13.8407 19.7653 10.9549 19.7653C8.06671 19.7653 7.77172 19.7653 6.62497 19.7002C5.94963 19.6919 5.28077 19.5673 4.64778 19.3317C4.18539 19.1552 3.76521 18.8836 3.41442 18.5344C3.06363 18.1853 2.79004 17.7664 2.61135 17.3048C2.3785 16.6711 2.25395 16.0027 2.24292 15.3276C2.19198 14.2022 2.18013 13.8847 2.18013 10.9989C2.18013 8.11184 2.18013 7.81686 2.24292 6.66893C2.25058 5.98659 2.3752 5.31062 2.61135 4.67041C2.97267 3.73571 3.71308 3.00004 4.64778 2.64227C5.28109 2.40788 5.94975 2.28328 6.62497 2.27384C7.75159 2.2229 8.06789 2.20869 10.9549 2.20869C13.8419 2.20869 14.1381 2.20869 15.2836 2.27384C15.9594 2.28197 16.6287 2.40661 17.262 2.64227C17.7228 2.8203 18.1412 3.09268 18.4905 3.44195C18.8398 3.79122 19.1121 4.20966 19.2902 4.67041C19.523 5.30414 19.6476 5.97254 19.6586 6.6476C19.7095 7.77421 19.7226 8.09052 19.7226 10.9775C19.7226 13.8634 19.7226 14.1737 19.6716 15.3063H19.6586V15.3051Z" fill="#999999"/>
                                                    </svg></div>
                                                        ;
                                                case "youtube":
                                                    return <div key={snsKey} className='snsIcon' onClick={()=>_onClickSns(snsItem.value)}><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.2326 2.34821C21.1112 1.89776 20.8739 1.48696 20.5444 1.1567C20.2149 0.826443 19.8046 0.588243 19.3545 0.465812C17.6852 0.00746927 11.0073 8.09721e-06 11.0073 8.09721e-06C11.0073 8.09721e-06 4.33043 -0.00745351 2.66014 0.430637C2.21025 0.558702 1.80083 0.800271 1.47119 1.13215C1.14155 1.46403 0.902755 1.87508 0.777739 2.32583C0.337517 3.99505 0.333254 7.45713 0.333254 7.45713C0.333254 7.45713 0.32899 10.9363 0.766014 12.5884C1.01117 13.5019 1.73067 14.2235 2.64522 14.4698C4.33149 14.9281 10.9913 14.9356 10.9913 14.9356C10.9913 14.9356 17.6693 14.943 19.3385 14.506C19.7888 14.3838 20.1995 14.1461 20.5298 13.8166C20.8601 13.487 21.0987 13.0769 21.2219 12.6268C21.6632 10.9587 21.6664 7.49764 21.6664 7.49764C21.6664 7.49764 21.6877 4.01743 21.2326 2.34821ZM8.87121 10.6645L8.87654 4.26899L14.4268 7.47206L8.87121 10.6645Z" fill="#999999"/>
                                                    </svg></div>
                                                        ;
                                            }
                                        })
                                        : null
                                    }
                                </div>
                            )
                        }
                        else if(item.fieldname == 'manager') {
                            return (
                                <div key={key} className={'manager'} onClick={_showModal}>
                                    <div className="fieldname">{item.name}</div>
                                    <Img src={data['manager_info'].profile_image} full={true} width={'32px'} height={'32px'} />
                                    <div>{data['manager_info'].name != null? data['manager_info'].name : ''}</div>
                                </div>
                            )
                        }
                        else if(item.fieldname == 'company_field') {
                            return (
                                <div key={key} className={'companyField'}>
                                    <div className="fieldname">{item.name}</div>
                                    {data['company_field'] != null && data['company_field'].length > 0?
                                        data['company_field'].map((fieldItem, fieldKey) => {
                                            return <Hash key={fieldKey} name={fieldItem} />
                                        })
                                        : null
                                    }
                                </div>
                            )
                        }
                        else{
                            return (
                                <div key={key}>
                                    <div className="fieldname">{item.name}</div>
                                    {data[item.fieldname] != null? data[item.fieldname] : ''}
                                </div>
                            )
                        }
                    }) : null }
            </div>
            {props.type == 'company'? <UserinfoModal showModal={isShowModal} handleCloseModal={_closeModal} data={props.data.manager_info} /> : null }
        </Profilecomp>
    )
}

interface ProfilecompProps {
    type: any
}
const Profilecomp = styled.div`
> div {    
    ${({theme}) => theme.media.desktop`
    ${(props: ProfilecompProps) => (props.type != null && props.type == 'company' ?  'padding: 24px' : 'padding: 32px 24px;')};
    `}
    ${({theme}) => theme.media.mobile`
    padding: 16px;
    `}
}
.details {
    border-top: 1px solid #E9E9E9;
    box-sizing: border-box;
    font-weight: normal;
    color: #999999;
    ${({theme}) => theme.media.desktop`
    font-size: 16px;
    line-height: 24px;
    padding: 0 32px 32px 32px;
    `}
    ${({theme}) => theme.media.mobile`
    font-size: 12px;
    line-height: 20px;
    padding: 0 16px 16px 16px;
    `}
    & > div {
        height: ${(props: ProfilecompProps) => (props.type != null && props.type == 'company' ?  '24px' : '')};
        & > * {
            display: ${(props: ProfilecompProps) => (props.type != null && props.type == 'company' ?  'inline-block' : '')};
            vertical-align: ${(props: ProfilecompProps) => (props.type != null && props.type == 'company' ?  'middle' : '')};
        }
        ${({theme}) => theme.media.desktop`
        padding-top: 24px;
        `}
        ${({theme}) => theme.media.mobile`
        padding-top: 16px;
        `}
    }
    .fieldname {
        font-weight: bold;
        ${(props: ProfilecompProps) => (props.type != null && props.type == 'company' ?  'width: 80px; margin-right: 3px;' : '')}
        ${({theme}) => theme.media.desktop`
        margin-bottom: 4px;
        `}
        ${({theme}) => theme.media.mobile`
        margin-bottom: 0;
        `}
    }
    
    & .snsIcon {
        position: relative;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        :last-child { margin-right: 0 }
        svg {
             position: absolute;
              top: 50%;
              -webkit-transform: translateY(-50%);
              -ms-transform: translateY(-50%);
              transform: translateY(-50%);
              left: 0;
              right: 0;
              margin: auto;
              text-align: center;
        }
    }
    
    & .companyField {
        > *{
            margin-right: 8px;
            :last-child { margin-right: 0 }
        }
    }
    & .manager {
        position: relative;
        > *{
            :nth-child(2){
                position: absolute;
                border-radius: 50%;
                overflow: hidden;
                position: absolute;
                top: 50%;
                margin-top: -4px;
            }
            :last-child {
                margin-left: 36px;
            }
        }
    }
}
`;

export default Profile;