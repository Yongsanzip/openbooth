import React, { Component } from 'react';
import styled from "styled-components";

import {Namecard} from "./../index";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
        companyFields: [{
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
        }],
        userFields: [{
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
        }]
    }
  }

  render(){
    const { data, showMailBtn, showMoreinfoBtn, showLogoutBtn, type } = this.props;
    console.log(showLogoutBtn);
    let list = [];
    if(type == 'company'){
        list = this.state.companyFields;
    }
    else{
        list = this.state.userFields;
    }
    return (
        <Profilecomp type={type}>
            <Namecard type={type} data={data} showMailBtn={showMailBtn} showMoreinfoBtn={showMoreinfoBtn} showLogoutBtn={showLogoutBtn} />
            <div className="details">
                {list && list.length > 0 ?
                    list.map((item, key) => {
                        return (
                            <div key={key}>
                                <div className="fieldname">{item.name}</div>
                                {data[item.fieldname]}
                            </div>
                        )
                    }) : null }
            </div>
        </Profilecomp>
  )
  }
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