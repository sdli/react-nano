import React , { Component } from 'react';
import Bar from '../nav/toolbar_branch';
import BranchCell from './utils/branch';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import './pros.scss';

class newCom extends Component{
        constructor(props){
            super(props);
        }
        
        render(){
            console.log('management components');
            const list = [
                {title: '农产品',
                 list: [
                    {tag:'1',label:'副产品'},
                    {tag:'2',label:'有机食品'},
                    {tag:'3',label:'呵呵食品'}]
                },
                {title: '副食',
                 list: [
                    {tag:'1',label:'副产品'},
                    {tag:'2',label:'有机食品'},
                    {tag:'3',label:'呵呵食品'}]
                },
                {title: '日用品',
                 list: [
                    {tag:'1',label:'面膜'},
                    {tag:'2',label:'护肤霜'},
                    {tag:'3',label:'洗手液'},
                    {tag:'4',label:'完美系列护肤品'},
                    {tag:'5',label:'香奈儿香水'},
                    {tag:'6',label:'进口口红'},
                    {tag:'7',label:'国产口红'},
                    {tag:'8',label:'修眉工具包'}
                ]},
                
            ];
            const contentStyle = {minHeight: this.heigthSet + 'px'};
            return (
                <div className="contentRightInset" style={contentStyle}>
                    <Bar />
                    {list.map((val)=>{
                        return (
                            <BranchCell title={val.title} list={val.list} />
                        );
                    })}
                </div>
            );
        }
}

export default newCom;