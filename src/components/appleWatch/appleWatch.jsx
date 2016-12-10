import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../applewatch.min.css';

export default class AppleWatch extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['yellow-gold', 'rose-gold', 'space-black', 'stainless-steel', 'space-gray']),
    small: PropTypes.bool,
    screen: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  };

  static defaultProps = {
    color: 'space-gray',
    small: false
  };

  constructor(props) {
    super(props);
  }

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
};
