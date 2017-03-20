import {connect} from "react-redux";
import Index from "../components/index/index";
import * as actions from "../actions/login.js";

const IndexContainer = connect(
    state=>{
        return {
        loginStatus: state.loginInfo.loginStatus,
        loading: state.loading.loading,
        name: state.loginInfo.name
    };},
    actions
)(Index); 

export default IndexContainer;