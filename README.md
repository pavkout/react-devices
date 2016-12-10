<div class="logo-img-container" style="width: 100%; text-align: center; background-color: #FCF5EA; color: #E1B251; padding: 20px 0;">
  <h1>React Devices</h1>
  <img src="./assets/logo.png" class="logo-img" style="max-width: 200px;"/>
  <p>A curated collection of devices as react components.</p>
</div>

## Getting Started

```js
npm install react-devices
```

## USAGE

### Available Devices

* iPhone 4s
* iPhone 5s
* iPhone 5c
* iPhone 6
* Nexus 5
* lumia920
* Samsung S5
* htc-one
* Macbook
* iPad Mini

### Available Colors

* silver
* black
* gold
* white
* red
* yellow
* green
* blue
* silver

### Available Orientation

* landscape
* portrait

### Some examples

```js
import React, {PropTypes, Component} from 'react';
import { IPhone, Android, IPad, MacBook } from 'react-devices';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <IPhone
        model="iphone6"
        color="silver"
        landscape
      />
      <Android
        model="s5"
        color="white"
      />
      <IPad
        model="ipad"
        color="silver"
        landscape
      />
      <MacBook model="macbook" />
      </div>
    );
  }
};
```


## Issues

Please [Open issue](https://github.com/pavkout/react-devices/issues), describe bug, suggest solution

## Contribution

Feel free to contribute fixes on any device or add your own to the list by creating a pull request.

To build for development

```js
npm install
npm run build
```
