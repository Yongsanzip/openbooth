import {put, takeLatest} from "@redux-saga/core/effects";
import {
    GET_DATA,
    GET_VISITORS_DATA,
    setItroductionReducer,
    setVisitorsReducer
} from "./introduction";

function * getIntroduction_saga(){
    if(true){
        const response = {
            "code": "200",
            "message": "",
            "data": {
                "exhibition_code": "",
                "introduction_image": "http://",
                "exhibition_thumbnail":"http://",
                "exhibition_description":"Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat",
                "exhibition_name": "Online Exhibition of Thired Countries with The World Bank | Bulit on Hope",
                "exhibition_email": "",
                "exhibition_category": ["Category", "Category", "Category", "Category"],
                "start_date": "September 15th",
                "end_date": "September 21th, 2020",
                "hosted": "The World Bank",
                "organized": "Bank of America, Ministry of Science and ICT of Korea",
                "operated": "Openbooth",
                "introduction": [{
                    "type": "text",
                    "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lobortis augue eget faucibus. Donec dsfds malesuada mollis ipsum, a ornare tellus venenatis et. In faucibus est ipsum, a cursus mi commodo sit amet. Nullam ddf vitae auctor lacus, sit Maecenas accumsan sem consectetur, placerat nisi in, feugiat nisi. Nunc vel diam ac torto.\n\nAliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat"
                }, {
                    "type": "video",
                    "value": "http://"
                }, {
                    "type": "thumbnails",
                    "value": ["http://","http://","http://","http://","http://"]
                }],
                "press_release": [{
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
                    "link": "",
                    "reg_date": "2020.09.12",
                    "registrant": "Press name"
                }, {
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
                    "link": "",
                    "reg_date": "2020.09.12",
                    "registrant": "Press name"
                }],
                "documents": [{
                    "file_name": "Company Co, ltd. Company Introduction_2020.04.31.pdf"
                },{
                    "file_name": "Phasellus dignissim vitae velit.pdf"
                },{
                    "file_name": "Nam vel bibendum.pdf"
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

function * getVisitors_saga(){
    if(true){
        const response = {
            "code": "200",
            "message": "",
            "data": [{
                "name": "홍길동",
                "email": "hong1@gmail.com",
                "company": "openbooth",
                "country": "Republic of Korea",
                "phone": "+82-10-1234-1234",
                "department": "Bank of America",
                "position": "UI/UX designer",
                "description": "-",
                "profile_image":"http",
                "logo": ""
            },{
                "name": "홍길동2",
                "email": "hong1@gmail.com",
                "company": "openbooth",
                "country": "Republic of Korea",
                "phone": "+82-10-1234-1234",
                "department": "Bank of America",
                "position": "UI/UX designer",
                "description": "-",
                "profile_image":"http",
                "logo": ""
            },{
                "name": "홍길동3",
                "email": "hong1@gmail.com",
                "company": "openbooth",
                "country": "Republic of Korea",
                "phone": "+82-10-1234-1234",
                "department": "Bank of America",
                "position": "UI/UX designer",
                "description": "-",
                "profile_image":"http://localhost:3000/static/media/2.aed4d85f.jpg",
                "logo": ""
            }]
        }
        if(response.code == "200"){
            yield put(setVisitorsReducer(response.data));
        }
        else{
            yield put(setVisitorsReducer(null));
        }
    }
}



export function* introductionSaga() {
    yield takeLatest (GET_DATA, getIntroduction_saga);
    yield takeLatest (GET_VISITORS_DATA, getVisitors_saga);

}