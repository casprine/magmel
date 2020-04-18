import isTypeOf from './isTypeOf';

type replaceAllArgs = {
  value: string;
  replacement: string;
  searchValue: string;
};

export default function replaceAll({ value, replacement, searchValue }: replaceAllArgs): string {
  const isString = isTypeOf({
    value,
    type: 'string',
  });

  if (!isString) throw new Error('The value provided is not a string');

  return value.replace(new RegExp(searchValue, 'g'), replacement);
}
