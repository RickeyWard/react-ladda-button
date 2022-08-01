# react-ladda-button

> Hooks based ladda buttons port in typescript with hooks

This is a port of [Ladda](https://github.com/hakimel/Ladda) by [Hakim El Hattab](http://hakim.se/)


[![NPM](https://img.shields.io/npm/v/react-ladda-button.svg)](https://www.npmjs.com/package/react-ladda-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## [Live Demo](https://rickeyward.github.io/react-ladda-button/)

## Install

```bash
npm install --save react-ladda-button
```

## Usage

```tsx
import React, { Component } from 'react'

import LaddaButton, {EXPAND_LEFT} from 'react-ladda-button'
import 'react-ladda-button/dist/ladda-themeless.min.css'

class Example extends Component {
  render() {
    return <LaddaButton data-style={EXPAND_LEFT}>I'm a button!</LaddaButton>
  }
}
```
More examples in the [Live Demo](https://rickeyward.github.io/react-ladda-button/). The API is virtually identical to [Ladda](https://github.com/hakimel/Ladda).

### considerations
The spinner style attributes are only used on first spinner creation, then the spinner is cached. This seems like something that likely never changes. If you need these to change, use a key to force the button to get recreated. This isn't an oversight its a conscious choice.

## License

MIT © [RickeyWard](https://github.com/RickeyWard)

## Contributing

this library was bootstrapped with [create-react-library](https://www.npmjs.com/package/create-react-library) and <i>yarn</i>
```
yarn start
```
then in another terminal
```
cd example && yarn start
```
