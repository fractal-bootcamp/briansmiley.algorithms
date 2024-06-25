const shouldSwap = (a: number, b: number) => a > b;

const bubbleSort = (arr: number[]) => {
  const sorted = [...arr];
  const history: number[][] = [[...sorted]];
  while (true) {
    const nextSwapSpot = sorted.findIndex(
      (val, idx, arr) => val > arr[idx + 1]
    );
    if (nextSwapSpot === -1)
      return {
        originalArray: arr,
        sortedArray: sorted,
        history: history
      };
    sorted.splice(
      nextSwapSpot,
      2,
      sorted[nextSwapSpot + 1],
      sorted[nextSwapSpot]
    );
    history.push([...sorted]);
  }
};

export default bubbleSort;
console.log(bubbleSort([1, 5, 1, 2, 3, 1, 5, 16, 6, 34]));
