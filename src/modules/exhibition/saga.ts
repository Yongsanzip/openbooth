import {put, takeLatest} from "@redux-saga/core/effects";
import {GET_BOOTH_BANNER_DATA, GET_DATA, setExhibitionReducer, setBoothBannerReducer} from "./exhibition";

function* getBoothBanner_saga(){
    if(true){
        const response = {
            "code": "200",
            "message": "",
            "data": [{
                "booth_id": "1",
                "booth_name": "",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                "category": ["It solution, Platform service"],
                "logo": ""
            },{
                "booth_id": "2",
                "booth_name": "",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.2",
                "category": ["It solution, Platform service"],
                "logo": ""
            },{
                "booth_id": "3",
                "booth_name": "",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.3",
                "category": ["It solution, Platform service"],
                "logo": ""
            }]
        }
        if(response.code == "200"){
            yield put(setBoothBannerReducer(response.data));
        }
        else{
            yield put(setBoothBannerReducer(response.data));
        }
    }
}
function * getExhibition_saga(){
    if(true){
        const response = {
            "code": "200",
            "message": "",
            "data": [{
                "code": "200",
                "message": "",
                "data": [{
                    "category" : "AI",
                    "category_image" : "http://",
                    "booth": {
                        "booth_id": "1",
                        "booth_name": "booth_name1",
                        "booth_banner": "http:",
                        "company_name": "openbooth co., ltd",
                        "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                        "category": ["It solution, Platform service"],
                        "logo": ""
                    }
                },{
                    "category" : "AI2",
                    "category_image" : "http://",
                    "booth": {
                        "booth_id": "1",
                        "booth_name": "",
                        "booth_banner": "http:",
                        "company_name": "openbooth co., ltd",
                        "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                        "category": ["It solution, Platform service"],
                        "logo": ""
                    }
                },{
                    "category" : "AI3",
                    "category_image" : "http://",
                    "booth": {
                        "booth_id": "1",
                        "booth_name": "",
                        "booth_banner": "http:",
                        "company_name": "openbooth co., ltd",
                        "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                        "category": ["It solution, Platform service"],
                        "logo": ""
                    }
                }]
            }]
        }
        if(response.code == "200"){
            yield put(setExhibitionReducer(response.data));
        }
        else{
            yield put(setExhibitionReducer(response.data));
        }
    }
}

export function* exhibitionSaga() {
    yield takeLatest (GET_DATA, getExhibition_saga);
    yield takeLatest (GET_BOOTH_BANNER_DATA, getBoothBanner_saga);
}