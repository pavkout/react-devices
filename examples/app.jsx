import React, {PropTypes, Component} from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import { IPhone, Android, IPad, MacBook } from '../src';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { color: 'black', model: "iphone6", landscape: 'false' };
  }

  handleColorChange(color) {
   this.setState({ color });
  }

  handleModelChange(model) {
   this.setState({ model });
  }

  handleLandscapeChange(landscape) {
    if (landscape === 'true') {
      this.setState({ landscape: 'true' });
    } else {
      this.setState({ landscape: 'false' });
    }
  }

  renderIPhone() {
    return (
      <IPhone
        model={this.state.model}
        color={this.state.color}
        landscape={this.state.landscape === 'true' ? true : false}
      />
    );
  }

  renderAndroid() {
    return (
      <Android
        model={this.state.model}
        color={this.state.color}
        landscape={this.state.landscape === 'true' ? true : false}
      />
    );
  }

  renderIPad() {
    return (
      <IPad
        model={this.state.model}
        color={this.state.color}
        landscape={this.state.landscape}
      />
    );
  }

  renderMac() {
    return (
      <MacBook model={this.state.model} />
    );
  }

  render() {
    let device;

    if (['s5', 'lumia920', 'htc-one', 'nexus5'].includes(this.state.model)) {
      device = this.renderAndroid();
    } else if (['ipad'].includes(this.state.model)) {
      device = this.renderIPad();
    } else if (['macbook'].includes(this.state.model)) {
      device = this.renderMac();
    } else {
      device = this.renderIPhone();
    }

    return (
      <div style={{ width: '100%', display: 'flex', 'justifyContent': 'center', minHeight: '800' }}>
        <div style={{ width: '10%', display: 'flex', 'justifyContent': 'center' , flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', 'justifyContent': 'center' , border: '1px solid black' }}>
            <RadioGroup
              name="color"
              selectedValue={this.state.color}
              onChange={(value) => { this.handleColorChange(value); }}
            >
              <Radio value="gold" />Gold
              <Radio value="black" />Black
              <Radio value="silver" />Silver
              <Radio value="white" />White
              <Radio value="red" />Red
              <Radio value="yellow" />Yellow
              <Radio value="green" />Green
              <Radio value="blue" />Blue
            </RadioGroup>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', 'justifyContent': 'center', border: '1px solid black' }}>
            <RadioGroup
              name="iphone"
              selectedValue={this.state.model}
              onChange={(value) => { this.handleModelChange(value); }}
            >
              <Radio value="iphone6" />iPhone 6
              <Radio value="iphone6plus" />iPhone 6 Plus
              <Radio value="iphone5s" />iPhone 5s
              <Radio value="iphone5c" />iPhone 5c
              <Radio value="iphone4s" />iPhone 4s
              <Radio value="s5" />Sumsung s5
              <Radio value="lumia920" />lumia920
              <Radio value="htc-one" />htc-one
              <Radio value="nexus5" />nexus5
              <Radio value="ipad" />ipad
              <Radio value="macbook" />Macbook
            </RadioGroup>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', 'justifyContent': 'center' , border: '1px solid black' }}>
            <RadioGroup
              name="landscape"
              selectedValue={this.state.landscape}
              onChange={(value) => { this.handleLandscapeChange(value); }}
            >
              <Radio value="true" />Landscape
              <Radio value="false" />Portait
            </RadioGroup>
          </div>
        </div>
        <div style={{ width: '90%', display: 'flex', 'justifyContent': 'center', alignItems: 'center'}}>
          {device}
        </div>
      </div>
    );
  }
};
