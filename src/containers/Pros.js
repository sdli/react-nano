import {connect} from "react-redux";
import Pros from "../components/pros/pros.js";
import * as actions from "../actions/login.js";

const ProsContainer = connect(
    state=>{
        return {
        name:state.loginInfo.name,
        loginStatus:state.loginInfo.loginStatus,
        loading: state.loading.loading,
        indexMenu: state.indexMenu.indexMenu
    };},
    actions
)(Pros); 

export default ProsContainer;