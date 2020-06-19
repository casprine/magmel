import { uniqueArray, sortArray, isTypeOf, capitalize, replaceAll, chunkArray, formatString } from '../src';
import {
  dummyObject,
  uniqueDummyObject,
  uniqueDummyObjectByKey,
  dummyObjectInAscendingOrder,
  dummyObjectInDescendingOrder,
  isTypeOfTest,
  largeArray,
  largeArrayInSubsets,
  formatStringDataSet,
} from './dummyData';

describe('uniquaArray', () => {
  it('Should throw an error if no array is provided', () => {
    expect(uniqueArray).toThrowError('The value provided is not an array');
  });

  it('Should returns an array of objects with only unqiue values', () => {
    expect(uniqueArray(dummyObject)).toEqual(uniqueDummyObject);
  });

  it('Should returns an array of object unique by the name property', () => {
    expect(uniqueArray(dummyObject, 'name')).toEqual(uniqueDummyObjectByKey);
  });
});

describe('sortArray', () => {
  it('Should throw an error if no array is provided', () => {
    expect(sortArray).toThrow();
  });

  it('Should sorts array by key in ascending order', () => {
    expect(sortArray({ array: dummyObject, key: 'age' })).toEqual(dummyObjectInAscendingOrder);
  });

  it('Should sorts array by key in descending order', () => {
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
  it('Should throw an error if no string is passed', () => {
    expect(capitalize).toThrowError('The value provided is not a string');
  });

  it('Should capitalise the first letter of every word', () => {
    expect(capitalize('the quick brown fox jumps over the lazy dog')).toEqual(
      'The Quick Brown Fox Jumps Over The Lazy Dog',
    );
  });
});

describe('replace', () => {
  it('Should replace all occurence of searchValue with the replacement', () => {
    expect(
      replaceAll({
        value: "You haven't left enough space between Pig and and and and and Whistle",
        replacement: 'but',
        searchValue: 'and',
      }),
    ).toEqual("You haven't left enough space between Pig but but but but but Whistle");
  });
});

describe('chunkArray', () => {
  it('Should throw an error if array is not provided', () => {
    expect(chunkArray).toThrowError("Cannot read property 'array' of undefined");
  });

  it('Should splits array into array with subsets of two', () => {
    expect(chunkArray({ array: largeArray, size: 2 })).toStrictEqual(largeArrayInSubsets);
  });
});

describe('formatString', () => {
  it('Should throw an error if type of value is not a string', () => {
    expect(formatString).toThrow("Cannot read property 'value' of undefined");
  });

  for (let i = 0; i < formatStringDataSet.length; i++) {
    it(`Should format ${formatStringDataSet[i].value} with ${formatStringDataSet[i].pattern}  = ${formatStringDataSet[i].expected}`, () => {
      const { value, expected, pattern, showExcess } = formatStringDataSet[i];
      expect(formatString({ value, showExcess, pattern })).toBe(expected);
    });
  }
});
