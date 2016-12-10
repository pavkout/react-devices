import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../../device.post.css';

export default class Nexus extends Component {
  static propTypes = {
    model: PropTypes.oneOf(['nexus5']),
    landscape: PropTypes.bool,
    screen: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  };

  static defaultProps = {
    model: 'nexus5',
    landscape: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { model, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      nexus5: model === 'nexus5',
      landscape: landscape
    });

    return (
      <div className={classes}>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="screen">
          {this.props.screen}
        </div>
      </div>
    );
  }
};
