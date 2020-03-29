<br />

<p align="center">
  <a href="https://github.com/casprine/magmel">
    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/sparkles_2728.png" alt="magmel symbol" width="150" />
  </a>
</p>

<h1 align="center"> Delightful JavaScript utility library </h1>

<p align="center">
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/magmel"/>
  <img alt="MIT License" src="https://img.shields.io/github/license/chakra-ui/chakra-ui"/>  
  <img alt="Spectrum" src="https://badgen.net/github/last-commit/casprine/magmel" />
</p>
<br />

## 🛠 Installation

You can easily install this package with yarn or npm:

```
$ yarn add magmel
```

or

```
$ npm install --save magmel
```

## 📖 Usage

Let's say you want to use the `uniqueArray` utility

```js
import { uniqueArray } from 'magmel';

const test = [
  { name: 'John', age: 10 },
  { name: 'Casprine', age: 10 },
  { name: 'Albert', age: 10 },
  { name: 'Albert', age: 10 },
  { name: 'John', age: 10 },
];

uniqueArray(test);

// =>[{name: "Albert", age: 10}  {name: "Casprine", age: 10} {name: "John", age: 10}]
```
