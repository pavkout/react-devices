import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../device.post.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class iPhone extends Component {
  render() {
    const { model, color, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      iphone6: model === 'iphone6',
      iphone6plus: model === 'iphone6plus',
      iphone5s: model === 'iphone5s',
      iphone5c: model === 'iphone5c',
      iphone4s: model === 'iphone4s',
      black: color === 'black',
      silver: color === 'silver',
      gold: color === 'gold',
      white: color === 'white' && model === 'iphone5c',
      red: color === 'red' && model === 'iphone5c',
      yellow: color === 'yellow' && model === 'iphone5c',
      green: color === 'green' && model === 'iphone5c',
      blue: color === 'blue' && model === 'iphone5c',
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

iPhone.propTypes = {
  model: oneOf(['iphone5c', 'iphone5s', 'iphone6plus', 'iphone6', 'iphone4s']),
  color: oneOf(['silver', 'black', 'gold', 'white', 'red', 'yellow', 'green', 'blue']),
  landscape: bool,
  screen: oneOfType([element,array])
};

iPhone.defaultProps = {
  model: 'iphone6',
  color: 'silver',
  landscape: false
};

export default iPhone;
