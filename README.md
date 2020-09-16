## Suka React System Icons

[![Edit Suk'a React System Icons](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/suka-react-system-icons-j3f73?fontsize=14&hidenavigation=1&theme=dark)

`suka-react-system-icons` is a collection of simply beautiful open source icons for React.js based on the system icons from the [Suk'a design system](https://suka.kushkipagos.com). Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

#### Based on Feather Icons  ```v4.28.0```

### Installation
    yarn add @kushki/suka-react-system-icons

  or

    npm i @kushki/suka-react-system-icons

### Usage

```javascript
import React from 'react';
import { Camera } from '@kushki/suka-react-system-icons';

const App = () => {
  return <Camera />
};

export default App;
```

Icons can be configured with inline props:
```javascript
<Camera color="red" size={48} />
```

If you can't use ES6 imports, it's possible to include icons from the compiled folder ./dist.
```javascript
var Camera = require('@kushki/suka-react-system-icons/dist/icons/camera').default;

var MyComponent = React.createClass({
  render: function () {
    return (
      <Camera />
    );
  }
});
```
You can also include the whole icon pack:

```javascript
import React from 'react';
import * as Icon from '@kushki/suka-react-system-icons';

const App = () => {
  return <Icon.Camera />
};

export default App;
```
