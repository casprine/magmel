import isTypeOf from './isTypeOf';

export default function uniqueArray(array: Array<{}>) {
  const isArray = isTypeOf({ value: array, type: 'array' });

  if (!isArray) throw new Error('The value provided is not an array');

  return Array.from(new Set(array.map((item: any) => JSON.stringify(item)))).map((item: any) => JSON.parse(item));
}
