import isTypeOf from './isTypeOf';

type sortArrayArgs = {
  array: any; // can't access {}[key] if type is Array<{}> so I'm keeping it on any for now and checking if array is an Array in the function
  key: string;
  order?: 'asc' | 'desc';
};

export default function sortArrayByKey({ array, key, order = 'asc' }: sortArrayArgs): Array<{}> {
  const isArray = isTypeOf({ value: array, type: 'array' });
  if (!isArray) throw new Error('The value provided is not an array');

  return array.sort((a: any, b: any) => {
    return order === 'asc' ? a[key] - b[key] : b[key] - a[key];
  });
}
