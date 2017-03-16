import { combineReducers}  from "redux";
import loginInfo from "./login";
import loading from './loading';
import { reducer as formReducer } from "redux-form";
const reducers = combineReducers({
    loginInfo,
    loading,
    form: formReducer
});

export default reducers;