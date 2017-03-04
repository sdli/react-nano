import {LOGIN,LOGOUT} from "../constants/index";

const initialState = {
    name: '',
    loginStatus: false,
    loading: true
};

export default function login(state = initialState,action){
    switch (action.type){
        case LOGIN:
            return {
                name: action.name,
                loginStatus: true,
                loading: false
            };
        case LOGOUT:
            return {
                name : action.name,
                loginStatus: false,
                loading: false
            };
        default:
            return state;
    }
}

