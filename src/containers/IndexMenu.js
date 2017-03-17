import {connect} from "react-redux";
import IndexMenu from "../components/index/indexMenu";
import * as actions from "../actions/login.js";

const indexMenuContainer = connect(
    state=>{
        return {
        indexMenu: state.indexMenu.indexMenu
    };},
    actions
)(IndexMenu); 

export default indexMenuContainer;