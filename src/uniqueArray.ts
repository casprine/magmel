export default function uniqueArray(array: Array<{}>) {
  return Array.from(new Set(array.map((item: any) => JSON.stringify(item)))).map((item: any) => JSON.parse(item));
}
