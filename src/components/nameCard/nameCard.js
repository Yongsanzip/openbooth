import React, {Component, createRef} from 'react';
import styled from "styled-components";
import {Button, Img} from "./../index";

class Namecard extends Component {
  constructor() {
    super();
    this.sendMailBtn = createRef();
      this.moreinfoBtn = createRef();
  }

    componentDidMount() {
        if(this.sendMailBtn.current != null) this.sendMailBtn.current.addEventListener('click', this._onClickMailBtn);
        if(this.moreinfoBtn.current != null) this.moreinfoBtn.current.addEventListener('click', this._onClickMoreinfoBtn);
    }
    componentWillUnmount() {
        if(this.sendMailBtn.current != null) this.sendMailBtn.current.removeEventListener('click', this._onClickMailBtn);
        if(this.moreinfoBtn.current != null) this.moreinfoBtn.current.removeEventListener('click', this._onClickMoreinfoBtn);
    }

  _onClickMailBtn = (e) => {
      e.stopPropagation();
      this.props.showMailBtn();
  }

    _onClickMoreinfoBtn = (e) => {
        e.stopPropagation();
        this.props.showMoreinfoBtn();
    }

  render(){
    const { data, showLogoutBtn, showMailBtn, showMoreinfoBtn, type } = this.props;
      const logoutBtnStyle = {
          'font-size': '12px',
          'line-height': '20px',
          width: '64px',
          height: '24px',
          padding: 0,
          'margin-left': '8px'
      }
    return (
        <Userinfocomp className="profile">
            <Img src={data.img} />
            <div className="profileInfo">
                <div className="mentorName">
                    {data.name}
                    {!showLogoutBtn? '' :
                        <Button style={logoutBtnStyle} _clickBtn={showLogoutBtn}>Logout</Button>
                    }
                </div>
                {type == null || type != 'company'?
                    <div className="mentorInfo">{data.email}<br/>{data.ltd}</div>
                    : <div className="mentorInfo">{data.content}</div>
                }
            </div>
            <MentorInfoBtn>
                {!showMailBtn? '' :
                    <button ref={this.sendMailBtn} className="sendMailBtn">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V4L8.94 8.34C9.59 8.75 10.41 8.75 11.06 8.34L18 4V13C18 13.55 17.55 14 17 14ZM10 7L2 2H18L10 7Z" fill="#999999"/>
                    </svg>
                    </button>
                }
                {!showMoreinfoBtn? '' :
                    <button ref={this.moreinfoBtn}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM6.715 4C7.866 4 8.715 4.849 8.715 6C8.715 7.151 7.866 8 6.715 8C5.564 8 4.715 7.151 4.715 6C4.715 4.849 5.563 4 6.715 4ZM10.43 12H3V11.535C3 10.162 4.676 8.75 6.715 8.75C8.754 8.75 10.43 10.162 10.43 11.535V12ZM17 11H13V9H17V11ZM17 7H12V5H17V7Z" fill="#999999"/>
                    </svg>
                    </button>
                }
            </MentorInfoBtn>
        </Userinfocomp>
  )
  }
}

const Userinfocomp = styled.div`
    display: flex;
    // margin-bottom: 16px;
    > *:first-child {
        width: 80px;
        height: 80px;
        margin-right: 18px;
        border-radius: 50%;
    }
    .profileInfo {
        flex: 1;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        color: #999999;
        > div.mentorName {
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            margin: 6px 0;
            > * {
                display: inline-block;
            }
        }
    }
`;

const MentorInfoBtn = styled.div`
    height: 80px;
    line-height: 80px;
    vertical-align: middle;
    button {
        width: 40px;
        height: 25px;
        line-height: 25px;
        vertical-align: middle;
        background: transparent;
        border: 0;
        &:focus {
            outline: 0;
        }
        &.sendMailBtn {
            position: absolute;
            right: 10px;
            height: 80px;
        }
    }
`;

export default Namecard;