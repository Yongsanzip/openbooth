
//reducer state
type exhibitState = {
    data: any,
    boothBanners: any
}
const initialState: exhibitState = {
    data: null,
    boothBanners: null
};


//actions
const prefix: string = 'exhibition/';
export const GET_DATA = `${prefix}GET`;
export const SET_DATA = `${prefix}SET`;
export const GET_BOOTH_BANNER_DATA = `${prefix}GET_BOOTH_BANNER_DATA`;
export const SET_BOOTH_BANNER_DATA = `${prefix}SET_BOOTH_BANNER_DATA`;

//action creators
export const getExhibitionReducer = () => ({
    type: GET_DATA
});
export const setExhibitionReducer = (data) => ({
    type:SET_DATA,
    payload: data
})
export const getBoothBannerReducer = () => ({
    type: GET_BOOTH_BANNER_DATA
});
export const setBoothBannerReducer = (data) => ({
    type:SET_BOOTH_BANNER_DATA,
    payload: data
})

// reducer act
type exhibitionAction = {
    type: "exhibition/GET",
    payload: any
} | {
    type: "exhibition/SET",
    payload: any
} | {
    type: "exhibition/GET_BOOTH_BANNER_DATA",
    payload: any
} | {
    type: "exhibition/SET_BOOTH_BANNER_DATA",
    payload: any
}


function exhibitionReducer(state: exhibitState = initialState, action: exhibitionAction) {
  switch (action.type) {
    case GET_DATA:
    case GET_BOOTH_BANNER_DATA:
      return { ...state };
    case SET_DATA:
        state.data = action.payload;
        return { ...state };
    case SET_BOOTH_BANNER_DATA:
        state.boothBanners = action.payload;
      return { ...state };
    default:
      return state;
  }
}
export default exhibitionReducer;
