export const scrambled = (arr: number[]) =>
  arr.toSorted((a, b) => Math.random() - 0.5);
