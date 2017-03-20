import React , { Component } from "react";
import Nav from '../nav/nav.js';
import IndexMenu from './indexMenu.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class index extends Component{
    constructor(props){
        super(props);
    }

    render (){
        const { name, loginStatus , handleSubmit, loading} = this.props;
        if(!loginStatus) return null;
        return (
            <div>
                <MuiThemeProvider>
                    <header>
                        {loginStatus &&
                            <Nav name={name} />
                        }
                    </header>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <IndexMenu loginStatus={loginStatus}/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default index;