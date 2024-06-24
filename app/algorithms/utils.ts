export const scrambled = (arr: number[]) =>
  arr.toSorted((a, b) => Math.random() - 0.5);

export const isSorted = (arr: number[]) =>
  arr.every((val, idx, arr) => idx < arr.length - 1 && val < arr[idx + 1]);
