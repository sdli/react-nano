import React, {Component} from 'react';
import {hashHistory} from "react-router";
import AppBar from 'material-ui/AppBar';
import Nav from './nav.js';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import './nav.scss';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
  constructor(){
    super();
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack(route){
    return function(){
      hashHistory.push(route);
    }
  }

  render() {
    const {title} = this.props;
    return (
      <div>
        <div className="appNavBar">
          <Nav />
        </div>
        <AppBar
          title={title}
          iconElementLeft={<IconButton onClick={this.handleGoBack('/')}><ArrowLeft /></IconButton>}
          titleStyle={{fontSize: '16px'}}
          className="leftNavHeaderBar"
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;