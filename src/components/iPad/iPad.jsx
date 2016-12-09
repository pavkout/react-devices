import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../device.post.css';

export default class IPad extends Component {
  static propTypes = {
    model: PropTypes.oneOf(['ipad']),
    color: PropTypes.oneOf(['black', 'silver']),
    landscape: PropTypes.bool,
    screen: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  };

  static defaultProps = {
    model: 'ipad',
    color: 'silver',
    landscape: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { model, color, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      ipad: model === 'ipad',
      black: color === 'black',
      silver: color === 'silver',
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
};
