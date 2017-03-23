import {HIDEINDEXMENU,SHOWINDEXMENU} from "../constants/index";

const initialState = {
    indexMenu: true
};

export default function toggleIndexMenu(state = initialState,action){
    switch (action.type){
        case HIDEINDEXMENU:
            return Object.assign({},initialState,{
                indexMenu: false
            });
        case SHOWINDEXMENU:
            return Object.assign({},initialState,{
                indexMenu: true
            });
        default:
            return state;
    }
}