import { LOGIN, LOGOUT} from "../constants/index";


export function login(name,status){
    if(status){
        return {
            type: LOGIN,
            name: name,
            status: status,
        }
    }else{
        return {
            type: LOGOUT,
            name: name,
            status: status,
        };
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
                    console.log(json);
                    if(parseInt(json.code)>=1){
                        return dispatch(login(json.username,true));
                    }else{
                        return dispatch(login(json.username,false))
                    }
                }
            );
    }
}

export function getAuth(){
    return dispatch =>{
        fetch('/api/loadAuth',{
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            credentials:'include'
        }).then(response => response.json()).then(json =>{
                console.log(json);
                if(parseInt(json.code)>=1){
                    dispatch(login(json.username,true));
                    return Promise.resolve();
                }else{
                    dispatch(login('',false));
                    return Promise.resolve();
                }
            }
        );
    }
}