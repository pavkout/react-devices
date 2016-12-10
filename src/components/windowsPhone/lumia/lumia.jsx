import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../../device.post.css';

export default class Lumia extends Component {
  static propTypes = {
    model: PropTypes.oneOf(['lumia920']),
    color: PropTypes.oneOf(['black', 'white', 'yellow', 'red', 'blue']),
    landscape: PropTypes.bool,
    screen: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  };

  static defaultProps = {
    model: 'lumia920',
    color: 'yellow',
    landscape: false
  };

  constructor(props) {
    super(props);
  }

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
      <div class={classes}>
        <div class="top-bar"></div>
        <div class="volume"></div>
        <div class="camera"></div>
        <div class="speaker"></div>
        <div class="screen">
          {this.props.screen}
        </div>
      </div>
    );
  }
};
