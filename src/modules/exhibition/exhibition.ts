
//reducer state
type exhibitState = {
    data: any,
    boothBanners: any,
    boothList: any,
    selectedExhibit: any,
    companyDetail: any,
}
const initialState: exhibitState = {
    data: null,
    boothBanners: null,
    boothList: null,
    selectedExhibit: null,
    companyDetail: null,
};


//actions
const prefix: string = 'exhibition/';
export const GET_DATA = `${prefix}GET`;
export const SET_DATA = `${prefix}SET`;
export const GET_BOOTH_BANNER_DATA = `${prefix}GET_BOOTH_BANNER_DATA`;
export const SET_BOOTH_BANNER_DATA = `${prefix}SET_BOOTH_BANNER_DATA`;
export const GET_BOOTH_DATA = `${prefix}GET_BOOTH_DATA`;
export const SET_BOOTH_DATA = `${prefix}SET_BOOTH_DATA`;
export const GET_SELECTED_EXHIBIT_CATEGORY_DATA = `${prefix}GET_SELECTED_EXHIBIT_CATEGORY_DATA`;
export const SET_SELECTED_EXHIBIT_CATEGORY_DATA = `${prefix}SET_SELECTED_EXHIBIT_CATEGORY_DATA`;
export const GET_COMPANY_DETAIL = `${prefix}GET_COMPANY_DETAIL`;
export const SET_COMPANY_DETAIL = `${prefix}SET_COMPANY_DETAIL`;

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
});
export const getBoothListReducer = (data) => ({
    type:GET_BOOTH_DATA,
    payload: data
});
export const setBoothListReducer = (data) => ({
    type:SET_BOOTH_DATA,
    payload: data
});
export const getSelectedExhibitCategoryReducer = () => ({
    type:GET_SELECTED_EXHIBIT_CATEGORY_DATA
});
export const setSelectedExhibitCategoryReducer = (data) => ({
    type:SET_SELECTED_EXHIBIT_CATEGORY_DATA,
    payload: data
});
export const getCompanyDetailDataReducer = (data) => ({
    type:GET_COMPANY_DETAIL,
    payload: data
});
export const setCompanyDetailDataReducer = (data) => ({
    type:SET_COMPANY_DETAIL,
    payload: data
});

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
} | {
    type: "exhibition/GET_BOOTH_DATA",
    payload: any
} | {
    type: "exhibition/GET_SELECTED_EXHIBIT_CATEGORY_DATA",
    payload: any
} | {
    type: "exhibition/SET_SELECTED_EXHIBIT_CATEGORY_DATA",
    payload: any
} | {
    type: "exhibition/GET_COMPANY_DETAIL",
    payload: any
} | {
    type: "exhibition/SET_COMPANY_DETAIL",
    payload: any
}


function exhibitionReducer(state: exhibitState = initialState, action: exhibitionAction) {
  switch (action.type) {
    case GET_DATA:
    case GET_BOOTH_BANNER_DATA:
    case GET_BOOTH_DATA:
    case GET_SELECTED_EXHIBIT_CATEGORY_DATA:
    case GET_COMPANY_DETAIL:
      return { ...state };
    case SET_DATA:
        state.data = action.payload;
        return { ...state };
    case SET_BOOTH_BANNER_DATA:
        state.boothBanners = action.payload;
      return { ...state };
    case SET_BOOTH_DATA:
        state.boothList = action.payload;
        return { ...state };
    case SET_SELECTED_EXHIBIT_CATEGORY_DATA:
        state.selectedExhibit = action.payload;
        return { ...state };
    case SET_COMPANY_DETAIL:
        state.companyDetail = action.payload;
        return { ...state };
    default:
      return state;
  }
}
export default exhibitionReducer;
