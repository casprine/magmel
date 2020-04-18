export const dummyObject = [
  { name: 'casprine', age: 3 },
  { name: 'casprin', age: 2 },
  { name: 'casprin', age: 2 },
  { name: 'desktop', age: 12 },
  { name: 'casprine', age: 100 },
];

export const uniqueDummyObject = [
  {
    name: 'casprine',
    age: 3,
  },
  {
    name: 'casprin',
    age: 2,
  },
  {
    name: 'desktop',
    age: 12,
  },
  {
    name: 'casprine',
    age: 100,
  },
];

export const uniqueDummyObjectByKey = [
  {
    name: 'casprine',
    age: 3,
  },
  {
    name: 'casprin',
    age: 2,
  },
  {
    name: 'desktop',
    age: 12,
  },
];

export const dummyObjectInAscendingOrder = [
  {
    name: 'casprin',
    age: 2,
  },
  {
    name: 'casprin',
    age: 2,
  },
  {
    name: 'casprine',
    age: 3,
  },
  {
    name: 'desktop',
    age: 12,
  },
  {
    name: 'casprine',
    age: 100,
  },
];

export const dummyObjectInDescendingOrder = [
  {
    name: 'casprine',
    age: 100,
  },
  {
    name: 'desktop',
    age: 12,
  },
  {
    name: 'casprine',
    age: 3,
  },
  {
    name: 'casprin',
    age: 2,
  },
  {
    name: 'casprin',
    age: 2,
  },
];

export const isTypeOfTest = [
  {
    value: {},
    expected: true,
    name: 'Accepts an object and a type of object and returns true',
    type: 'object',
  },

  {
    value: {},
    expected: false,
    name: 'Accepts an object and a type of array and returns false',
    type: 'array',
  },

  {
    value: [],
    expected: true,
    name: 'Accepts an array and a type of array and returns true',
    type: 'array',
  },

  {
    value: 1243,
    expected: true,
    name: 'Accepts an number and a type of number and returns true',
    type: 'number',
  },

  {
    value: 1243,
    expected: false,
    name: 'Accepts an number and a type of symbol and returns false',
    type: 'symbol',
  },

  {
    value: 'Username',
    expected: true,
    name: 'Accepts an string and a type of string and returns true',
    type: 'string',
  },

  {
    value: 'Username',
    expected: false,
    name: 'Accepts an string and a type of function and returns false',
    type: 'function',
  },

  {
    value: true,
    expected: true,
    name: 'Accepts an boolean and a type of boolean and returns true',
    type: 'boolean',
  },

  {
    value: false,
    expected: false,
    name: 'Accepts an boolean and a type of number and returns false',
    type: 'number',
  },

  {
    value: Symbol(),
    expected: true,
    name: 'Accepts an symbol and a type of symbol and returns true',
    type: 'symbol',
  },

  {
    value: Symbol(),
    expected: false,
    name: 'Accepts an symbol and a type of string and returns false',
    type: 'string',
  },

  {
    value: undefined,
    expected: true,
    name: 'Accepts an undefined and a type of undefined and returns true',
    type: 'undefined',
  },

  {
    value: undefined,
    expected: false,
    name: 'Accepts an undefined and a type of function and returns false',
    type: 'function',
  },

  {
    value: () => {},
    expected: true,
    name: 'Accepts an function and a type of function and returns true',
    type: 'function',
  },

  {
    value: () => {},
    expected: false,
    name: 'Accepts an function and a type of object and returns false',
    type: 'object',
  },

  {
    value: null,
    expected: true,
    name: 'Accepts an null and a type of null and returns true',
    type: 'null',
  },

  {
    value: null,
    expected: false,
    name: 'Accepts an null and a type of object and returns false',
    type: 'object',
  },
];

export const largeArray = [1, 2, 45, 64, 2, 46, 431, '234', 'magmel', 'typescript'];
export const largeArrayInSubsets = [
  [1, 2],
  [45, 64],
  [2, 46],
  [431, '234'],
  ['magmel', 'typescript'],
];
