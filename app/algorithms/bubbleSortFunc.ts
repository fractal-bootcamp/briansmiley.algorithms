const shouldSwap = (a: number, b: number) => a > b;

interface HistorySnapshot {
  sorted: number[];
  comparisons: number;
  swaps: number;
}
// const createHistorySnapshot = (
//   sorted: number[],
//   comparisons: number,
//   swaps: number
// ) => ({ sorted: sorted, comparisons: comparisons, swaps: swaps });
const bubbleSort = (arr: number[]) => {
  const sorted = [...arr];
  // const comparisons = 0;
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

interface BubbleHistory {
  array: number[];
  comparing: [number, number]; //indices of current comparison
}
export const bubbleSort2 = (arr: number[]) => {
  const sorting = [...arr];
  let sorted = false;
  const history: BubbleHistory[] = [];
  while (!sorted) {
    let idx = 0;
    sorted = true; //set sorted to true, to be reflagged false if we encounter any swaps
    //go through whole array and make swaps
    while (idx < sorting.length - 1) {
      //log current comparison in history
      history.push({
        array: [...sorting],
        comparing: [sorting[idx], sorting[idx + 1]]
      });
      //if element to the right is smaller, swap and set sorted to false
      if (sorting[idx + 1] < sorting[idx]) {
        [sorting[idx], sorting[idx + 1]] = [sorting[idx + 1], sorting[idx]];
        sorted = false;
      }
      idx++;
    }
  }
  return { originalArray: arr, sortedArray: sorting, history: history };
};
export default bubbleSort;
console.log(bubbleSort([1, 5, 1, 2, 3, 1, 5, 16, 6, 34]));
