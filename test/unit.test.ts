import { uniqueArray } from '../src';
import { dummyObject, uniqueDummyObject } from './dummyData';

describe('uniquaArray', () => {
  it('Returns an array of objects with only unqiue values', () => {
    expect(uniqueArray(dummyObject)).toEqual(uniqueDummyObject);
  });
});
