import React,{Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Checkbox from 'material-ui/Checkbox';
import './table.scss';

const MoreFunc = ()=>{
    return (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="下架" style={{fontSize: '14px'}} />
      <MenuItem primaryText="删除" style={{fontSize: '14px'}} />
      <MenuItem primaryText="编辑" style={{fontSize: '14px'}} />
    </IconMenu>);
};

const TableController = (props)=>{
    return (
        <div className="fixedTableBar">
            <Toolbar style={{backgroundColor:'#ffffff'}}>
                <ToolbarGroup firstChild={true}>
                    <Checkbox
                         label="全选"
                        style={{margin: 16}}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <IconMenu
                        iconButtonElement={
                                <FlatButton
                                    label="每页显示：30"
                                    secondary={true}
                                />
                        }
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        >
                        <MenuItem primaryText="30" />
                        <MenuItem primaryText="50" />
                        <MenuItem primaryText="100" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        </div>
    );
}

class table_pro extends Component{

    constructor(props){
        super(props);
        this.state ={
            seletedRow: []
        };
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }

    handleRowSelect(row){
        this.setState({
            seletedRow: row
        });
    }

    render(){
        return (
            <div>
                <Table multiSelectable="true" onRowSelection={this.handleRowSelect}>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>商品名</TableHeaderColumn>
                        <TableHeaderColumn>单价</TableHeaderColumn>
                        <TableHeaderColumn>条形码</TableHeaderColumn>
                        <TableHeaderColumn>商品分类</TableHeaderColumn>
                        <TableHeaderColumn>采购价</TableHeaderColumn>
                        <TableHeaderColumn>售价</TableHeaderColumn>
                        <TableHeaderColumn>单位</TableHeaderColumn>
                        <TableHeaderColumn>库存预警</TableHeaderColumn>
                        <TableHeaderColumn>易记码 </TableHeaderColumn>
                        <TableHeaderColumn>品牌 </TableHeaderColumn>
                        <TableHeaderColumn>供应商 </TableHeaderColumn>
                        <TableHeaderColumn>保质期 </TableHeaderColumn>
                        <TableHeaderColumn>过期状态 </TableHeaderColumn>
                        <TableHeaderColumn>状态 </TableHeaderColumn>
                        <TableHeaderColumn>操作 </TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow rowNumber={1}>
                        <TableRowColumn>毛巾</TableRowColumn>
                        <TableRowColumn>23</TableRowColumn>
                        <TableRowColumn>123231</TableRowColumn>
                        <TableRowColumn>日用品</TableRowColumn>
                        <TableRowColumn>17.6</TableRowColumn>
                        <TableRowColumn>25</TableRowColumn>
                        <TableRowColumn>条</TableRowColumn>
                        <TableRowColumn>123</TableRowColumn>
                        <TableRowColumn>009</TableRowColumn>
                        <TableRowColumn>洁丽雅</TableRowColumn>
                        <TableRowColumn>广州洁丽雅毛巾</TableRowColumn>
                        <TableRowColumn>3年</TableRowColumn>
                        <TableRowColumn>未过期</TableRowColumn>
                        <TableRowColumn>已上架</TableRowColumn>
                        <TableRowColumn children={<MoreFunc />}></TableRowColumn>
                    </TableRow>
                    <TableRow rowNumber={2}>
                        <TableRowColumn>毛巾</TableRowColumn>
                        <TableRowColumn>23</TableRowColumn>
                        <TableRowColumn>123231</TableRowColumn>
                        <TableRowColumn>日用品</TableRowColumn>
                        <TableRowColumn>17.6</TableRowColumn>
                        <TableRowColumn>25</TableRowColumn>
                        <TableRowColumn>条</TableRowColumn>
                        <TableRowColumn>123</TableRowColumn>
                        <TableRowColumn>009</TableRowColumn>
                        <TableRowColumn>洁丽雅</TableRowColumn>
                        <TableRowColumn>广州洁丽雅毛巾</TableRowColumn>
                        <TableRowColumn>3年</TableRowColumn>
                        <TableRowColumn>未过期</TableRowColumn>
                        <TableRowColumn>已上架</TableRowColumn>
                        <TableRowColumn children={<MoreFunc />}></TableRowColumn>
                    </TableRow>
                    <TableRow rowNumber={3}>
                        <TableRowColumn>毛巾</TableRowColumn>
                        <TableRowColumn>23</TableRowColumn>
                        <TableRowColumn>123231</TableRowColumn>
                        <TableRowColumn>日用品</TableRowColumn>
                        <TableRowColumn>17.6</TableRowColumn>
                        <TableRowColumn>25</TableRowColumn>
                        <TableRowColumn>条</TableRowColumn>
                        <TableRowColumn>123</TableRowColumn>
                        <TableRowColumn>009</TableRowColumn>
                        <TableRowColumn>洁丽雅</TableRowColumn>
                        <TableRowColumn>广州洁丽雅毛巾</TableRowColumn>
                        <TableRowColumn>3年</TableRowColumn>
                        <TableRowColumn>未过期</TableRowColumn>
                        <TableRowColumn>已上架</TableRowColumn>
                        <TableRowColumn children={<MoreFunc />}></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>毛巾</TableRowColumn>
                        <TableRowColumn>23</TableRowColumn>
                        <TableRowColumn>123231</TableRowColumn>
                        <TableRowColumn>日用品</TableRowColumn>
                        <TableRowColumn>17.6</TableRowColumn>
                        <TableRowColumn>25</TableRowColumn>
                        <TableRowColumn>条</TableRowColumn>
                        <TableRowColumn>123</TableRowColumn>
                        <TableRowColumn>009</TableRowColumn>
                        <TableRowColumn>洁丽雅</TableRowColumn>
                        <TableRowColumn>广州洁丽雅毛巾</TableRowColumn>
                        <TableRowColumn>3年</TableRowColumn>
                        <TableRowColumn>未过期</TableRowColumn>
                        <TableRowColumn>已上架</TableRowColumn>
                        <TableRowColumn children={<MoreFunc />}></TableRowColumn>
                    </TableRow>
                    </TableBody>
                </Table>
                <TableController />
            </div>
        );
    }
}

export default table_pro;