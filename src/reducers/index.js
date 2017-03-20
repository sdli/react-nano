import { combineReducers}  from "redux";
import loginInfo from "./login";
import loading from './loading';
import indexMenu from "./indexMenu";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
    loginInfo,
    loading,
    indexMenu,
    form: formReducer
});

export default reducers;