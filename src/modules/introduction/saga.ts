import {call, put, takeLatest} from "@redux-saga/core/effects";
import {
    GET_DATA,
    GET_VISITORS_DATA,
    setItroductionReducer,
    setVisitorsReducer
} from "./introduction";
import {getIntroduction, getVisitor} from './../../api/index'

function * getIntroduction_saga(){
    try {
        const params = {};
        const { data } = yield call(getIntroduction, params);

        if(data != null){
            yield put(setItroductionReducer(data));
        }
        else{
            yield put(setItroductionReducer({}));
        }
    } catch (error) {
        console.log("catch")
    }
}

function * getVisitors_saga(){
    try {
        const params = {};
        const { data } = yield call(getVisitor, params);

        if(data != null){
            yield put(setVisitorsReducer(data));
        }
        else{
            yield put(setVisitorsReducer({}));
        }
    } catch (error) {
        console.log("catch")
    }
}

export function* introductionSaga() {
    yield takeLatest (GET_DATA, getIntroduction_saga);
    yield takeLatest (GET_VISITORS_DATA, getVisitors_saga);

}