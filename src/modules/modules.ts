import { createAsyncAction} from "typesafe-actions";
import { takeLatest, call, put } from 'redux-saga/effects';

type TAsyncAction = {
    REQUEST: string,
    SUCCESS?: string,
    FAILURE?: string,
}

export const asyncActionCreator = (actionName: string) => {
    const asyncTypeAction: string[] = ['_REQUEST', '_SUCCESS', '_FAILURE'];

    return {
        'REQUEST': actionName + asyncTypeAction[0],
        'SUCCESS': actionName + asyncTypeAction[1],
        'FAILURE': actionName + asyncTypeAction[2],
    };
};

export const asyncAction = <T, P, J>(asyncAction) => {
    return createAsyncAction(asyncAction.REQUEST,
        asyncAction.SUCCESS,
        asyncAction.FAILURE,
    )<T, P, J>();
}

type TPromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

export default function createAsyncSaga<RequestType, RequestPayload, SuccessType, SuccessPayload, FailureType, FailurePayload>(
    asyncAction: any,
    asyncFunction: any,
    successFunc?: any, failureFunc?: any) {

    return function* saga(action: ReturnType<typeof asyncAction.request>) {
        try {
            const result: SuccessPayload = yield call(asyncFunction, (action as any).payload); // api 호출 이때 파라미터는 request()에서 받은 값으로 전달
            if (successFunc) {
                yield call(successFunc, result); // 성공 이후의 추가 액션이 필요할 경우 이에대한  callback 선언
            }
        } catch (e) {
            if (failureFunc) {
                yield call(successFunc, e); // 실패 이후의 추가 액션이 필요할 경우 이에대한  callback 선언
            }
        }

    }

}
