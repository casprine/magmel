interface sortArrayArgs {
  array: any;
  key: string;
  order?: 'asce' | 'desc';
}

export default function sortArrayByKey({ array, key, order = 'asce' }: sortArrayArgs): Array<{}> {
  return array.sort((a: any, b: any) => {
    return order === 'asce' ? a[key] - b[key] : b[key] - a[key];
  });
}
