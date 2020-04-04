import isTypeOf from './isTypeOf';

type replaceArgs = {
  value: string;
  replacement: string;
  searchValue: string;
};

export default function replace({ value, replacement, searchValue }: replaceArgs): string {
  const isString = isTypeOf({
    value,
    type: 'string',
  });

  if (!isString) throw new Error('The value provided is not a string');

  return value.replace(new RegExp(searchValue, 'g'), replacement);
}
