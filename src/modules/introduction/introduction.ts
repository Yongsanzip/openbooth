import { takeLatest, call, put } from 'redux-saga/effects';
import { checkOverlapEmail } from '../../api'
import createAsyncSaga, {asyncAction, asyncActionCreator} from "../modules"

//reducer state
type tokenState = {
    data: any
}
const initialState: tokenState = {
    data: null
};


//actions
const prefix: string = 'introduction/';
export const GET_DATA = `${prefix}GET`;
export const SET_DATA = `${prefix}SET`;

//action creators
export const getItroductionReducer = () => ({
    type: GET_DATA
});
export const setItroductionReducer = (data) => ({
    type:SET_DATA,
    payload: data
})
// export const isEmailOverlapConfirmReducer = (email: string) => ({
//     type: EMAIL_OVERLAP_CONFIRM,
//     payload: {
//         email: email
//     }
// });

// reducer act
type introductionAction = {
    type: "introduction/GET",
    payload: any
} | {
    type: "introduction/SET",
    payload: any
}


function introductionReducer(state: tokenState = initialState, action: introductionAction) {
  switch (action.type) {
    case GET_DATA:
      return { ...state };
    case SET_DATA:
        state.data = action.payload;
      return { ...state };
    default:
      return state;
  }
}
export default introductionReducer;
