import LoginForm from "./Form.js";
import React , { Component } from "react";
import Tab from "./Tab.js";

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = ({userName,password}) =>{
        console.log(userName,password);
        const {loginCheck} = this.props;
        loginCheck(userName,password);
    }

    render(){
        return (
            // 在这里传递props和提交处理。
            <div>
                <LoginForm onSubmit={this.handleSubmit} {...this.props} />
                <Tab {...this.props} />
            </div>
        );
    }
}

export default LoginPage;