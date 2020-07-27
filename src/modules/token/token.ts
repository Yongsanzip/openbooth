//reducer state
type tokenState = {
    isOverlap: boolean;
    isLogin: boolean;
    language: string;
}
const initialState: tokenState = {
    isOverlap: false,
    isLogin: false,
    language: 'kor'
};


//actions
const prefix: string = 'token/';
export const GET_TOKEN = `${prefix}GET`;
export const GET_REGRESH_TOKEN = `${prefix}GET_REGRESH_TOKEN`;
export const SET_ISLOGIN = `${prefix}SET_ISLOGIN`;
export const SET_LANGUAGE = `${prefix}SET_LANGUAGE`;
export const LOG_OUT_TOKEN = `${prefix}LOGOUT`;
export const EMAIL_OVERLAP_CONFIRM = `${prefix}EMAIL_OVERLAP_CONFIRM`;
export const SET_IS_EMAIL_OVERLAP = `${prefix}SET_IS_EMAIL_OVERLAP`;

//action creators
export const getTokenReducer = (email: string, password: string) => ({ 
    type: GET_TOKEN,
    payload: {
        email: email,
        password: password
    }
});
export const getRefreshTokenReducer = () => ({
    type: GET_REGRESH_TOKEN
});
export const setIsEmailOverlapReducer = (flag: boolean) => ({
    type: SET_IS_EMAIL_OVERLAP,
    payload: flag
});
export const setIsLoginReducer = (token: boolean) => ({
  type: SET_ISLOGIN,
  payload: token
});
export const setLanguage = (language: string) => ({
    type: SET_LANGUAGE,
    payload: language
})
export const logoutReducer = () => ({
  type: LOG_OUT_TOKEN
});
export const isEmailOverlapConfirmReducer = (email: string) => ({
    type: EMAIL_OVERLAP_CONFIRM,
    payload: {
        email: email
    }
});


//saga 비동기 함수
// worker saga


// reducer act
type loginTokenAction = {
    type: "token/GET",
    payload: any
} | {
    type: "token/GET_REGRESH_TOKEN",
    payload: any
} | {
    type: "token/SET_ISLOGIN",
    payload: boolean
} | {
    type: "token/LOGOUT",
    payload: any
} | {
    type: "token/SET_LANGUAGE"
    payload: string
} | {
    type: "token/SET_IS_EMAIL_OVERLAP",
    payload: boolean
}


function tokenReducer(state: tokenState = initialState, action: loginTokenAction) {
  switch (action.type) {
    case GET_TOKEN:
    case GET_REGRESH_TOKEN:
      return { ...state };
    case SET_ISLOGIN:
        state.isLogin = action.payload;
      return { ...state };
    case SET_LANGUAGE:
        state.language = action.payload;
        return { ...state };
    case LOG_OUT_TOKEN:
        sessionStorage.removeItem('token');
        state.isLogin = false;
    case EMAIL_OVERLAP_CONFIRM:
          return { ...state };
  case SET_IS_EMAIL_OVERLAP:
      state.isOverlap = action.payload;
      return { ...state };
    default:
      return state;
  }
}
export default tokenReducer;
