import {HIDEINDEXMENU,SHOWINDEXMENU } from '../constants/index';

export function hide_index_menu(){
    return {
        type: HIDEINDEXMENU
    };
}

export function show_index_menu(){
    return {
        type: SHOWINDEXMENU
    };
}

