import React, { Component } from 'react';

export default state => CustomComponent => class Connect extends Component {
  render() {
    let newState = {};

    if (typeof state === 'function') {
      newState = { ...this.props, ...state(this.props) };
    } else {
      newState = { ...this.props, ...state };
    }

    return <CustomComponent {...newState} />;
  }
};
