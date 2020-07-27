import request from "./common";
import { takeLatest, call, put } from 'redux-saga/effects';
import {SET_IS_EMAIL_OVERLAP} from "../modules/token/token";
import { useSelector, useDispatch } from 'react-redux';
import { setIsEmailOverlapReducer } from "../modules/token/token"

export const checkOverlapEmail = (data: any, successTodo?: any, failTodo?: any) => {
    console.log("api index checkOverlapEmail")
    const axiosRequest = request({
        url: '/emailoverlap',
        method: 'POST',
        params: {
            email: data.email
        },
        successTodo: successTodo,
        failTodo: failTodo
    });
}

/*
export const getToken = (data) => {
return {
    "code": "200",
    "message": "",
    "data":{
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJvcGVuYm9vdGhAb3BlbmJvb3RoLm5ldCIsImNvdW50cnkiOiJSZXB1YmxpYyBvZiBLb3JlYSIsInBob25lIjoiKzgyLTEwLTEyMzQtMTIzNCIsImNvbXBhbnkiOiJCYW5rIG9mIGFtZXJpY2EiLCJkZXBhcnRtZW50IjoiRGVzaWduIHRlYW0iLCJwb3NpdGlvbiI6IlVJL1VYIGRlc2lnbmVyIiwicHJvZmlsZV9pbWFnZSI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF85NjBfNzIwLnBuZyIsImlhdCI6MTU5NDcwMDk4MywiZXhwIjoxNTk0NzA1MDUyLCJqdGkiOiI3ZjI2MjNkMi05YjYxLTRhMDMtOTA5Ny0yNmYxNjc2NmQ4MjgifQ.MYUNxziEZFT7x6G6FobEKEJqYbTWEqE-72qBixNx2zM'
    }
};

    return api.request({
        url: '/login',
        method: 'POST',
        params: {
            email: data.email,
            password: data.password
        }
    });
};

export const sendEmailfindAccount = (data) => {
    api.request({
        url: '/findPwd',
        method: 'POST',
        params: {
            email: data.email
        }
    });
};

export const registNewUser = (data) => {
    api.request({
        url: '/regist',
        method: 'POST',
        params: {
            email: data.email
        }
    });
};

export const savePwd = (data) => {
    api.request({
        url: '/regist',
        method: 'POST',
        params: {
            password: data.password
        }
    });
};
*/