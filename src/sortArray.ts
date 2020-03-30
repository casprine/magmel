type sortArrayArgs = {
  array: any; // can't access {}[key] if type is Array<{}> so I'm keeping it on any for now and checking if array is an Array in the function
  key: string;
  order?: 'asce' | 'desc';
};

export default function sortArrayByKey({ array, key, order = 'asce' }: sortArrayArgs): Array<{}> {
  return array.sort((a: any, b: any) => {
    return order === 'asce' ? a[key] - b[key] : b[key] - a[key];
  });
}
