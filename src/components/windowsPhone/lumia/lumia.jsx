import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../../device.post.css';

const { oneOf, bool, oneOfType, element, array } = PropTypes;

class Lumia extends Component {
  render() {
    const { model, color, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      lumia920: model === 'lumia920',
      black: color === 'black',
      white: color === 'white',
      yellow: color === 'yellow',
      red: color === 'red',
      blue: color === 'blue',
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
