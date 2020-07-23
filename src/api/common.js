import axios from 'axios';

export default class{
    request = async(settings) => {
        const url =settings.url;

        const response = await axios(url, {
            method : settings.method,
            headers: settings.header != null? settings.header : new Headers(),
            data : settings.params
        });

        return settings.callback(response.data);
    }
}