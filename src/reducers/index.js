import { combineReducers}  from "redux";
import loginInfo from "./login";
import { reducer as formReducer } from "redux-form";
const reducers = combineReducers({
    loginInfo,
    form: formReducer
});

export default reducers;