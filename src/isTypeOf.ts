type isTypeOfArgs = {
  value: any;
  type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'bigint' | 'symbol' | 'null' | 'undefined' | 'function';
};

export default function isTypeOf({ value, type }: isTypeOfArgs) {
  const typeOfValue = typeof value;
  let typeOf;

  switch (true) {
    case type === 'array' && typeOfValue === 'object' && Array.isArray(value):
      typeOf = true;
      break;

    case type === 'object' && typeOfValue === 'object' && !!Array.isArray(value):
      typeOf = false;
      break;

    case type === 'null' && typeOfValue === 'object' && value === null:
      typeOf = true;
      break;

    case value === null && typeOfValue === 'object' && type !== 'null':
      typeOf = false;
      break;

    case type === typeOfValue:
      typeOf = true;
      break;

    case type !== typeOfValue:
      typeOf = false;
      break;
  }

  return typeOf;
}
