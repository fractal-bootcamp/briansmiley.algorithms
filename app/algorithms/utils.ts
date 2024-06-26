export const scrambled = (arr: number[]) => {
  const ret = [...arr];
  return ret.sort((a, b) => Math.random() - 0.5);
};

export const isSorted = (arr: number[]) =>
  arr.every((val, idx, arr) => idx < arr.length - 1 && val < arr[idx + 1]);
