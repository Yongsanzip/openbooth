import {put, takeLatest} from "@redux-saga/core/effects";
import {GET_TOKEN, EMAIL_OVERLAP_CONFIRM, GET_REGRESH_TOKEN, setIsLoginReducer, setIsEmailOverlapReducer} from "./token";
import {fetch} from "./../fetch";
import axios from 'axios';

async function getTokenF(){
    const response = await axios("http://localhost:4000/getToken", {
        method : "POST",
        headers: new Headers()
    });
    console.log(response);
}

function* getToken_saga(){
    // getTokenF();
    // return;
    //
    // fetch()

    if(true){
        const response = {
            "code": "200",
            "message": "",
            "data":{
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJvcGVuYm9vdGhAb3BlbmJvb3RoLm5ldCIsImNvdW50cnkiOiJSZXB1YmxpYyBvZiBLb3JlYSIsInBob25lIjoiKzgyLTEwLTEyMzQtMTIzNCIsImNvbXBhbnkiOiJCYW5rIG9mIGFtZXJpY2EiLCJkZXBhcnRtZW50IjoiRGVzaWduIHRlYW0iLCJwb3NpdGlvbiI6IlVJL1VYIGRlc2lnbmVyIiwicHJvZmlsZV9pbWFnZSI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF85NjBfNzIwLnBuZyIsImlhdCI6MTU5NDcwMDk4MywiZXhwIjoxNTk0NzA1MDUyLCJqdGkiOiI3ZjI2MjNkMi05YjYxLTRhMDMtOTA5Ny0yNmYxNjc2NmQ4MjgifQ.MYUNxziEZFT7x6G6FobEKEJqYbTWEqE-72qBixNx2zM"
            }
        }
        if(response.code == "200"){
            sessionStorage.setItem('token', response.data.token);
            yield put(setIsLoginReducer(true));
        }
        else{
            yield put(setIsLoginReducer(false));
        }
    }
}
function* isEmailOverlapConfirm_saga(action: any) {
    console.log("isEmailOverlapConfirm_saga saga function")
    const response = {
        "code": "200",
        "message": "",
        "data":{}
    }
    if(response.code == "200"){
        yield put(setIsEmailOverlapReducer(true));
    }
    else{
        yield put(setIsEmailOverlapReducer(false));
    }
}

function * getRefresjToken_saga(){
    if(true){
        const response = {
            "code": "200",
            "message": "",
            "data":{
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJvcGVuYm9vdGhAb3BlbmJvb3RoLm5ldCIsImNvdW50cnkiOiJSZXB1YmxpYyBvZiBLb3JlYSIsInBob25lIjoiKzgyLTEwLTEyMzQtMTIzNCIsImNvbXBhbnkiOiJCYW5rIG9mIGFtZXJpY2EiLCJkZXBhcnRtZW50IjoiRGVzaWduIHRlYW0iLCJwb3NpdGlvbiI6IlVJL1VYIGRlc2lnbmVyIiwicHJvZmlsZV9pbWFnZSI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF85NjBfNzIwLnBuZyIsImlhdCI6MTU5NDcwMDk4MywiZXhwIjoxNTk0NzA1MDUyLCJqdGkiOiI3ZjI2MjNkMi05YjYxLTRhMDMtOTA5Ny0yNmYxNjc2NmQ4MjgifQ.MYUNxziEZFT7x6G6FobEKEJqYbTWEqE-72qBixNx2zM"
            }
        }
        if(response.code == "200"){
            sessionStorage.setItem('token', response.data.token);
            yield put(setIsLoginReducer(true));
        }
        else{
            yield put(setIsLoginReducer(false));
        }
    }
}

export function* tokenSaga() {
    yield takeLatest (GET_TOKEN, getToken_saga);
    yield takeLatest (GET_REGRESH_TOKEN, getRefresjToken_saga);
    yield takeLatest (EMAIL_OVERLAP_CONFIRM, isEmailOverlapConfirm_saga);
}