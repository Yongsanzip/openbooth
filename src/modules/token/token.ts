//reducer state
type tokenState = {
    isOverlap: boolean;
    isLogin: boolean;
    language: string;
    languageData: any;
    isFailedLogin: boolean;
}
const initialState: tokenState = {
    isOverlap: false,
    isLogin: false,
    language: 'kor',
    languageData: {},
    isFailedLogin: false,
};


//actions
const prefix: string = 'token/';
export const GET_TOKEN = `${prefix}GET`;
export const GET_REGRESH_TOKEN = `${prefix}GET_REGRESH_TOKEN`;
export const SET_LOGIN = `${prefix}SET_LOGIN`;
export const SET_LOGIN_FAILED = `${prefix}SET_LOGIN_FAILED`;
export const SET_LOGOUT = `${prefix}SET_LOGOUT`;

export const SET_LANGUAGE = `${prefix}SET_LANGUAGE`;
export const EMAIL_OVERLAP_CONFIRM = `${prefix}EMAIL_OVERLAP_CONFIRM`;
export const SET_IS_EMAIL_OVERLAP_TRUE = `${prefix}SET_IS_EMAIL_OVERLAP_TRUE`;
export const SET_IS_EMAIL_OVERLAP_FALSE = `${prefix}SET_IS_EMAIL_OVERLAP_FALSE`;

export const GET_LANGUAGE_DATA = `${prefix}GET_LANGUAGE_DATA`;
export const SET_LANGUAGE_DATA = `${prefix}SET_LANGUAGE_DATA`;

export const SEND_FIND_PWD_MAIL = `${prefix}SEND_FIND_PWD_MAIL`;
export const SET_NEW_PASSWORD = `${prefix}SET_NEW_PASSWORD`;

export const REGIST = `${prefix}REGIST`;

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
export const setIsOverlapEmailReducer_ture = () => ({
    type: SET_IS_EMAIL_OVERLAP_TRUE,
    payload: true
});
export const setIsOverlapEmailReducer_false = () => ({
    type: SET_IS_EMAIL_OVERLAP_FALSE,
    payload: false
});
export const setLoginReducer = () => ({
  type: SET_LOGIN,
  payload: true
});
export const setLoginFailedReducer = () => ({
    type: SET_LOGIN_FAILED,
    payload: true
});
export const logoutReducer = () => ({
    type: SET_LOGOUT,
    payload: false
});
export const setLanguage = (language: string) => ({
    type: SET_LANGUAGE,
    payload: language
})
export const isEmailOverlapConfirmReducer = (email: string) => ({
    type: EMAIL_OVERLAP_CONFIRM,
    payload: {
        email: email
    }
});

export const getLanguageDataReducer = () => ({
    type: GET_LANGUAGE_DATA,
});
export const setLanguageDataReducer = (data) => ({
    type: SET_LANGUAGE_DATA,
    payload: data
});

export const sendFIndPwdMailReducer = (data) => ({
    type: SEND_FIND_PWD_MAIL,
    payload: data
});
export const setNewPasswordReducer = (data) => ({
    type: SET_NEW_PASSWORD,
    payload: data
});

export const registReducer = (data) => ({
    type: REGIST,
    payload: data
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
    type: "token/SET_LOGIN",
    payload: boolean
} | {
    type: "token/SET_LOGIN_FAILED",
    payload: boolean
} | {
    type: "token/SET_LOGOUT",
    payload: any
} | {
    type: "token/SET_LANGUAGE"
    payload: string
} | {
    type: "token/SET_IS_EMAIL_OVERLAP_TRUE",
    payload: boolean
} | {
    type: "token/SET_IS_EMAIL_OVERLAP_FALSE",
    payload: boolean
} | {
    type: "token/GET_LANGUAGE_DATA",
    payload: any
} | {
    type: "token/SET_LANGUAGE_DATA",
    payload: any
} | {
    type: "token/SEND_FIND_PWD_MAIL",
    payload: any
} | {
    type: "token/SET_NEW_PASSWORD",
    payload: any
} | {
    type: "token/REGIST",
    payload: any
}

function tokenReducer(state: tokenState = initialState, action: loginTokenAction) {
  switch (action.type) {
    case GET_TOKEN:
    case GET_REGRESH_TOKEN:
    case EMAIL_OVERLAP_CONFIRM:
    case GET_LANGUAGE_DATA:
    case SEND_FIND_PWD_MAIL:
    case REGIST:
    case SET_NEW_PASSWORD:
      return { ...state };
    case SET_LOGIN:
        console.log("SET Is SET_LOGIN????", action.payload);
        state.isFailedLogin = false;
        state.isLogin = action.payload;
      return { ...state };
    case SET_LOGOUT:
        sessionStorage.removeItem('token');
        state.isLogin = action.payload;
    case SET_LANGUAGE:
        state.language = action.payload;
        return { ...state };
    case SET_IS_EMAIL_OVERLAP_TRUE:
        console.log("SET Is EMAIL OVERLAP????", action.payload);
        state.isOverlap = action.payload;
        return { ...state };
    case SET_IS_EMAIL_OVERLAP_FALSE:
        console.log("SET Is EMAIL OVERLAP????", action.payload);
      state.isOverlap = action.payload;
      return { ...state };
    case SET_LANGUAGE_DATA:
      state.languageData = action.payload;
      return { ...state };

    case SET_LOGIN_FAILED:
        state.isFailedLogin = true;
        return { ...state };
    default:
      return state;
  }
}
export default tokenReducer;
