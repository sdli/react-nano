import LoginForm from "./login/LoginForm.js";
import Loading from "./utils/loading.js";
import React , { Component } from "react";
import Tab from "./Tab.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = ({userName,password,dispatch}) =>{
        if(typeof userName === "undefined" || userName == null || typeof password === "undefined" || password == null){
            alert('请输入正确的用户名和密码！');
        }else{
            const {loginCheck} = this.props;
            loginCheck(userName,password);
        }
    }

    render(){
        return (
            // 在这里传递props和提交处理。
            <div>
                <MuiThemeProvider>
                    <LoginForm onSubmit={this.handleSubmit} {...this.props} />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Loading {...this.props} />
                </MuiThemeProvider>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default LoginPage;