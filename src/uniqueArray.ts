import isTypeOf from './isTypeOf';

export default function uniqueArray(array: Array<{}>, key?: string) {
  const isArray = isTypeOf({ value: array, type: 'array' });

  if (!isArray) throw new Error('The value provided is not an array');

  if (key) {
    return uniqueArrayByKey(array, key);
  } else {
    return Array.from(new Set(array.map((item: any) => JSON.stringify(item)))).map((item: any) => JSON.parse(item));
  }
}

function uniqueArrayByKey(array: Array<{}>, key: string) {
  const results: [] = [];
  const map = new Map();

  for (const item of array) {
    // @ts-ignore
    if (!map.has(item[key])) {
      // @ts-ignore
      map.set(item[key], true);
      // @ts-ignore
      results.push({
        ...item,
      });
    }
  }
  return results;
}
