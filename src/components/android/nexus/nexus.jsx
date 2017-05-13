import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../../device.post.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class Nexus extends Component {
  render() {
    const { model, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      [model]: model,
      landscape: landscape
    });

    return (
      <div className={classes}>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="screen">
          {this.props.screen}
        </div>
      </div>
    );
  }
}

Nexus.propTypes = {
  model: oneOf(['nexus5']),
  landscape: bool,
  screen: oneOfType([element,array])
};

Nexus.defaultProps = {
  model: 'nexus5',
  landscape: false
};

export default Nexus;
