import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../../device.post.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class Lumia extends Component {
  render() {
    const { model, color, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      [model]: model,
      [color]: color,
      landscape: landscape
    });

    return (
      <div className={classes}>
        <div className="top-bar"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="speaker"></div>
        <div className="screen">
          {this.props.screen}
        </div>
      </div>
    );
  }
}

Lumia.propTypes = {
  model: oneOf(['lumia920']),
  color: oneOf(['black', 'white', 'yellow', 'red', 'blue']),
  landscape: bool,
  screen: oneOfType([element,array])
};

Lumia.defaultProps = {
  model: 'lumia920',
  color: 'yellow',
  landscape: false
};

export default Lumia;
