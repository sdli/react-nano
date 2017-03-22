import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Popover from 'material-ui/Popover';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

export default class ToolbarExamplesSimple extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      shop: 's1',
      keyword: '',
      code: '',
      priceStart: 0,
      priceEnd: 0,
      open: false
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange = (event, index, value) => this.setState({value});
  handleShopChange = (e,index,shop) => this.setState({shop});
  handleClear = ()=>{
     this.setState({
        keyword: '',
        code: '',
        priceStart: 0,
        priceEnd: 0
      });
  }

  handleRequestClose = (type) => {
    return ()=>{
        this.setState({
          [type+'Open']: false
        });
    }
  };
  handleTouchTap = (type) => {
      // This prevents ghost click.
      return (event)=>{
        event.preventDefault();
        this.setState({
          [type+'Open']: true,
          [type+'AnchorEl']: event.currentTarget,
        });
      }
    };

  handleInputChange(name){
    switch (name){
      case 'keyword':
        return (e)=>this.setState({keyword:e.target.value});
      case 'code':
        return (e)=>this.setState({code:e.target.value});
      case 'priceStart':
        return (e)=>this.setState({priceStart: e.target.value});
      case 'priceEnd':
        return (e)=>this.setState({priceEnd: e.target.value});
    }
  }

  render() {
    const {handleSearch} = this.props;
    return (
      <Toolbar style={{backgroundColor: '#ffffff',borderBottom: '1px solid #f0f0f0',boxShadow:'0 2px 6px #f0f0f0'}}>
        <ToolbarGroup firstChild={true}>
          <div>
            <FlatButton
              onTouchTap={this.handleTouchTap('shop')}
              label="旗舰店"
              labelPosition="before"
              primary={false}
              icon={<ArrowDown />}
            />
            <Popover
              open={this.state.shopOpen}
              anchorEl={this.state.shopAnchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose('shop')}
            >
            <Menu style={{fontSize: '14px !important'}}>
                <MenuItem value={1} primaryText="旗舰店" />
                <MenuItem value={7} primaryText="体验店" />
            </Menu>
            </Popover>
          </div>
          <div>
            <FlatButton
              onTouchTap={this.handleTouchTap('pro')}
              label="全部商品"
              labelPosition="before"
              primary={false}
              icon={<ArrowDown />}
            />
            <Popover
              open={this.state.proOpen}
              anchorEl={this.state.proAnchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose('pro')}
            >
            <Menu style={{fontSize: '14px !important'}}>
                <MenuItem value={1} primaryText="全部商品" />
                <MenuItem value={2} primaryText="农产品"
                    rightIcon={<ArrowDropRight />}
                    menuItems={[
                        <MenuItem primaryText="蔬菜" />,
                        <MenuItem primaryText="水果" checked={true} />,
                    ]}    
                />
                <MenuItem value={3} primaryText="日用品" />
                <MenuItem value={4} primaryText="五金电料" />
                <MenuItem value={5} primaryText="酒水副食" />
                <MenuItem value={6} primaryText="厨房用品" />
                <MenuItem value={7} primaryText="宠物专区" />
            </Menu>
            </Popover>
          </div>
        </ToolbarGroup>
        <ToolbarGroup>
          <TextField hintText="关键词查询"  style={{width: '15%',marginRight:'10px',fontSize:'14px'}} value={this.state.keyword?this.state.keyword:''} onChange={this.handleInputChange('keyword')}/>
          <TextField hintText="编号查询"  style={{width: '15%',marginRight:'10px',fontSize:'14px'}} value={this.state.code?this.state.code:''} onChange={this.handleInputChange('code')}/>
          <TextField hintText="价格区间(>)" style={{width: '15%',marginRight:'10px',fontSize:'14px'}} value={this.state.priceStart?this.state.priceStart:''} onChange={this.handleInputChange('priceStart')}/>
          <TextField hintText="价格区间(<)" style={{width: '15%',marginRight:'10px',fontSize:'14px'}} value={this.state.priceEnd?this.state.priceEnd:''} onChange={this.handleInputChange('priceEnd')}/>
          <ToolbarSeparator />
          <RaisedButton label="查询" primary={true} onClick={handleSearch} />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="清空输入" onClick={this.handleClear} />
            <MenuItem primaryText="查询上一个" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}