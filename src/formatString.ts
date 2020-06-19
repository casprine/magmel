import isTypeOf from './isTypeOf';

type formatStringArgs = {
  value: string;
  pattern: string;
  showExcess?: boolean;
};

export default function formatString({ value, pattern, showExcess = false }: formatStringArgs) {
  const isValueString = isTypeOf({ value, type: 'string' });
  const isformatString = isTypeOf({ value: pattern, type: 'string' });

  if (!isValueString) throw new Error('The value provided is not a string');
  if (!isformatString) throw new Error('The format provied is not a string');

  let regex = '';

  for (let index = 1; pattern.indexOf('X') >= 0; ++index) {
    pattern = pattern.replace('X', '$' + index);
    regex += '(\\d)';
  }

  if (!showExcess) regex += '[^]*';
  if (showExcess) regex += '[]*';

  return value.replace(new RegExp(regex), pattern);
}
