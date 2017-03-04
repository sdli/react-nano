import React from "react";
import { Route, IndexRoute} from "react-router";
import Main from "./containers/Main";
import App from "./containers/App";
import {getAuth} from "./actions/login";
// import Tab from "./containers/Tab";
export default store =>{
    const checkLogin = ()=> store.dispatch(getAuth());
    return (
        <Route path="/" component={Main} onEnter={checkLogin}>
            <IndexRoute component={App}/>
        </Route>
    );
}