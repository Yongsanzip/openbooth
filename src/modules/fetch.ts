import {put, call} from "@redux-saga/core/effects";

export function* fetch(fetchFunction:any, successFunc?: any, failureFunc?: any) {
    try{
        const result:any = yield call(fetchFunction);
        if(successFunc) yield call(successFunc, result);

    } catch (e) {
        console.log(e);
        if(failureFunc) yield call(failureFunc, e);
    }
}