import { uniqueArray, sortArray, isTypeOf } from '../src';
import {
  dummyObject,
  uniqueDummyObject,
  dummyObjectInAscendingOrder,
  dummyObjectInDescendingOrder,
  isTypeOfTest,
} from './dummyData';

describe('uniquaArray', () => {
  it('Throws an error if no array is passed', () => {
    expect(uniqueArray).toThrowError('The value provided is not an array');
  });

  it('Returns an array of objects with only unqiue values', () => {
    expect(uniqueArray(dummyObject)).toEqual(uniqueDummyObject);
  });
});

describe('sortArray', () => {
  it('Throws an error if no array is provided', () => {
    expect(sortArray).toThrow();
  });

  it('Sorts array by key in ascending order', () => {
    expect(sortArray({ array: dummyObject, key: 'age' })).toEqual(dummyObjectInAscendingOrder);
  });

  it('Sorts array by key in descending order', () => {
    expect(sortArray({ array: dummyObject, key: 'age', order: 'desc' })).toEqual(dummyObjectInDescendingOrder);
  });
});

describe('isTypeOf', () => {
  for (let i = 0; i < isTypeOfTest.length; i++) {
    it(isTypeOfTest[i].name, () => {
      const { value, expected, type } = isTypeOfTest[i];
      expect(isTypeOf({ value, type })).toBe(expected);
    });
  }
});
