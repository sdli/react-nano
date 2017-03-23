import {LOADING,READY} from "../constants/index";

const initialState = {
    loading: true
};

export default function loadingStatus(state = initialState,action){
    switch (action.type){
        case LOADING:
            return Object.assign({},state,{
                loading: action.loading
            });
        case READY:
            return Object.assign({},state,{
                loading: action.loading
            });
        default:
            return state;
    }
}

