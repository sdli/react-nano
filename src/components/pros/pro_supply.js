import React , { Component } from 'react';
import Bar from '../nav/toolbar_unit';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './pros.scss';

class newCom extends Component{
        constructor(props){
            super(props);
            this.state = {
                list:[
                    {
                        unit: '斤',
                        key: 'j' 
                    },
                    {
                        unit: '把',
                        key: 'b' 
                    },
                    {
                        unit: '套',
                        key: 't' 
                    },
                    {
                        unit: '件',
                        key: 'j' 
                    },
                    {
                        unit: '包',
                        key: 'b' 
                    }
                ]
            }
            this.handleEdit = this.handleEdit.bind(this);
        }
        
        handleEdit(index){
            return function(e){
                e.stopPropagation();
                console.log(index);
            }
        }

        tableCell = (props,index)=>{
            const that = this;
            return (
                <TableRow key={index} onClick={this.handleEdit}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{props.unit}</TableRowColumn>
                    <TableRowColumn>{props.key}</TableRowColumn>
                    <TableRowColumn>
                        <FlatButton key={index} onClick={this.handleEdit(index)} >编辑</FlatButton>
                    </TableRowColumn>
                </TableRow>
            );
        }

        render(){
            return (
                <div className="contentRightInset" >
                    <Bar />
                     <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>单位</TableHeaderColumn>
                            <TableHeaderColumn>首字母</TableHeaderColumn>
                            <TableHeaderColumn>操作</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.state.list.map(
                                (val,index)=>{
                                    return this.tableCell(val,index);
                                }
                            )}
                        </TableBody>
                    </Table>
                </div>
            );
        }
}

export default newCom;