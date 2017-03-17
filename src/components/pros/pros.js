import React , { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ProList = function(){
    return (
        <div>
            <List style={{backgroundColor: '#ffffff'}}>
                <ListItem primaryText="商品管理" leftIcon={<ContentInbox />} style={{border_bottom:'1px solid #f0f0f0'}} />
                <ListItem primaryText="分类管理" leftIcon={<ActionGrade />} style={{border_bottom:'1px solid #f0f0f0'}} />
                <ListItem primaryText="单位管理" leftIcon={<ContentSend />} style={{border_bottom:'1px solid #f0f0f0'}} />
                <ListItem primaryText="供应商管理" leftIcon={<ContentDrafts />} style={{border_bottom:'1px solid #f0f0f0'}} />
                <ListItem primaryText="条形码管理" leftIcon={<ContentInbox />} 
                    style={{border_bottom:'1px solid #f0f0f0'}}
                    nestedItems={[
                        <ListItem key={1} primaryText="条码酷商品" leftIcon={<ContentDrafts />} style={{border_bottom:'1px solid #f0f0f0'}} />,
                        <ListItem key={2} primaryText="分配条形码商品到分店" leftIcon={<ContentDrafts />} style={{border_bottom:'1px solid #f0f0f0'}} />,
                    ]}/>
            </List>
        </div>
    );
}

class Pros extends Component{
        constructor(props){
            super(props);
        }

        render(){
            return (
                  <MuiThemeProvider>
                      <ProList />
                </MuiThemeProvider>
            );
        }
}

export default Pros;