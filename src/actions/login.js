import { LOGINOK, LOGOUT , LOGINFAIL, HIDEINDEXMENU, SHOWINDEXMENU} from "../constants/index";
import {loading} from './loading';
import httpRequest from "../utils/request";

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
        httpRequest(
            '/api/login',{
                method: 'POST',
                headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                body: "username=" + username + "&password=" + password,
            },(data)=>{
                const json = JSON.parse(data);
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

export function toggleIndexMenu(type){
    switch (type){
        case 'hide':
            return {
                type: HIDEINDEXMENU 
            };
            break;
        case 'show':
            return {
                type: SHOWINDEXMENU
            };
            break;
    }
}

export function getAuth(){
    return dispatch =>{
        dispatch(loading('loading'));
        httpRequest(
            '/api/loadAuth',{
                method: 'POST',
                headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
            },(data)=>{
                const json = JSON.parse(data);
                if(parseInt(json.code)>=1){
                    dispatch(loading('ready'));
                    dispatch(login(json.username,"loginOK"));
                    return true;
                }else{
                    dispatch(loading('ready'));
                    dispatch(login('',"loginFail"));
                    return false;
                }
            }
        );
    }
}