import React , { Component } from 'react';
import Table from "../tables/proList";
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import ProBar from '../nav/toolbar_pro';
import './pros.scss';
import ButtonLine from '../buttons/button_group_line';
import LinearProgress from 'material-ui/LinearProgress';
import {cyan500} from "material-ui/styles/colors";
import PureRenderMixin from "react-addons-pure-render-mixin";

class newCom extends Component{
        constructor(props){
            super(props);
            this.heigthSet = parseInt(window.screen.availHeight) - 88 - 64 - 64;
            this.state = {completed: 0,mode: 'determinate',opacity:0.3};
            this.handleSearch = this::(this.handleSearch);
            this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        }

        handleSearch(){
            let that =this;
            setTimeout(function(){   
                that.setState({completed:20,opacity:1});
            },200);
            setTimeout(function(){   
                that.setState({completed:50,opacity:1});
            },500);
            setTimeout(function(){   
                that.setState({completed:90,opacity:1});
            },1000);
            setTimeout(function(){   
                that.setState({completed:0,opacity:0.3});
            },2000);
        }

        render(){
            console.log('management components');
            const list = [
                ['农产品','蔬菜','水果','休闲水果'],
                ['宠物用品','狗狗用品','猫食品','狗绳','狗窝'],
                ['日用品','化妆品','护肤品','面膜','洗面奶','防晒霜','唇膏','唇彩','修眉工具']
            ];
            const contentStyle = {minHeight: this.heigthSet + 'px'};
            const LinearStyle = {opacity:this.state.opacity};
            return (
                <div className="contentRightInset" style={contentStyle}>
                    <ProBar handleSearch={this.handleSearch} />
                    <div className="initDivPadding">
                        <RaisedButton label="新增商品" primary={true} />
                    </div>
                    <div>
                        <LinearProgress mode={this.state.mode} value={this.state.completed} min="0" max="100" style={LinearStyle}  />
                    </div>
                    <div className="initDivPadding">
                        <Table />
                    </div>
                </div>
            );
        }
}

export default newCom;