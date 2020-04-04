import isTypeOf from './isTypeOf';

export default function capitalize(value: string): string {
  const isString = isTypeOf({
    value,
    type: 'string',
  });

  if (!isString) throw new Error('The value provided is not a string');

  return value
    .split(' ')
    .map((item: string) => item.charAt(0).toUpperCase() + item.slice(1, item.length))
    .join(' ');
}
