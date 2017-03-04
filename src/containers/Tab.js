import {connect} from "react-redux";
import Tab from "../components/Tab";
import * as actions from "../actions/login.js";

const tabContainer = connect(
    state=>{return {loginStatus:state.loginInfo.loginStatus};},
    actions
)(Tab);

export default tabContainer;