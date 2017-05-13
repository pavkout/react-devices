import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../device.post.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class IPad extends Component {
  render() {
    const { model, color, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      ipad: model === 'ipad',
      [color]: color,
      landscape: landscape
    });

    return (
      <div className={classes}>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
            {this.props.screen}
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
      </div>
    );
  }
}

IPad.propTypes = {
  model: oneOf(['ipad']),
  color: oneOf(['black', 'silver']),
  landscape: bool,
  screen: oneOfType([element,array])
};

IPad.defaultProps = {
  model: 'ipad',
  color: 'silver',
  landscape: false
}

export default IPad;
