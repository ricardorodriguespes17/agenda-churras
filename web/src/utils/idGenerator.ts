export default function idGenerator(array: any[]): number {
  for (let i = 0; i < array.length + 1; i++) {
    if (array.every((item) => item.id !== i)) {
      return i;
    }
  }

  return array.length;
}
