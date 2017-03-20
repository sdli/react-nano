import {HIDEINDEXMENU,SHOWINDEXMENU} from "../constants/index";

const initialState = {
    indexMenu: true
};

export default function toggleIndexMenu(state = initialState,action){
    switch (action.type){
        case HIDEINDEXMENU:
            return {
                indexMenu: false
            };
        case SHOWINDEXMENU:
            return {
                indexMenu: true
            };
        default:
            return state;
    }
}