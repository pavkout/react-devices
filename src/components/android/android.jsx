import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../device.post.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class Android extends Component {
  render() {
    const { model, color, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      nexus5: model === 'nexus5',
      lumia920: model === 'lumia920',
      s5: model === 's5',
      'htc-one': model === 'htc-one',
      black: color === 'black' && ( model === 'lumia920' || model === 's5'),
      white: color === 'white' && ( model === 'lumia920' || model === 's5'),
      yellow: color === 'yellow' && model === 'lumia920',
      red: color === 'red' && model === 'lumia920',
      blue: color === 'blue' && model === 'lumia920',
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

Android.propTypes = {
  model: oneOf(['nexus5', 'lumia920', 's5', 'htc-one']),
  color: oneOf(['white', 'black', 'yellow', 'red', 'blue']),
  landscape: bool,
  screen: oneOfType([element,array])
};

Android.defaultProps = {
  model: 's5',
  color: 'white',
  landscape: false
};

export default Android;
