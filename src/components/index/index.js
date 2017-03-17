import React , { Component } from "react";
import Nav from '../nav/nav.js';
// import IndexMenu from './indexMenu.js';

class index extends Component{
    constructor(props){
        super(props);
    }

    render (){
        const { name, loginStatus , handleSubmit, loading} = this.props;
        if(!loginStatus) return null;
        return (
            <div>
                <header>
                    {loginStatus &&
                        <Nav name={name} />
                    }
                </header>
                {/*<IndexMenu indexMenu={this.props.indexMenu}/>*/}
            </div>
        );
    }
}

export default index;