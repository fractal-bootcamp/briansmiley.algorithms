interface HistorySnapshot {
  unsorted: number[];
  sorting: number[];
  comparisons: number;
  swaps: number;
  comparing: [number, number];
}
const selectionSort = (arr: number[]) => {
  const sortedEventually: number[] = [];
  const unsorted = [...arr];
  let comparisons = 0;
  let swaps = 0;
  const history: HistorySnapshot[] = [];
  while (sortedEventually.length < arr.length) {
    let mindex = 0; //initially set minimum to the current element
    for (let i = 1; i < unsorted.length; i++) {
      history.push({
        unsorted: [...unsorted],
        sorting: [...sortedEventually],
        comparisons: comparisons,
        swaps: swaps,
        comparing: [i, mindex]
      });
      comparisons++;
      if (unsorted[i] < unsorted[mindex]) mindex = i;
    }
    //pop out the mindex number and put it at the end of sorting array
    sortedEventually.push(unsorted.splice(mindex, 1)[0]);
    swaps++;
  }
  history.push({
    unsorted: [...unsorted],
    sorting: [...sortedEventually],
    comparisons: comparisons,
    swaps: swaps,
    comparing: [-1, -1]
  });
  return {
    originalArray: arr,
    sortedArray: sortedEventually,
    history: history
  };
};

export default selectionSort;
// console.log(selectionSort([5, 3, 5, 1, 1, 2, 4, 45, 1, 61, 24, 21, 15, 16]));
