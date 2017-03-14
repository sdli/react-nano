import { LOGINOK, LOGOUT , LOGINFAIL} from "../constants/index";


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
        fetch('/api/login',{
                method: 'POST',
                headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                body: "username=" + username + "&password=" + password,
                credentials:'include'
        }).then(response => response.json()).then(json =>{
                if(parseInt(json.code)>=1){
                    dispatch(login(json.username,'loginOK'));
                    return true;
                }else{
                    alert('登录失败，请重新输入！');
                }
            }
        );
    }
}

export function submmitFail(){
    
}

export function getAuth(){
    return dispatch =>{
        fetch('/api/loadAuth',{
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            credentials:'include'
        }).then(response => response.json()).then(json =>{
                if(parseInt(json.code)>=1){
                    dispatch(login(json.username,"loginOK"));
                }else{
                    dispatch(login('',"loginFail"));
                }
            }
        );
    }
}