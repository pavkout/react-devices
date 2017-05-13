import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../device.post.css';

const { oneOf, oneOfType, element, array } = PropTypes;

class Mac extends Component {
  render() {
    const { model, color, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      macbook: model === 'macbook'
    });

    return (
      <div className={classes}>
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="screen"></div>
        <div className="bottom-bar"></div>
    </div>
    );
  }
}

Mac.propTypes = {
  model: oneOf(['macbook']),
  screen: oneOfType([element,array])
};

Mac.defaultProps = {
  model: 'macbook'
};

export default Mac;
