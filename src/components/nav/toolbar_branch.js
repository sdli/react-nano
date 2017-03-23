import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import "./nav.scss";

export default class ToolbarExamplesSimple extends Component {

  constructor(props) {
    super(props);
    this.state = {
        value: 1
    };
  }

  handleChange(event, key, value){
    console.log(value);
  }

  render() {
    // const {addIterm} = this.props;
    return (
      <Toolbar className="toolBarInit">
        <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="默认行业" />
                <MenuItem value={2} primaryText="服装业" />
                <MenuItem value={3} primaryText="餐饮业" />
            </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
            <RaisedButton label="新增分类" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}