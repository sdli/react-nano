import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './button.scss';
import {cyan500} from "material-ui/styles/colors";

const button_group_line = (props) => {
  const style={
    margin: '4px'
  };

  const seleted={
    margin: '4px',
    border: '1px solid '+ cyan500
  };

  return (
    <div>
        {props.list.map((val,index)=>{
            if(index == props.seleted){
                return <FlatButton label={val} primary={true} style={seleted} />
            }else{
                return <FlatButton label={val} style={style} />
            }
        })}
    </div>);
};

export default button_group_line;