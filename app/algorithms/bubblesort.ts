const shouldSwap = (a: number, b: number) => a > b;

/**Returns the index of the next swap to bubble, or undefined if we are sorted */
const bubbleOneStep = (arr: number[]): number[] => {
  const nextSwapSpot = arr.findIndex((val, idx, arr) =>
    shouldSwap(val, arr[idx + 1])
  );
  if (nextSwapSpot === -1) return arr;
  const bubbled = [...arr];
  bubbled.splice(
    nextSwapSpot,
    2,
    bubbled[nextSwapSpot + 1],
    bubbled[nextSwapSpot]
  );
  return bubbled;
};

export default bubbleOneStep;
