import React , { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import "../pros.scss";

class newCom extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            arr: props.list
        };
    }

    handleRequestDelete = (tag) => {
        if(confirm('是否删除该分类')){
            const tempArr = this.state.arr;
            const chipToDelete = tempArr.map((chip) => chip.tag).indexOf(tag);
            tempArr.splice(chipToDelete, 1);
            this.setState({arr: tempArr});
        }
    };

    render(){
        const that = this;
        const fontSet = {
            fontSize: '11px'
        };
        console.log('branch!');
        return (
            <div className="branchCell">
                <div className="branchCellHead grey_font">
                    <span className="push_left">{this.state.title}</span>
                    <IconMenu
                        className="push_right branch_func"
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                        <MenuItem primaryText="删除" />
                        <MenuItem primaryText="添加分类" />
                    </IconMenu>
                </div>
                <div className="branchCellBody">
                    {this.state.arr.map((val)=>{
                        return (
                            <Chip
                                key={val.tag}
                                onRequestDelete={() => this.handleRequestDelete(val.tag)}
                                className="branchChip"
                            >
                            <Avatar size={32} style={fontSet}>{this.state.title[0]}</Avatar>
                            {val.label}
                            </Chip>
                        );
                    })}
                    <div style={{clear:'both'}}></div>
                </div>
            </div>
        );
    }
}

export default newCom;
