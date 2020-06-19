import isTypeOf from './isTypeOf';

type chunkArrayArgs = {
  array: Array<any>;
  size: number;
};

export default function chunkArray({ array, size }: chunkArrayArgs) {
  const isArray = isTypeOf({ value: array, type: 'array' });
  const isSizeNumber = isTypeOf({ value: size, type: 'number' });

  if (!isArray) throw new Error('The value provided is not an array');
  if (!isSizeNumber) throw new Error('The value provided is not a number');

  const results: Array<any> = [];

  while (array.length) {
    results.push(array.splice(0, size));
  }

  return results;
}
