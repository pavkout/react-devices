import React, {PropTypes, Component} from 'react';

import { IPhone } from 'react-devices';
// import iPhone from 'iPhone';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { color: 'black', model: "iphone6", landscape: false };
  }

  handleColorClick(color) {
    this.setState({ color });
  }

  handleModelClick(model) {
    this.setState({ model });
  }
  handleLandscapeClick(landscape) {
    this.setState({ landscape });
  }

  render() {
    return (
      <div style={{ width: '100%', display: 'flex', 'justifyContent': 'center', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', display: 'flex', 'justifyContent': 'center' , flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', display: 'flex', 'justifyContent': 'center' }}>
            <button style={{ backgroundColor: 'gold', color: 'white' }} onClick={() => { this.handleColorClick('gold'); }}>Gold</button>
            <button style={{ backgroundColor: 'black', color: 'white' }} onClick={() => { this.handleColorClick('black'); }}>Black</button>
            <button style={{ backgroundColor: 'silver', color: 'white' }} onClick={() => { this.handleColorClick('silver'); }}>Silver</button>
            <button style={{ backgroundColor: 'white', color: 'black' }} onClick={() => { this.handleColorClick('white'); }}>White</button>
            <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => { this.handleColorClick('red'); }}>red</button>
            <button style={{ backgroundColor: 'yellow', color: 'white' }} onClick={() => { this.handleColorClick('yellow'); }}>Yellow</button>
            <button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => { this.handleColorClick('green'); }}>Green</button>
            <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => { this.handleColorClick('blue'); }}>Blue</button>
          </div>
          <div style={{ width: '100%', display: 'flex', 'justifyContent': 'center' }}>
            <button onClick={() => { this.handleModelClick('iphone6'); }}>iPhone 6</button>
            <button onClick={() => { this.handleModelClick('iphone6plus'); }}>iPhone 6 Plus</button>
            <button onClick={() => { this.handleModelClick('iphone5s'); }}>iPhone 5s</button>
            <button onClick={() => { this.handleModelClick('iphone5c'); }}>iPhone 5c</button>
          </div>
          <div style={{ width: '100%', display: 'flex', 'justifyContent': 'center' }}>
            <button onClick={() => { this.handleLandscapeClick(true); }}>Landscape</button>
            <button onClick={() => { this.handleLandscapeClick(false); }}>Portait</button>
          </div>
        </div>
        <IPhone
          model={this.state.model}
          color={this.state.color}
          landscape={this.state.landscape}
        />
      </div>);
  }
};
