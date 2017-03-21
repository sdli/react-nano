import React from "react";
import { Router,Route, IndexRoute, hashHistory} from "react-router";
import App from "./containers/App";
import Pros from './containers/Pros';
import IndexMenu from './containers/IndexMenu';
import {getAuth} from "./actions/login";
import {show_index_menu,hide_index_menu} from "./actions/index";
import ProManagement from './components/pros/pro_management';
import ProBranches from "./components/pros/pro_branches";
import ProUnit from "./components/pros/pro_unit";
import ProSupply from "./components/pros/pro_supply";
import EmptyComponent from './components/pros/pro_empty';
// import Tab from "./containers/Tab";
export default store =>{
    const checkLogin = (nextState,replace)=> {
        store.dispatch(getAuth());
    }

    const hideIfNeeded = (nextState,replace)=>{
        store.dispatch(hide_index_menu());
    }

    const showIfNeeded = (nextState,replace)=>{
        console.log('pros');
        store.dispatch(show_index_menu());
    }

    return (
        <Router history={hashHistory}>
            <Route path="/" component={App} onEnter={checkLogin} >
                <IndexRoute component={IndexMenu} />
                <Route path='/pros' component={Pros}>
                    <IndexRoute component={EmptyComponent} onEnter={showIfNeeded} />
                    <Route path="/pros/pro_management" component={ProManagement} onEnter={hideIfNeeded} />
                    <Route path="/pros/pro_branches" component={ProBranches} onEnter={hideIfNeeded} />
                    <Route path="/pros/pro_unit" component={ProUnit} onEnter={hideIfNeeded} />
                    <Route path="/pros/pro_supply" component={ProSupply} onEnter={hideIfNeeded} />
                </Route>
            </Route>
        </Router>
    );
}