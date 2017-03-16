import {LOADING, READY} from '../constants/';

export function loading(type){
    switch(type){
        case 'loading':
            return {
                type: LOADING,
                loading: true
            };
            break;
        case "ready":
            return {
                type: READY,
                loading: false
            }
            break;
    }
}
