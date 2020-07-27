import React, { Component } from 'react';
import styled from "styled-components";
import {connect} from 'react-redux'

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

    const userInfo = {
        "sub": "1234567890",
        "name": "John Doe",
        "email": "openbooth@openbooth.net",
        "country": "Republic of Korea",
        "phone": "+82-10-1234-1234",
        "company": "Bank of america",
        "department": "Design team",
        "position": "UI/UX designer",
        "profile_image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "iat": 1594700983,
        "exp": 1594705052,
        "jti": "7f2623d2-9b61-4a03-9097-26f16766d828"
    };
    
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