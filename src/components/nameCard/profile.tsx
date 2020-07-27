import React, { Component } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../modules';
import base64 from 'base-64';

import {Namecard} from "./../index";

function Profile(props) {
    const companyFields = [{
        name: 'Name',
        fieldname: 'name'
    },{
        name: 'Field',
        fieldname: 'email',
        type: 'hash'
    },{
        name: 'Website',
        fieldname: 'link'
    },{
        name: 'Email',
        fieldname: 'email'
    },{
        name: 'SNS',
        fieldname: 'sns'
    },{
        name: 'Manager',
        fieldname: 'manager'
    }];

    const userFields = [{
        name: 'Country',
        fieldname: 'country'
    },{
        name: 'Email',
        fieldname: 'email'
    },{
        name: 'Phone number',
        fieldname: 'phone'
    },{
        name: 'Company / Affiliation',
        fieldname: 'company'
    },{
        name: 'Department',
        fieldname: 'department'
    },{
        name: 'Position',
        fieldname: 'position'
    }];

    const token = sessionStorage.getItem('token');
    const tokenData = token != null ? token.split('.') : new Array();
    const userInfo = JSON.parse(base64.decode(tokenData[1]));
    
    let list = userFields;
    if(props.type == 'company'){
        list = companyFields;
    }
    return (
        <Profilecomp type={props.type}>
            <Namecard type={props.type} data={userInfo} showMailBtn={props.showMailBtn} showMoreinfoBtn={props.showMoreinfoBtn} showLogoutBtn={props.showLogoutBtn} />
            <div className="details">
                {list && list.length > 0 ?
                    list.map((item, key) => {
                        return (
                            <div key={key}>
                                <div className="fieldname">{item.name}</div>
                                {userInfo[item.fieldname]}
                            </div>
                        )
                    }) : null }
            </div>
        </Profilecomp>
  )
}

const Profilecomp = styled.div`
> div {    
    padding: ${props => (props.type != null && props.type == 'company' ?  '24px' : '32px 24px;')};
}
.details {
    padding: 0 32px 32px 32px;
    border-top: 1px solid #E9E9E9;
    box-sizing: border-box;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #999999;
    & > div {
        padding-top: 24px;
        & > * {
            display: ${props => (props.type != null && props.type == 'company' ?  'inline-block' : '')};
        }
    }
    .fieldname {
        font-weight: bold;
        ${props => (props.type != null && props.type == 'company' ?  'width: 80px; margin-right: 3px;' : '')}
    }
}
`;

export default Profile;