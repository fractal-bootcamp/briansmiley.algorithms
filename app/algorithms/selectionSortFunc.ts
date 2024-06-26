interface HistorySnapshot {
  unsorted: number[];
  sorting: number[];
  comparing: [number, number];
}
const selectionSort = (arr: number[]) => {
  const sortedEventually: number[] = [];
  const unsorted = [...arr];
  const history: HistorySnapshot[] = [];
  while (sortedEventually.length < arr.length) {
    let mindex = 0; //initially set minimum to the current element
    for (let i = 1; i < unsorted.length; i++) {
      history.push({
        unsorted: [...unsorted],
        sorting: [...sortedEventually],
        comparing: [i, mindex]
      });
      if (unsorted[i] < unsorted[mindex]) mindex = i;
    }
    //pop out the mindex number and put it at the end of sorting array
    sortedEventually.push(unsorted.splice(mindex, 1)[0]);
  }
  history.push({
    unsorted: [...unsorted],
    sorting: [...sortedEventually],
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
