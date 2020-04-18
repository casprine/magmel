import { uniqueArray, sortArray, isTypeOf, capitalize, replace } from '../src';
import {
  dummyObject,
  uniqueDummyObject,
  uniqueDummyObjectByKey,
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

  it('Returns an array of object unique by the name property', () => {
    expect(uniqueArray(dummyObject, 'name')).toEqual(uniqueDummyObjectByKey);
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
      // @ts-ignore
      expect(isTypeOf({ value, type })).toBe(expected);
    });
  }
});

describe('capitalize', () => {
  it('Throws an error if no string is passed', () => {
    expect(capitalize).toThrowError('The value provided is not a string');
  });

  it('Capitalise the first letter of every word', () => {
    expect(capitalize('the quick brown fox jumps over the lazy dog')).toEqual(
      'The Quick Brown Fox Jumps Over The Lazy Dog',
    );
  });
});

describe('replace', () => {
  it('replaces a searchValue with a replacement', () => {
    expect(
      replace({
        value: "You haven't left enough space between Pig and and and and and Whistle",
        replacement: 'but',
        searchValue: 'and',
      }),
    ).toEqual("You haven't left enough space between Pig but but but but but Whistle");
  });
});
