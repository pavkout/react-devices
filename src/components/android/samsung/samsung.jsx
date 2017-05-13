import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import colors from '../../../constants';

import '../../../device.post.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class Samsung extends Component {
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
        <div className="sleep"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
            {this.props.screen}
        </div>
        <div className="home"></div>
      </div>
    );
  }
}

Samsung.propTypes = {
  model: oneOf(['s5']),
  color: oneOf(['white', 'black']),
  landscape: bool,
  screen: oneOfType([element,array])
};

Samsung.propTypes = {
  model: 's5',
  color: 'white',
  landscape: false
};

export default Samsung;
