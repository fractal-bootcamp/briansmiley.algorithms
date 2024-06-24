const shouldSwap = (a: number, b: number) => a > b;

const isSorted = (arr: number[]) =>
  arr.every((val, idx, arr) => idx < arr.length - 1 && val < arr[idx + 1]);

/**Returns the index of the next swap to bubble, or undefined if we are sorted */
const bubbleOneStep = (arr: number[]): number[] => {
  if (isSorted(arr)) return arr;
  const nextSwapSpot = arr.find((val, idx, arr) =>
    shouldSwap(val, arr[idx + 1])
  );
  if (nextSwapSpot === undefined) return arr;
  const bubbled = [...arr];
  bubbled.splice(
    nextSwapSpot,
    2,
    bubbled[nextSwapSpot + 1],
    bubbled[nextSwapSpot]
  );
  return bubbled;
};
