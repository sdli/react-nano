import React from "react";
import { Router,Route, IndexRoute, hashHistory} from "react-router";
import App from "./containers/App";
import Pros from './containers/Pros';
import IndexMenu from './containers/IndexMenu';
import {getAuth,toggleIndexMenu} from "./actions/login";
// import Tab from "./containers/Tab";
export default store =>{
    const checkLogin = (nextState,replace)=> {
        store.dispatch(getAuth());
        if(store.getState().loginInfo.loginStatus){
            store.dispatch(toggleIndexMenu('show'));
        }
    }

    const preLoad = (nextState,replace,cb)=>{
        console.log(store.getState().loginInfo.loginStatus);
        if(!store.getState().loginInfo.loginStatus){
            replace('/');
        }
        cb();
    };

    return (
        <Router history={hashHistory}>
            <Route path="/" component={App} onEnter={checkLogin} >
                <IndexRoute component={IndexMenu} />
                <Route path='/pros' component={Pros} />
            </Route>
        </Router>
    );
}