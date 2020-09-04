
import axios from 'axios';


//login
export function getToken (params) {
    const response = request({
        url: 'getToken',
        method: 'post',
        params: params
    });

    // return response;

    return {
        code: "200",
        message: "",
        data:{
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJvcGVuYm9vdGhAb3BlbmJvb3RoLm5ldCIsImNvdW50cnkiOiJSZXB1YmxpYyBvZiBLb3JlYSIsInBob25lIjoiKzgyLTEwLTEyMzQtMTIzNCIsImNvbXBhbnkiOiJCYW5rIG9mIGFtZXJpY2EiLCJkZXBhcnRtZW50IjoiRGVzaWduIHRlYW0iLCJwb3NpdGlvbiI6IlVJL1VYIGRlc2lnbmVyIiwicHJvZmlsZV9pbWFnZSI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF85NjBfNzIwLnBuZyIsImlhdCI6MTU5NDcwMDk4MywiZXhwIjoxNTk0NzA1MDUyLCJqdGkiOiI3ZjI2MjNkMi05YjYxLTRhMDMtOTA5Ny0yNmYxNjc2NmQ4MjgifQ.MYUNxziEZFT7x6G6FobEKEJqYbTWEqE-72qBixNx2zM"
        }
    };
}
export function getRefreshToken (params) {
    const response = request({
        url: 'getRefreshToken',
        method: 'post',
        params: params
    });

    // return response;

    return {
        code: "200",
        message: "",
        data:{
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJvcGVuYm9vdGhAb3BlbmJvb3RoLm5ldCIsImNvdW50cnkiOiJSZXB1YmxpYyBvZiBLb3JlYSIsInBob25lIjoiKzgyLTEwLTEyMzQtMTIzNCIsImNvbXBhbnkiOiJCYW5rIG9mIGFtZXJpY2EiLCJkZXBhcnRtZW50IjoiRGVzaWduIHRlYW0iLCJwb3NpdGlvbiI6IlVJL1VYIGRlc2lnbmVyIiwicHJvZmlsZV9pbWFnZSI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF85NjBfNzIwLnBuZyIsImlhdCI6MTU5NDcwMDk4MywiZXhwIjoxNTk0NzA1MDUyLCJqdGkiOiI3ZjI2MjNkMi05YjYxLTRhMDMtOTA5Ny0yNmYxNjc2NmQ4MjgifQ.MYUNxziEZFT7x6G6FobEKEJqYbTWEqE-72qBixNx2zM"
        }
    };
};
export function checkEmailOverlap (params) {
    const response = request({
        url: 'checkEmailOverlap',
        method: 'post',
        params: params
    });

    // return response;
    //sendFIndPwdMailReducer

    return {
        code: "200",
        message: "",
        data:{
            isOverlap: false
        }
    };
};
export function sendFindPwdMail (params) {
    const response = request({
        url: 'sendFindPwdMail',
        method: 'post',
        params: params
    });

    // return response;
    //sendFIndPwdMailReducer

    return {
        code: "200",
        message: "",
        data:{
        }
    };
};
export function setNewPassword (params) {
    const response = request({
        url: 'setNewPassword',
        method: 'post',
        params: params
    });

    // return response;
    //sendFIndPwdMailReducer

    return {
        code: "200",
        message: "",
        data:{
        }
    };
};
export function regist (params) {
    const response = request({
        url: 'regist',
        method: 'post',
        params: params
    });

    // return response;

    return {
        code: "200",
        message: "",
        data:{
        }
    };
};





//subpage
export function getIntroduction (params) {
    const response = request({
        url: 'getIntroduction',
        method: 'post',
        params: params
    });

    // return response;

    return {
        "code": "200",
        "message": "",
        "data": {
            "exhibition_code": "",
            "introduction_image": "https://picsum.photos/1000/800",
            "exhibition_thumbnail": "https://picsum.photos/1000/800",
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
    };
};

export function getVisitor (params) {
    const response = request({
        url: 'getVisitor',
        method: 'post',
        params: params
    });

    // return response;

    return {
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
    };
};
export function getBoothBanner (params) {
    const response = request({
        url: 'getBoothBanner',
        method: 'post',
        params: params
    });

    // return response;

    return {
        "code": "200",
        "message": "",
        "data": [{
            "booth_id": "1",
            "booth_name": "",
            "booth_banner": "https://picsum.photos/1000/280",
            "company_name": "openbooth co., ltd",
            "booth_description": "The Online Exhibition platform, OPENBOOTH.1",
            "category": ["It solution, Platform service"],
            "logo": ""
        },{
            "booth_id": "2",
            "booth_name": "",
            "booth_banner": "https://picsum.photos/1000/280",
            "company_name": "openbooth co., ltd",
            "booth_description": "The Online Exhibition platform, OPENBOOTH.2",
            "category": ["It solution, Platform service"],
            "logo": ""
        },{
            "booth_id": "3",
            "booth_name": "",
            "booth_banner": "https://picsum.photos/1000/280",
            "company_name": "openbooth co., ltd",
            "booth_description": "The Online Exhibition platform, OPENBOOTH.3",
            "category": ["It solution, Platform service"],
            "logo": ""
        }]
    };
};
export function getExhibition (params) {
    const response = request({
        url: 'getExhibition',
        method: 'post',
        params: params
    });

    // return response;

    return {
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
    };
};
export function getExhibitionBooth (params) {
    const response = request({
        url: 'getExhibitionBooth',
        method: 'post',
        params: params
    });

    // return response;

    return {
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
    };
};
export function getCompanyDetailData (params) {
    const response = request({
        url: 'getCompanyDetailData',
        method: 'post',
        params: params
    });

    // return response;

    return {
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
            "company_description": "In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss.",
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
            "thumbnails": ["https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200"],
            "exhibitor_description": [{
                "type": "text",
                "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lobortis augue eget faucibus. Donec dsfds malesuada mollis ipsum, a ornare tellus venenatis et. In faucibus est ipsum, a cursus mi commodo sit amet. Nullam ddf vitae auctor lacus, sit Maecenas accumsan sem consectetur, placerat nisi in, feugiat nisi. Nunc vel diam ac tortor ultrices vehicula. Etiam vulputate laoreet dui, eu imperdiet leo blandit non. Phasellus porttitor tortor nec felis placerat lacinia. Sed sit amet pharetra odio, et commodo mauris. Maecenas vestibulum risus in metus elementum fringilla. Etiam neque purus, semper eu molestie id, laoreet non mauris. Donec ac ullamcorper urna. Vivamus sed massa congue, interdum diam et, accumsan arcu."
            }, {
                "type": "video",
                "value": "http://"
            }, {
                "type": "thumbnails",
                "value": ["https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200"]
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
                        "value": ["http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/1.8d23c66c.jpg", "http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/1.8d23c66c.jpg", "http://localhost:3000/static/media/bg-dummy.ace82135.png","http://localhost:3000/static/media/1.8d23c66c.jpg"]
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
                "business_model": "B2B, B2G, B2C",
                "current_entry_area": "동북아시아 | 대한민국, 중국, 일본",
                "desired_entry_area": "유럽, 북아메리카 | 영국, 프랑스, 미국",
                "contract_condition": "단품 판매",
                "investment_stage": "Series-A"
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
            },{
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing eli?",
                "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lobortis augue eget faucibus. Donec dsfds malesuada mollis ipsum, a ornare tellus venenatis et. In faucibus est ipsum, a cursus mi commodo sit amet. Nullam ddf vitae auctor lacus, sit Maecenas accumsan sem consectetur, placerat nisi in, feugiat nisi. Nunc vel diam ac tortor ultrices vehicula. Etiam vulputate laoreet dui, eu imperdiet leo blandit non. Phasellus porttitor tortor nec felis placerat lacinia."
            },{
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing eli?",
                "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lobortis augue eget faucibus. Donec dsfds malesuada mollis ipsum, a ornare tellus venenatis et. In faucibus est ipsum, a cursus mi commodo sit amet. Nullam ddf vitae auctor lacus, sit Maecenas accumsan sem consectetur, placerat nisi in, feugiat nisi. Nunc vel diam ac tortor ultrices vehicula. Etiam vulputate laoreet dui, eu imperdiet leo blandit non. Phasellus porttitor tortor nec felis placerat lacinia."
            }]
        }
    };
};



async function request(settings){
    const prefix = 'http://localhost:3000/';
    const url =prefix + settings.url;

    let header:any;
    if(sessionStorage.getItem('token') != null) {
        header = {
            'authorization': sessionStorage.getItem('token')
        }
    }
    else{
        header = new Headers();
    }

    //for test
    return true;


    if(settings.method == 'GET' || settings.method == 'get') {
        const response = await axios.get(url, header);
        return response;
    }
    else if(settings.method == 'POST' || settings.method == 'post') {
        const response = await axios.post(url, header, settings.params);
        return response;
    }
}