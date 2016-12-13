import React, { Component, PropTypes } from 'react';
// import { IPhone4sRealBlack, IPhone4sRealWhite } from './Real';
import IPhone4sRealWhite from './Real/iPhone4sWhite.jsx';
import IPhone4sRealBlack from './Real/iPhone4sBlack.jsx';

class IPhone4s extends Component {
  static propTypes = {
    flat: PropTypes.bool,
    color: PropTypes.oneOf(['black', 'white'])
  };

  static defaultProps = {
    color: 'black'
  };

  render() {
    let markup = null;

    switch (this.props.color) {
      case 'black':
        markup = (<IPhone4sRealBlack />);
        break;
      case 'white':
        markup = (<IPhone4sRealWhite />);
        break;
      default:
        markup = (<IPhone4sRealWhite />);
        break;
    };

    return (markup);
  }
}

export default IPhone4s;
