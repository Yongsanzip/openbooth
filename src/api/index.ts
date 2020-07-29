
import axios from 'axios';

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