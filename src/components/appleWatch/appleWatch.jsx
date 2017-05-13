import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../applewatch.min.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class AppleWatch extends Component {
  render() {
    const { color, small } = this.props;

    const classes = classNames({
      'apple-watch': true,
      'apple-watch--small': this.props.small,
      [`apple-watch--${this.props.color}`]: true
    });

    return (
      <div className="apple-watch-container">
        <div className={classes}>
          <div className="apple-watch__screen"></div>
        </div>
      </div>
    );
  }
}

AppleWatch.propTypes = {
  color: oneOf(['yellow-gold', 'rose-gold', 'space-black', 'stainless-steel', 'space-gray']),
  small: bool,
  screen: oneOfType([element,array])
};

AppleWatch.defaultProps = {
  color: 'space-gray',
  small: false
};

export default AppleWatch;
