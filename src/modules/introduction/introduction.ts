
//reducer state
type tokenState = {
    data: any;
    visitors: any;
}
const initialState: tokenState = {
    data: null,
    visitors: null
};


//actions
const prefix: string = 'introduction/';
export const GET_DATA = `${prefix}GET`;
export const SET_DATA = `${prefix}SET`;
export const GET_VISITORS_DATA = `${prefix}GET_VISITORS_DATA`;
export const SET_VISITORS_DATA = `${prefix}SET_VISITORS_DATA`;

//action creators
export const getItroductionReducer = () => ({
    type: GET_DATA
});
export const setItroductionReducer = (data) => ({
    type:SET_DATA,
    payload: data
})
export const getVisitorsReducer = () => ({
    type: GET_VISITORS_DATA
});
export const setVisitorsReducer = (data) => ({
    type:SET_VISITORS_DATA,
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
} | {
    type: "introduction/GET_VISITORS_DATA",
    payload: any
} | {
    type: "introduction/SET_VISITORS_DATA",
    payload: any
}

function introductionReducer(state: tokenState = initialState, action: introductionAction) {
  switch (action.type) {
    case GET_DATA:
    case GET_VISITORS_DATA:
      return { ...state };
    case SET_DATA:
        state.data = action.payload;
      return { ...state };
    case SET_VISITORS_DATA:
      state.visitors = action.payload;
      return { ...state };
    default:
      return state;
  }
}
export default introductionReducer;
