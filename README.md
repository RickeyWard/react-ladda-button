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
import 'react-ladda-button/dist/ladda.themeless.min.css'

class Example extends Component {
  render() {
    return <LaddaButton data-style={EXPAND_LEFT}>I'm a button!</LaddaButton>
  }
}
```
More examples on the [Live Demo](https://rickeyward.github.io/react-ladda-button/)

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
