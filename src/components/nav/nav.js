import React , {Component} from "react";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './nav.scss';


const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton className="right_icon_init" ><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="帮助文档" />
    <MenuItem primaryText="清理缓存" />
    <MenuItem primaryText="退出登录" />
  </IconMenu>
);

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
        this.state = {open:false,drawerWidth: '240'};
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
            if(clientWidth >= 960){
                this.setState({drawerWidth: 300}); 
            }else{
                this.setState({drawerWidth: clientWidth*0.75});
            }
            
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
                    iconElementRight={<Logged />}
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