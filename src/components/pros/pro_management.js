import React , { Component } from 'react';
import Table from "../tables/proList";
import IconButton from 'material-ui/IconButton';
import ProBar from '../nav/toobar_pro';
import './pros.scss';
import ButtonLine from '../buttons/button_group_line';
import LinearProgress from 'material-ui/LinearProgress';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import {cyan500} from "material-ui/styles/colors";

class newCom extends Component{
        constructor(props){
            super(props);
            this.heigthSet = parseInt(window.screen.availHeight) - 88 - 64 - 64;
            this.state = {completed: 100};
        }

        render(){
            const list = [
                ['农产品','蔬菜','水果','休闲水果'],
                ['宠物用品','狗狗用品','猫食品','狗绳','狗窝'],
                ['日用品','化妆品','护肤品','面膜','洗面奶','防晒霜','唇膏','唇彩','修眉工具']
            ];
            return (
                <div className="contentRightInset" style={{minHeight: this.heigthSet + 'px'}}>
                    <ProBar />
                    <div className="initDivPadding">
                        {list.map((val)=>{
                            return (
                                <ButtonLine list={val} seleted='0' />
                            );
                        })}
                        <div className="showMoreProList">
                            <IconButton tooltip="显示更多商品列表" touch={true} tooltipPosition="bottom-center">
                                 <ArrowDown color={cyan500} />
                            </IconButton>                  
                        </div>
                    </div>
                    <div>
                        <LinearProgress mode="determinate" value={this.state.completed} />
                    </div>
                    <div className="initDivPadding">
                        <Table />
                    </div>
                </div>
            );
        }
}

export default newCom;