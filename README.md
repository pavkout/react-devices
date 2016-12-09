# react-devices
React Devices

## Getting Started

```
npm install react-devices
```

## Issues

Please [Open issue](https://github.com/pavkout/react-devices/issues), describe bug, suggest solution

##USAGE

###Available Devices
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

..
### Some examples
```js

import React, {PropTypes, Component} from 'react';
import { IPhone, Android, IPad, Mac } from 'react-devices';

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
      <Mac model="macbook" />
      </div>
    );
  }
};


```
