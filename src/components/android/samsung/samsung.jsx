import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../../device.post.css';

export default class Samsung extends Component {
  static propTypes = {
    model: PropTypes.oneOf(['s5']),
    color: PropTypes.oneOf(['white', 'black']),
    landscape: PropTypes.bool,
    screen: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  };

  static defaultProps = {
    model: 's5',
    color: 'white',
    landscape: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { model, color, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      s5: model === 's5',
      black: color === 'black',
      white: color === 'white',
      landscape: landscape
    });

    return (
      <div className={classes}>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
            {this.props.screen}
        </div>
        <div className="home"></div>
      </div>
    );
  }
};
