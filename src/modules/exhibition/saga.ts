import {put, takeLatest} from "@redux-saga/core/effects";
import {
    GET_BOOTH_DATA,
    GET_BOOTH_BANNER_DATA,
    GET_DATA,
    GET_COMPANY_DETAIL,
    setExhibitionReducer,
    setBoothBannerReducer,
    setBoothListReducer,
    setCompanyDetailDataReducer
} from "./exhibition";

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
                    "category" : "AI13",
                    "category_image" : "http://localhost:3000/static/media/1.8d23c66c.jpg",
                    "booth": [{
                        "booth_id": "1",
                        "booth_name": "booth_name1",
                        "booth_banner": "http:",
                        "company_name": "openbooth co., ltd",
                        "booth_description": "In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..",
                        "category": ["It solution, Platform service"],
                        "logo": ""
                    },{
                        "booth_id": "1",
                        "booth_name": "booth_name1",
                        "booth_banner": "http:",
                        "company_name": "openbooth co., ltd",
                        "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                        "category": ["It solution, Platform service"],
                        "logo": ""
                    },{
                        "booth_id": "1",
                        "booth_name": "booth_name1",
                        "booth_banner": "http:",
                        "company_name": "openbooth co., ltd",
                        "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                        "category": ["It solution, Platform service"],
                        "logo": ""
                    }]
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
                },{
                    "category" : "AI4",
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
                    "category" : "AI5",
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
                    "category" : "AI6",
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
                    "category" : "AI7szgfsdv",
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
function * getExhibitionBooth_saga(){
    if(true){
        const response ={
            "code": "200",
            "message": "",
            "data": [{
                "booth_id": "1",
                "booth_name": "booth_name1",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                "category": ["It solution, Platform service"],
                "logo": ""
            },{
                "booth_id": "2",
                "booth_name": "booth_name12",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                "category": ["It solution, Platform service"],
                "logo": ""
            },{
                "booth_id": "1",
                "booth_name": "booth_name1",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                "category": ["It solution, Platform service"],
                "logo": ""
            },{
                "booth_id": "2",
                "booth_name": "booth_name12",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                "category": ["It solution, Platform service"],
                "logo": ""
            },{
                "booth_id": "1",
                "booth_name": "booth_name1",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                "category": ["It solution, Platform service"],
                "logo": ""
            },{
                "booth_id": "2",
                "booth_name": "booth_name12",
                "booth_banner": "http:",
                "company_name": "openbooth co., ltd",
                "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
                "category": ["It solution, Platform service"],
                "logo": ""
            }]
        }
        if(response.code == "200"){
            yield put(setBoothListReducer(response.data));
        }
        else{
            yield put(setBoothListReducer(response.data));
        }
    }
}

function * getCompanyDetailData_saga(){
    if(true){
        const response ={
            "code": "200",
            "message": "",
            "data": {
                "manager_info": {
                    "name": "홍길동",
                    "email": "hong1@gmail.com",
                    "company": "openbooth",
                    "country": "Republic of Korea",
                    "phone": "+82-10-1234-1234",
                    "department": "Bank of America",
                    "position": "UI/UX designer",
                    "description": "-",
                    "profile_image":"http://localhost:3000/static/media/2.aed4d85f.jpg"
                },
                "main_banner": "http:",
                "company_description": "",
                "company_name": "company name sample",
                "company_thumbnail": "http://localhost:3000/static/media/2.aed4d85f.jpg",
                "company_field": ["category","category","category"],
                "website": "https://www.openbooth.net",
                "email": "openbooth@openbooth.net",
                "sns": [{
                    "type": "facebook",
                    "value": "http://www.naver.com"
                },{
                    "type": "instagram",
                    "value": "http://"
                },{
                    "type": "youtube",
                    "value": "http://"
                }],
                "profile_image": "http://",
                "thumbnails": ["http://localhost:3000/static/media/1.8d23c66c.jpg","http://localhost:3000/static/media/1.8d23c66c.jpg", "http://localhost:3000/static/media/1.8d23c66c.jpg"],
                "exhibitor_description": [{
                    "type": "text",
                    "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lobortis augue eget faucibus. Donec dsfds malesuada mollis ipsum, a ornare tellus venenatis et. In faucibus est ipsum, a cursus mi commodo sit amet. Nullam ddf vitae auctor lacus, sit Maecenas accumsan sem consectetur, placerat nisi in, feugiat nisi. Nunc vel diam ac tortor ultrices vehicula. Etiam vulputate laoreet dui, eu imperdiet leo blandit non. Phasellus porttitor tortor nec felis placerat lacinia. Sed sit amet pharetra odio, et commodo mauris. Maecenas vestibulum risus in metus elementum fringilla. Etiam neque purus, semper eu molestie id, laoreet non mauris. Donec ac ullamcorper urna. Vivamus sed massa congue, interdum diam et, accumsan arcu."
                }, {
                    "type": "video",
                    "value": "http://"
                }, {
                    "type": "thumbnails",
                    "value": ["http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/bg-dummy.ace82135.png"]
                }],
                "item": [{
                    "item_name": "제품/서비스",
                    "component": [{
                        "type": "video",
                        "value": "http://"
                    },
                        {
                            "type": "text",
                            "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lobortis augue eget faucibus. Donec dsfds malesuada mollis ipsum, a ornare tellus venenatis et. In faucibus est ipsum, a cursus mi commodo sit amet. Nullam ddf vitae auctor lacus, sit Maecenas accumsan sem consectetur, placerat nisi in, feugiat nisi. Nunc vel diam ac tortor ultrices vehicula. Etiam vulputate laoreet dui, eu imperdiet leo blandit non. Phasellus porttitor tortor nec felis placerat lacinia. Sed sit amet pharetra odio, et commodo mauris. Maecenas vestibulum risus in metus elementum fringilla. Etiam neque purus, semper eu molestie id, laoreet non mauris. Donec ac ullamcorper urna. Vivamus sed massa congue, interdum diam et, accumsan arcu."
                        },
                        {
                            "type": "thumbnails",
                            "value": ["http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/bg-dummy.ace82135.png"]
                        }]
                },{
                    "item_name": "제품/서비스",
                    "component": [{
                        "type": "video",
                        "value": "http://"
                    },
                        {
                            "type": "text",
                            "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lobortis augue eget faucibus. Donec dsfds malesuada mollis ipsum, a ornare tellus venenatis et. In faucibus est ipsum, a cursus mi commodo sit amet. Nullam ddf vitae auctor lacus, sit Maecenas accumsan sem consectetur, placerat nisi in, feugiat nisi. Nunc vel diam ac tortor ultrices vehicula. Etiam vulputate laoreet dui, eu imperdiet leo blandit non. Phasellus porttitor tortor nec felis placerat lacinia. Sed sit amet pharetra odio, et commodo mauris. Maecenas vestibulum risus in metus elementum fringilla. Etiam neque purus, semper eu molestie id, laoreet non mauris. Donec ac ullamcorper urna. Vivamus sed massa congue, interdum diam et, accumsan arcu."
                        },
                        {
                            "type": "thumbnails",
                            "value": ["http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/bg-dummy.ace82135.png"]
                        }]
                }],
                "business_information": {
                    "business_model": "",
                        "current_entry_area": "",
                        "desired_entry_area": "",
                        "contract_condition": "",
                        "investment_stage": ""
                },
                "documents": [{
                    "file_name": "Company Co, ltd. Company Introduction_2020.04.31.pdf"
                },{
                    "file_name": "Phasellus dignissim vitae velit.pdf"
                },{
                    "file_name": "Nam vel bibendum.pdf"
                }],
                    "questions": [{
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing eli?",
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lobortis augue eget faucibus. Donec dsfds malesuada mollis ipsum, a ornare tellus venenatis et. In faucibus est ipsum, a cursus mi commodo sit amet. Nullam ddf vitae auctor lacus, sit Maecenas accumsan sem consectetur, placerat nisi in, feugiat nisi. Nunc vel diam ac tortor ultrices vehicula. Etiam vulputate laoreet dui, eu imperdiet leo blandit non. Phasellus porttitor tortor nec felis placerat lacinia."
                }]
    }
        };

        if(response.code == "200"){
            yield put(setCompanyDetailDataReducer(response.data));
        }
        else{
            yield put(setCompanyDetailDataReducer(null));
        }
    }
}

export function* exhibitionSaga() {
    yield takeLatest (GET_DATA, getExhibition_saga);
    yield takeLatest (GET_BOOTH_BANNER_DATA, getBoothBanner_saga);
    yield takeLatest (GET_BOOTH_DATA, getExhibitionBooth_saga);
    yield takeLatest (GET_COMPANY_DETAIL, getCompanyDetailData_saga);
}