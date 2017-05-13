import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../../device.post.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class HTC extends Component {
  render() {
    const { model, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      'htc-one': model === 'htc-one',
      landscape: landscape
    });

    return (
      <div className={classes}>
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
          {this.props.screen}
        </div>
      </div>
    );
  }
}

HTC.propTypes = {
  model: oneOf(['htc-one']),
  landscape: bool,
  screen: oneOfType([element,array])
};

HTC.defaultProps = {
  model: 'htc-one',
  landscape: false
};

export default HTC;
