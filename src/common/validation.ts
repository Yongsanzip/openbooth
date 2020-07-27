export const emailValidator = (inputValue:string) => {
    const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(inputValue == null || inputValue.length < 1){
        return {
            result: false,
            msg: 'Enter this value'
        };
    }
    else if (inputValue.match(regExp) == null) {
        return {
            result: false,
            msg: 'Email format is incorrect'
        };
    }
    return {
        result: true,
        value: inputValue
    };
}

export const pwdValidator = (inputValue:string) => {
    const num = inputValue.search(/[0-9]/g);
    const eng = inputValue.search(/[a-z]/ig);
    if(inputValue == null || inputValue == ''){
        return {
            result: false,
            msg: 'Enter this value'
        };
    }
    else if(inputValue.length < 8 || inputValue.search(/\s/) != -1 || num < 0 || eng < 0){
        return {
            result: false,
            msg: 'At least 8 characters long including English and number'
        };
    }
    return {
        result: true,
        value: inputValue
    };
}

export const pwdConfirmValidator = (inputValue1:string, inputValue2:string) => {
    if(inputValue1 != inputValue2){
        return {
            result: false,
            msg: '비밀번호가 일치하지 않습니다.'
        };
    }

    return {
        result: true
    };
}

export const emptyCheck = (inputValue:string) => {

    if(inputValue == null || inputValue == ''){
        return {
            result: false,
            msg: 'Enter this value'
        };
    }

    return {
        result: true
    };
}