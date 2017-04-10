import React , { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {hashHistory} from "react-router";
import NavHeader from '../nav/navBar';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './pros.scss';
import DefaultTheme from '../theme/default.theme.js';

class ProList extends Component{
    constructor(){
        super();
        this.state = {open: true};
        this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
        this.handleRouter = this.handleRouter.bind(this);
    }

    handleNestedListToggle(){
        this.setState({open: !this.state.open});
    }

    handleRouter(route){
        return function(){
            hashHistory.push(route);
        }
    }
    /*
    *子组件，翻页为主组件
    */

    render(){
         return (
            <div className="contentInit">
                <List style={{backgroundColor: '#ffffff'}} className="leftNavBar">
                    <ListItem primaryText="商品管理" leftIcon={<ContentInbox />} onClick={this.handleRouter('/pros/pro_management')} style={{border_bottom:'1px solid #f0f0f0'}} innerDivStyle={{fontSize: '14px'}} />
                    <Divider style={{backgroundColor:'#f0f0f0'}} />
                    <ListItem primaryText="分类管理" leftIcon={<ActionGrade />} onClick={this.handleRouter('/pros/pro_branches')} style={{border_bottom:'1px solid #f0f0f0'}} innerDivStyle={{fontSize: '14px'}} />
                    <Divider style={{backgroundColor:'#f0f0f0'}} />
                    <ListItem primaryText="单位管理" leftIcon={<ContentSend />} onClick={this.handleRouter('/pros/pro_unit')} style={{border_bottom:'1px solid #f0f0f0'}} innerDivStyle={{fontSize: '14px'}} />
                    <Divider style={{backgroundColor:'#f0f0f0'}} />
                    <ListItem primaryText="供应商管理" leftIcon={<ContentDrafts />} onClick={this.handleRouter('/pros/pro_supply')} style={{border_bottom:'1px solid #f0f0f0'}} innerDivStyle={{fontSize: '14px'}} />
                    <Divider style={{backgroundColor:'#f0f0f0'}} />
                    <ListItem primaryText="条形码管理" leftIcon={<ContentInbox />}
                        innerDivStyle={{fontSize: '14px'}} 
                        style={{border_bottom:'1px solid #f0f0f0'}}
                        open={this.state.open}
                        onNestedListToggle={this.handleNestedListToggle}
                        nestedItems={[
                            <Divider style={{backgroundColor:'#f0f0f0'}} inset={true} />,
                            <ListItem key={1} primaryText="我的条码库" leftIcon={<ContentDrafts />} style={{border_bottom:'1px solid #f0f0f0'}} innerDivStyle={{fontSize: '14px'}} onClick={this.handleRouter('/pros/pro_code_check')} />,
                            <Divider style={{backgroundColor:'#f0f0f0'}} inset={true} />,
                            <ListItem key={2} primaryText="分配条形码商品到分店" leftIcon={<ContentDrafts />} style={{border_bottom:'1px solid #f0f0f0'}} innerDivStyle={{fontSize: '14px'}} onClick={this.handleRouter('/pros/pro_code_assign')} />,
                        ]}/>
                    <Divider style={{backgroundColor:'#f0f0f0'}} />
                </List>
            </div>
        );
    }
}

class Pros extends Component{
    constructor(props){
        super(props);
        this.leftWidth = 0;
    }

    componentWillMount(){
        if(typeof window !== 'undefined'){
            this.leftHeight = parseInt(window.screen.availHeight) - 64 ;
            console.log(this.leftHeight);
        }
    }

    render(){
        const {loginStatus,indexMenu} = this.props;
        if(!loginStatus) return null;
        return (
            <div>
                <MuiThemeProvider muiTheme={DefaultTheme}>
                    <NavHeader title="商品管理" {...this.props} />
                </MuiThemeProvider>
                <div className="contentInit">
                    <MuiThemeProvider muiTheme={DefaultTheme}>
                        <div className={indexMenu?"contentLeft":"hide"} style={{height: this.leftHeight + 'px'}}>
                            <ProList />
                        </div>
                    </MuiThemeProvider>
                    <MuiThemeProvider muiTheme={DefaultTheme}>
                        <div className="contentRight">
                            {this.props.children}
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default Pros;