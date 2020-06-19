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
    name: 'Should accept an object and a type of object and return true',
    type: 'object',
  },

  {
    value: {},
    expected: false,
    name: 'Should accept an object and a type of array and return false',
    type: 'array',
  },

  {
    value: [],
    expected: true,
    name: 'Should accept an array and a type of array and return true',
    type: 'array',
  },

  {
    value: 1243,
    expected: true,
    name: 'Should accept a number and a type of number and return true',
    type: 'number',
  },

  {
    value: 1243,
    expected: false,
    name: 'Should accept a number and a type of symbol and return false',
    type: 'symbol',
  },

  {
    value: 'Username',
    expected: true,
    name: 'Should accept a string and a type of string and return true',
    type: 'string',
  },

  {
    value: 'Username',
    expected: false,
    name: 'Should accept a string and a type of function and return false',
    type: 'function',
  },

  {
    value: true,
    expected: true,
    name: 'Should accept a boolean and a type of boolean and return true',
    type: 'boolean',
  },

  {
    value: false,
    expected: false,
    name: 'Should accept a boolean and a type of number and return false',
    type: 'number',
  },

  {
    value: Symbol(),
    expected: true,
    name: 'Should accept a symbol and a type of symbol and return true',
    type: 'symbol',
  },

  {
    value: Symbol(),
    expected: false,
    name: 'Should accept a symbol and a type of string and return false',
    type: 'string',
  },

  {
    value: undefined,
    expected: true,
    name: 'Should accept a undefined and a type of undefined and return true',
    type: 'undefined',
  },

  {
    value: undefined,
    expected: false,
    name: 'Should accept a undefined and a type of function and return false',
    type: 'function',
  },

  {
    value: () => {},
    expected: true,
    name: 'Should accept an function and a type of function and return true',
    type: 'function',
  },

  {
    value: () => {},
    expected: false,
    name: 'Should accept an function and a type of object and return false',
    type: 'object',
  },

  {
    value: null,
    expected: true,
    name: 'Should accept an null and a type of null and return true',
    type: 'null',
  },

  {
    value: null,
    expected: false,
    name: 'Should accept an null and a type of object and return false',
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

export const formatStringDataSet = [
  {
    value: '12345678',
    pattern: 'XX-XX-XX',
    showExcess: false,
    expected: '12-34-56',
  },

  {
    value: '12345678',
    pattern: 'XX.XX.XX',
    showExcess: false,
    expected: '12.34.56',
  },

  {
    value: '123456789',
    pattern: 'XX.XX.XX',
    showExcess: true,
    expected: '12.34.56789',
  },

  {
    value: '12345678',
    pattern: 'XXXX/XX',
    showExcess: false,
    expected: '1234/56',
  },

  {
    value: '12345678',
    pattern: 'XXXX XX XX',
    showExcess: false,
    expected: '1234 56 78',
  },
];
