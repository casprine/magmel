import isTypeOf from './isTypeOf';

export default function chunkArray(array: Array<any>, size: number) {
  const isArray = isTypeOf({ value: array, type: 'array' });
  const isNumber = isTypeOf({ value: size, type: 'number' });

  if (!isArray) throw new Error('The value provided is not an array');
  if (!isNumber) throw new Error('The value provided is not a number');

  const results: Array<any> = [];

  while (array.length) {
    results.push(array.splice(0, size));
  }

  return results;
}
