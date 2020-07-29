import {put, call, takeLatest} from "@redux-saga/core/effects";
import {
    GET_TOKEN,
    EMAIL_OVERLAP_CONFIRM,
    GET_REGRESH_TOKEN,
    setLoginReducer,
    setLoginFailedReducer,
    logoutReducer,
    setIsOverlapEmailReducer_ture,
    setIsOverlapEmailReducer_false,
    isLanguageChangefalseReducer,
    SET_LOGIN_FAILED, SEND_FIND_PWD_MAIL, REGIST, SET_NEW_PASSWORD, IS_LANGUAGE_CHANGE_TRUE, setLanguage
} from "./token";

import {getToken, getRefreshToken, checkEmailOverlap, sendFindPwdMail, regist, setNewPassword} from './../../api/index'


function* getToken_saga(action){
    try {
        const params = {
            email: action.payload.email,
            password: action.payload.password
        };
        const { data } = yield call(getToken, params);
        console.log("gettoken::", data);
        if(data.token != null){
            sessionStorage.setItem('token', data.token);
            yield put(setLoginReducer());
        }
        else{
            yield put(setLoginFailedReducer());
        }
    } catch (error) {
        console.log("catch")
        yield put(logoutReducer());
    }
}

function * getRefresjToken_saga(action){
    try {
        const params = {
            email: action.payload.email
        };
        const { data } = yield call(getRefreshToken, params);
        if(data.token != null){
            //토큰 갱신 후 이벤트 없음..
            sessionStorage.setItem('token', data.token);
            // yield put(setLoginReducer());
        }
        else{
            //토큰 갱신 실패 시 동작 > 로그아웃?
            yield put(logoutReducer());
        }
    } catch (error) {
        yield put(logoutReducer());
    }
}
function* isEmailOverlapConfirm_saga(action: any) {
    try {
        const params = {
            email: action.payload.email
        };
        const { data } = yield call(checkEmailOverlap, params);
        if(data.isOverlap === true){
            //이메일 중복
            yield put(setIsOverlapEmailReducer_ture());
        }
        else{
            //이메일 중복 아님
            yield put(setIsOverlapEmailReducer_false());
        }
    } catch (error) {
        // yield put(logoutReducer());
    }
}
function* sendFindPwdMail_saga(action: any) {
    try {
        const params = {
            email: action.payload.email
        };
        const { data } = yield call(sendFindPwdMail, params);
        //메일 전송 후 동작 없음

    } catch (error) {
        // yield put(logoutReducer());
    }
}
function* setNewPassword_saga(action: any) {
    try {
        const params = {
            password: action.payload.password
        };
        const { data } = yield call(setNewPassword, params);
        if(data != null){
            //성공 시 로그인 화면 이동
            window.location.href = window.location.origin;
        }

    } catch (error) {
        // yield put(logoutReducer());
    }
}
function* regist_saga(action: any) {
    try {
        console.log(action);
        const params = {
            email: action.payload.email
        };
        const { data } = yield call(regist, params);
        if(data){
            window.location.reload();
        }

    } catch (error) {
        // yield put(logoutReducer());
    }
}
function* setLanguageChangeFalse_saga() {
    yield put(isLanguageChangefalseReducer());
}

export function* tokenSaga() {
    yield takeLatest (GET_TOKEN, getToken_saga);
    yield takeLatest (GET_REGRESH_TOKEN, getRefresjToken_saga);
    yield takeLatest (EMAIL_OVERLAP_CONFIRM, isEmailOverlapConfirm_saga);
    yield takeLatest (SEND_FIND_PWD_MAIL, sendFindPwdMail_saga);
    yield takeLatest (SET_NEW_PASSWORD, setNewPassword_saga);
    yield takeLatest (REGIST, regist_saga);
    yield takeLatest (IS_LANGUAGE_CHANGE_TRUE, setLanguageChangeFalse_saga);
}