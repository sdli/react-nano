import { LOGINOK, LOGOUT , LOGINFAIL} from "../constants/index";
import {loading} from './loading';

export function login(name,type){
    switch(type){
        case "loginOK":
            return {
                type: LOGINOK,
                name: name,
                status: status
            };
            break;
        case "loginFail":
            return {
                type: LOGINFAIL,
                name: name,
                status: status,
            };
            break;
        case "logout":        
            return {
                type: LOGOUT,
                name: name,
                status: status
            };
            break;
    }
}

export function loginCheck(username,password){
    return dispatch =>{
        dispatch(loading('loading'));
        fetch('/api/login',{
                method: 'POST',
                headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                body: "username=" + username + "&password=" + password,
                credentials:'include'
        }).then(response => response.json()).then(json =>{
                if(parseInt(json.code)>=1){
                    dispatch(login(json.username,'loginOK'));
                    dispatch(loading('ready'));
                    return true;
                }else{
                    dispatch(loading('ready'));
                    alert('登录失败，请重新输入！');
                }
            }
        );
    }
}

export function getAuth(){
    return dispatch =>{
        dispatch(loading('loading'));
        fetch('/api/loadAuth',{
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            credentials:'include'
        }).then(response => response.json()).then(json =>{
                if(parseInt(json.code)>=1){
                    dispatch(loading('ready'));
                    dispatch(login(json.username,"loginOK"));
                }else{
                    dispatch(loading('ready'));
                    dispatch(login('',"loginFail"));
                }
            }
        );
    }
}