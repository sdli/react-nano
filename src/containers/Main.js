import React, { Component, PropTypes } from 'react';

class Main extends Component {
  render() {

    return (
      <div>
          {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
