import axios from 'axios';

const request = async(settings) => {
    try{
        const url =settings.url;

        const response = await axios(url, {
            method : settings.method,
            headers: settings.header != null? settings.header : new Headers(),
            data : settings.params
        });

        if(response.status == 200){
            if(true){
                if(settings.successTodo != null) settings.successTodo();
            }
            else{
                if(settings.failTodo != null) settings.failTodo();

            }
        }

        return response.data;

    } catch(err) {
        console.log(err);
    }
}

export default request;