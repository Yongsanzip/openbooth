import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import rootReducer from './../modules';

import {tokenSaga} from "../modules/token/saga";
import {introductionSaga} from "../modules/introduction/saga"
import {exhibitionSaga} from "../modules/exhibition/saga"

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware)
        ),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

// saga workers



// watcher saga
function* rootSaga() {
    yield all([tokenSaga(), introductionSaga(), exhibitionSaga()]);
}

export default configureStore;