<img alt="React Native Monthly" src="assets/logo.png" width="1050"/>

[![Animated and customizable monthly calendar for React Native](https://img.shields.io/badge/-Animated%20and%20customizable%20monthly%20calendar%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-monthly)

[![npm version](https://img.shields.io/npm/v/react-native-monthly.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-monthly)
[![npm](https://img.shields.io/npm/dt/react-native-monthly.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-monthly)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<table>
 <tr>
    <td align="center"> 
  <img alt="React Native Monthly"
        src="assets/Screenshots/react-native-monthly.gif" />
    </td>
    <td align="center">
  <img alt="React Native Monthly"
        src="assets/Screenshots/react-native-monthly.png" height="875px" />
    </td>
   </tr>
</table>

# Installation

Add the dependency:

```bash
npm i react-native-monthly
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": ">= 0.2.4",
```

# Usage

## Import

```jsx
import RNMonthly from "react-native-monthly";
```

## Fundamental Usage

```jsx
<RNMonthly numberOfDays={31} activeDays={[1, 5, 6, 11, 21, 31]} />
```

```jsx
<RNMonthly
  numberOfDays={30}
  activeBackgroundColor="green"
  inactiveBackgroundColor="#E6FFDE"
  activeDays={[1, 5, 6, 11, 21, 31]}
/>
```

```jsx
<RNMonthly
  numberOfDays={28}
  activeBackgroundColor="#9C1818"
  inactiveBackgroundColor="#FFDEDE"
  activeDays={[1, 5, 6, 11, 21, 31]}
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property     |   Type    |  Default  | Description                                                         |
| ------------ | :-------: | :-------: | ------------------------------------------------------------------- |
| numberOfDays |  number   |    31     | change days of the month it should be more than 28 and less than 31 |
| activeDays   | number[]  | undefined | set the active days                                                 |
| style        | ViewStyle |  default  | set or override the style object for the main container             |

## Customization (Optionals)

| Property                |   Type   |  Default  | Description                                                        |
| ----------------------- | :------: | :-------: | ------------------------------------------------------------------ |
| activeBackgroundColor   |  color   | "#49c1c2" | change the active background color                                 |
| inactiveBackgroundColor |  color   | "#f0f0f0" | change the inactive background color                               |
| onPress                 | function | undefined | set your own logic for the button functionality when it is pressed |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Today Feature
- [ ] Write an article about the lib on Medium

## Credits

Insipired on [Martyna Zielińska](https://dribbble.com/shots/6556907-Medicine-Reminder)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Monthly is available under the MIT license. See the LICENSE file for more info.
