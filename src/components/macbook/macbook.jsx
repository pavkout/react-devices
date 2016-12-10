import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../device.post.css';

export default class Mac extends Component {
  static propTypes = {
    model: PropTypes.oneOf(['macbook']),
    screen: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  };

  static defaultProps = {
    model: 'macbook',
  };

  constructor(props) {
    super(props);
  }

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
};
