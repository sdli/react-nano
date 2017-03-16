import React , {Component} from "react";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

class Nav extends Component{
    /*
    抽屉效果使用material-ui的drawer,
    使用state注册客户端宽度，并赋值给drawer,
    留空出点击关闭drawer。
    */
    constructor(props){
        super(props);
        /*
        open用户开关drawer，drawerWidth计算drawer宽度
        */
        this.state = {open:false,drawerWidth: '240px'};
        this.ShowLeftCase = this.ShowLeftCase.bind(this);
    }

    ShowLeftCase(){
        this.setState({open: !this.state.open});
    }

    CloseLeftCase(){
        this.setState({open: false});
    }

    /*
    检测是否在客户端环境，并获取availWidth。
    */
    componentWillMount(){
        if(typeof window !== 'undefined'){
            let clientWidth = window.screen.availWidth;
            this.setState({drawerWidth: clientWidth*0.75});
        }
    }

    render(){
        return (
            <div>
                <AppBar
                    title="我的云东家"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.ShowLeftCase}
                    titleStyle={{fontSize: '16px'}} 
                />
                <Drawer 
                    docked={false}
                    width={this.state.drawerWidth}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <AppBar
                        title="账户管理"
                        onTouchTap={this.handleClose}
                        titleStyle={{fontSize: '16px'}}
                        showMenuIconButton={false}
                    />
                    <List>
                        <ListItem primaryText="管理首页" leftIcon={<ContentInbox />} />
                        <ListItem primaryText="个人信息" leftIcon={<ActionGrade />} />
                        <ListItem primaryText="清理缓存" leftIcon={<ContentSend />} />
                        <ListItem primaryText="退出登录" leftIcon={<ContentDrafts />} />
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default Nav;