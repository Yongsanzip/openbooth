import {call, put, takeLatest} from "@redux-saga/core/effects";
import {
    GET_BOOTH_DATA,
    GET_BOOTH_BANNER_DATA,
    GET_DATA,
    GET_COMPANY_DETAIL,
    setExhibitionReducer,
    setBoothBannerReducer,
    setBoothListReducer,
    setCompanyDetailDataReducer
} from "./exhibition";
import {getBoothBanner, getExhibition, getExhibitionBooth, getCompanyDetailData} from './../../api/index'

function * getBoothBanner_saga(){
    try {
        const params = {};
        const { data } = yield call(getBoothBanner, params);

        if(data != null){
            yield put(setBoothBannerReducer(data));
        }
        else{
            yield put(setBoothBannerReducer({}));
        }
    } catch (error) {
        console.log("catch")
    }
}
function * getExhibition_saga(){
    try {
        const params = {};
        const { data } = yield call(getExhibition, params);

        if(data != null){
            yield put(setExhibitionReducer(data));
        }
        else{
            yield put(setExhibitionReducer({}));
        }
    } catch (error) {
        console.log("catch")
    }
}
function * getExhibitionBooth_saga(){
    try {
        const params = {};
        const { data } = yield call(getExhibitionBooth, params);

        if(data != null){
            yield put(setBoothListReducer(data));
        }
        else{
            yield put(setBoothListReducer({}));
        }
    } catch (error) {
        console.log("catch")
    }
}
function * getCompanyDetailData_saga(){
    try {
        const params = {};
        const { data } = yield call(getCompanyDetailData, params);

        if(data != null){
            yield put(setCompanyDetailDataReducer(data));
        }
        else{
            yield put(setCompanyDetailDataReducer({}));
        }
    } catch (error) {
        console.log("catch")
    }
}

export function* exhibitionSaga() {
    yield takeLatest (GET_DATA, getExhibition_saga);
    yield takeLatest (GET_BOOTH_BANNER_DATA, getBoothBanner_saga);
    yield takeLatest (GET_BOOTH_DATA, getExhibitionBooth_saga);
    yield takeLatest (GET_COMPANY_DETAIL, getCompanyDetailData_saga);
}