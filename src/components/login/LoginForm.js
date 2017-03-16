import React, {Component, PropTypes} from "react";
import { Field, reduxForm } from "redux-form";
import "./login.scss";
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();

const renderTextField = ({ input, label, meta: { touched, error },...custom }) => (
  <TextField 
    hintText={label}
    errorText={touched && error}
    floatingLabelText={label}
    fullWidth={true}
    {...input}
    {...custom}
  />
);


const renderTextFieldPNG = ({ input, label, meta: { touched, error },...custom }) => (
  <div style={{position:'relative'}}>
      <TextField 
            hintText={label}
            errorText={touched && error}
            floatingLabelText={label}
            fullWidth={true}
            {...input}
            {...custom}
        />
        <img src="/api/img" className="login_code" />
    </div>
);

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { name, loginStatus , handleSubmit, loading} = this.props;
        //如果加载Auth未完成，则直接返回空标签;
        if(loginStatus) return(<div></div>);
        return (
            <div>
                {/*Auth加载完成后，根据逻辑加载相应页面*/}
                {loginStatus && 
                <div></div>
                }
                {!loginStatus &&
                    <div className="loginDiv back_white">
                        <div className="loginHeader">
                            <h4>用户登录</h4>
                        </div>
                        <form onSubmit={handleSubmit} className="loginForm">
                            <Field name="userName" component={renderTextField} label="请输入用户名" type="text" />
                            <Field name="password" component={renderTextField} label="请输入密码" type="password" />
                            <Field name="code" component={renderTextFieldPNG} label="请输入验证码" type="number" />
                            <RaisedButton label="提交" type="submit" className="center login_btn_set " fullWidth={true} primary />
                        </form>
                        <div className="loginFooter">
                            <p>深圳前海云东家科技有限公司</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

App = reduxForm({
  form: 'login' // a unique name for this form
})(App);

export default App;