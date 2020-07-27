import { combineReducers } from 'redux';
import counter from './counter';
import tokenReducer from './token/token';
import introductionReducer from './introduction/introduction';
import exhibitionReducer from './exhibition/exhibition';

const rootReducer = combineReducers({
    tokenReducer,
    introductionReducer,
    exhibitionReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;