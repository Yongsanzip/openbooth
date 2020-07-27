import {put, takeLatest} from "@redux-saga/core/effects";
import {GET_DATA, setItroductionReducer} from "./introduction";

function * getIntroduction_saga(){
    if(true){
        const response = {
            "code": "200",
            "message": "",
            "data": {
                "exhibition_code": "",
                "introduction_image": "http://",
                "exhibition_thumbnail":"http://",
                "exhibition_description":"",
                "exhibition_name": "",
                "exhibition_email": "",
                "exhibition_category": [""],
                "start_date": "",
                "end_date": "",
                "hosted": "",
                "organized": "",
                "operated": "",
                "introduction": [{
                    "type": "text",
                    "value": ""
                }, {
                    "type": "video",
                    "value": "http://"
                }, {
                    "type": "thumbnails",
                    "value": ["http://"]
                }],
                "press_release": [{
                    "title": "",
                    "link": "",
                    "reg_date": "",
                    "registrant": ""
                }, {
                    "title": "",
                    "link": "",
                    "reg_date": "",
                    "registrant": ""
                }],
                "documents": [{
                    "file_name": ""
                }]
            }
        }
        if(response.code == "200"){
            yield put(setItroductionReducer(response.data));
        }
        else{
            yield put(setItroductionReducer(response.data));
        }
    }
}

export function* introductionSaga() {
    yield takeLatest (GET_DATA, getIntroduction_saga);
}