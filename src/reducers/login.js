import {LOGINOK,LOGOUT,LOGINFAIL} from "../constants/index";

const initialState = {
    name: '',
    loginStatus: false
};

export default function login(state = initialState,action){
    switch (action.type){
        case LOGINOK:
            return Object.assign({},state,{
                name: action.name,
                loginStatus: true            
            });
        case LOGOUT:
            return Object.assign({},state,{
                name : action.name,
                loginStatus: false
            });
        case LOGINFAIL:
            return Object.assign({},state,{
                name: action.name,
                loginStatus: false
            });
        default:
            return state;
    }
}

