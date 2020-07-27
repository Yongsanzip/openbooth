import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

async function* request (settings) {
    console.log("api request", settings)
    try{
        const url =settings.url;
        // const response = await axios(url, {
        //     method : settings.method,
        //     headers: settings.header != null? settings.header : new Headers(),
        //     data : settings.params
        // });

        const response = {
            status: 200
        }

        if(response.status == 200){
            if(true){
                console.log("api success!", settings.successTodo);
                if(settings.successTodo != null) yield put(settings.successTodo());
            }
            else{
                if(settings.failTodo != null) yield put(settings.failTodo());
            }
        }
    } catch(err) {
        console.log(err);
    }
}

export default request;