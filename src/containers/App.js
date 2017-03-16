import {connect} from "react-redux";
import App from "../components/App";
import * as actions from "../actions/login.js";

const loginContainer = connect(
    state=>{
        return {
        name:state.loginInfo.name,
        loginStatus:state.loginInfo.loginStatus,
        loading: state.loading.loading
    };},
    actions
)(App); 

export default loginContainer;