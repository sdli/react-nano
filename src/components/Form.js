import React, {Component, PropTypes} from "react";
import { Field, reduxForm } from "redux-form";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { name, loginStatus ,handleSubmit,loading} = this.props;
        //如果加载Auth未完成，则直接返回空标签；
        if(loading) return (<div></div>);
        return (
            <div>
                {/*Auth加载完成后，根据逻辑加载相应页面*/}
                {loginStatus && 
                <div>当前登陆的是{'name'},登陆状态【{"1234"}】</div>
                }
                {!loginStatus && 
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="userName">用户名：</label>
                            <Field name="userName" component="input" type="text" label="请输入用户名" />
                        </div>
                        <div>
                            <label htmlFor="password">密码：</label>
                            <Field name="password" component="input" type="password"  label="请输入密码" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                }
            </div>
        );
    }
}

App = reduxForm({
  form: 'login' // a unique name for this form
})(App);

export default App;