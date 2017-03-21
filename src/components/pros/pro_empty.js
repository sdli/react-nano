import React , { Component } from 'react';
import TouchApp from 'material-ui/svg-icons/action/touch-app';

class EmptyPro extends Component{
        constructor(props){
            super(props);
         }

        render(){
            return (
                <div style={{opacity:'0.7',textAlign:'center',width:'200px',height: '50px',position: 'absolute',left: '50%',marginLeft:'-100px',top:'50%',marginTop:'-25px'}}>
                    <p>
                        <TouchApp style={{margin:'12px',float:'left'}} />
                        <span style={{float: 'left', lineHeight: '50px',display:"block"}}>请选择左侧功能</span>
                    </p>
                </div>
            );
        }
}

export default EmptyPro;