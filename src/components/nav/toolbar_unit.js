import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import "./nav.scss";

export default class ToolbarExamplesSimple extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // const {addIterm} = this.props;
    const style={
        width: '100px',
        marginRight:'10px',
        fontSize:'14px'
    };
    return (
      <Toolbar className="toolBarInit">
        <ToolbarGroup firstChild={true}>
        </ToolbarGroup>
        <ToolbarGroup>
            <TextField hintText="输入单位名称" style={style} />
            <RaisedButton label="新增分类" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}