import React, {Component, PropTypes} from "react";
import RefreshIndicator from 'material-ui/RefreshIndicator';

class Loading extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {loading} = this.props;
        //如果加载Auth未完成，则直接返回空标签；
        if(loading){ return (
            <div style={{position: 'fixed',left:0,top: 0,width:'100%',height: '100%',zIndex:9998}}>
                <div style={{position:'absolute',width:'100%',height:'100%',top:0,left:0,backgroundColor:'#4d4d4d',opacity:'0.2',zIndex:9998}}></div>
                <RefreshIndicator
                    size={40}
                    left={10}
                    top={0}
                    status="loading"
                    style={{
                            position: 'relative',
                            margin: '120px auto',
                            zIndex: 9999,
                        }}
                />
            </div>
        );}else{
            return null;
        }
    }
}

export default Loading;