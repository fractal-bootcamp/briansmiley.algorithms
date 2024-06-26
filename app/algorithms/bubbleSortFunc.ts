const shouldSwap = (a: number, b: number) => a > b;

interface HistorySnapshot {
  sorted: number[];
  comparisons: number;
  swaps: number;
}

interface BubbleHistory {
  array: number[];
  passes: number;
  swaps: number;
  comparisons: number;
  comparing: [number, number]; //indices of current comparison
}
export const bubbleSort = (arr: number[]) => {
  const sorting = [...arr];
  let sorted = false;
  let passes = 0;
  let comparisons = 0;
  let swaps = 0;
  const history: BubbleHistory[] = [];
  while (!sorted) {
    let idx = 0;
    passes++;
    sorted = true; //set sorted to true, to be reflagged false if we encounter any swaps
    //go through whole array and make swaps
    while (idx < sorting.length - passes) {
      //log current comparison in history
      //if element to the right is smaller, swap and set sorted to false
      comparisons++;
      if (sorting[idx + 1] < sorting[idx]) {
        [sorting[idx], sorting[idx + 1]] = [sorting[idx + 1], sorting[idx]];
        swaps++;
        sorted = false;
      }
      history.push({
        array: [...sorting],
        passes: passes,
        comparisons: comparisons,
        swaps: swaps,
        comparing: [sorting[idx], sorting[idx + 1]]
      });
      idx++;
    }
  }
  return { originalArray: arr, sortedArray: sorting, history: history };
};
export default bubbleSort;
console.log(bubbleSort([1, 5, 1, 2, 3, 1, 5, 16, 6, 34]));
