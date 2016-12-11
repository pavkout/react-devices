import React, {PropTypes, Component} from 'react';
import { Dropdown, Card, Header, Segment } from 'semantic-ui-react';
import { IPhone, Android, IPad, MacBook, AppleWatch, WindowsPhone } from '../src';

const { Samsung, HTC, Nexus } = Android;
const { Lumia } = WindowsPhone;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'black',
      model: "iphone6",
      size: 'small',
      orientation: 'portrait'
    };
  }

  handleColorChange = (e, newProps) => {
   e.preventDefault();
   this.setState({ color: newProps.value });
  }

  handleModelChange = (e, newProps) => {
    e.preventDefault();
    this.setState({ model: newProps.value });
  }

  handleOrientationChange = (e, newProps) => {
    e.preventDefault();
    this.setState({ orientation: newProps.value });
  }

  handleSizeChange = (e, newProps) => {
    e.preventDefault();
    this.setState({ size: newProps.value });
  }

  renderIPhone() {
    return (
      <IPhone
        model={this.state.model}
        color={this.state.color}
        landscape={this.state.orientation === 'landscape'}
      />
    );
  }

  renderAndroid() {
    switch(this.state.model) {
      case 's5': {
        return (
          <Samsung
            model={this.state.model}
            color={this.state.color}
            landscape={this.state.orientation === 'landscape'}
          />
        );
        break;
      }
      case 'htc-one': {
        return (
          <HTC
            model={this.state.model}
            color={this.state.color}
            landscape={this.state.orientation === 'landscape'}
          />
        );
        break;
      }
      case 'nexus5': {
        return (
          <Nexus
            model={this.state.model}
            color={this.state.color}
            landscape={this.state.orientation === 'landscape'}
          />
        );
        break;
      }
    }
  }

  renderIPad() {
    return (
      <IPad
        model={this.state.model}
        color={this.state.color}
        landscape={this.state.orientation === 'landscape'}
      />
    );
  }

  renderLumia() {
    return (
      <Lumia
        model={this.state.model}
        color={this.state.color}
        landscape={this.state.orientation === 'landscape'}
      />
    );
  }

  renderMac() {
    return (
      <MacBook model={this.state.model} />
    );
  }

  renderAppleWatch() {
    return (
      <AppleWatch small={this.state.size === 'small'} color={this.state.color}/>
    );
  }

  getColorOptions = () => {
    let colorOptions = [];

    switch (this.state.model) {
      case 'iphone6plus':
      case 'iphone6':
      case 'iphone5s': {
        colorOptions = [
          { value: 'gold' , text: 'Gold'},
          { value: 'black', text: 'Black' },
          { value: 'silver', text: 'Silver' }
        ];
        break;
      }
      case 'iphone5c': {
        colorOptions = [
          { value: 'white', text: 'White'},
          { value: 'red', text: 'Red' },
          { value: 'yellow', text: 'Yellow' },
          { value: 'green', text: 'Green' },
          { value: 'blue', text: 'Blue' }
        ]
        break;
      }
      case 'iphone4s':
      case 'ipad':
      case 's5': {
        colorOptions = [
          { value: 'black', text: 'Black' },
          { value: 'silver', text: 'Silver' }
        ]
        break;
      }
      case 'lumia920': {
        colorOptions = [
          { value: 'black', text: 'Black' },
          { value: 'white', text: 'White'},
          { value: 'red', text: 'Red' },
          { value: 'yellow', text: 'Yellow' },
          { value: 'blue', text: 'Blue' }
        ];
        break;
      }
      case 'appleWatch' : {
        colorOptions = [
          { value: 'yellow-gold', text: 'Yellow Gold'},
          { value: 'rose-gold', text: 'Rose Gold'},
          { value: 'space-black', text: 'Space Black'},
          { value: 'stainless-steel', text: 'Stainless Steel'},
          { value: 'space-gray', text: 'Space Gray'}
        ];
      }
      default:
        // Nothing
    }

    return colorOptions;
  }

  render() {
    let device;

    if (['s5', 'htc-one', 'nexus5'].includes(this.state.model)) {
      device = this.renderAndroid();
    } else if (['ipad'].includes(this.state.model)) {
      device = this.renderIPad();
    } else if (['macbook'].includes(this.state.model)) {
      device = this.renderMac();
    } else if (['appleWatch'].includes(this.state.model)) {
      device = this.renderAppleWatch();
    } else if (['lumia920'].includes(this.state.model)) {
      device = this.renderLumia();
    } else {
      device = this.renderIPhone();
    }

    return (
      <div style={{ width: '100%', display: 'flex', 'justifyContent': 'center', minHeight: '800px' }}>
        <div style={{height: 'auto', margin: '20px'}}>
        <Card raised>
          <Card.Content>
            <Header as="h2">Device</Header>
            <Dropdown
              icon="dropdown"
              labeled
              fluid
              onChange={this.handleModelChange}
              placeholder="Select a device"
              value={this.state.model}
              selection
              options={[
                {value: 'iphone6', text: 'iPhone 6'},
                {value: 'iphone6plus', text: 'iPhone 6 Plus'},
                {value: 'iphone5s', text: 'iPhone 5s'},
                {value: 'iphone5c', text: 'iPhone 5c'},
                {value: 'iphone4s', text: 'iPhone 4s'},
                {value: 'appleWatch', text: 'Apple Watch'},
                {value: 's5', text: 'Samsung s5'},
                {value: 'lumia920', text: 'Lumia 6'},
                {value: 'htc-one', text: 'HTC-ONE'},
                {value: 'nexus5', text: 'Nexus 5'},
                {value: 'ipad', text: 'iPad'},
                {value: 'macbook', text: 'MacBook'}
              ]}
            />

            <Header as="h2">Color</Header>
            <Dropdown
              fluid
              onChange={this.handleColorChange}
              placeholder="Select a device color"
              value={this.state.color}
              disabled={(this.state.model === 'macbook' || this.state.model === 'nexus5' || this.state.model === 'htc-one')}
              selection
              options={this.getColorOptions()}
            />

            <Header as="h2">Orientation</Header>
            <Dropdown
              fluid
              onChange={this.handleOrientationChange}
              placeholder="Select the device orientation"
              value={this.state.orientation}
              disabled={this.state.model === 'macbook' || this.state.model === 'appleWatch'}
              selection
              options={[
                { value: 'portrait', text: 'Portrait' },
                { value: 'landscape', text: 'Landscape' },
              ]}
            />
          <Header as="h2">Size (Only for Apple Watch)</Header>
            <Dropdown
              fluid
              onChange={this.handleSizeChange}
              placeholder="Select the device size"
              value={this.state.size}
              disabled={this.state.model !== 'appleWatch'}
              selection
              options={[
                { value: 'small', text: '38mm' },
                { value: 'normal', text: '42mm' },
              ]}
            />
            </Card.Content>
        </Card>
        </div>
        <div style={{ width: '90%', display: 'flex', 'justifyContent': 'center', alignItems: 'center'}}>
          {device}
        </div>
      </div>
    );
  }
};
