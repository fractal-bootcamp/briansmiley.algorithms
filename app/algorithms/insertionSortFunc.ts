interface InsertionHistorySnapshot {
  unsorted: number[];
  sorting: number[];
  comparisons: number;
  swaps: number;
  comparing?: [number, number];
  swapping?: [number, number];
}
export const insertionSort = (unsortedArray: number[]) => {
  let src = [...unsortedArray];
  let sortedArray: number[] = [];
  let [swaps, comparisons] = [0, 0];
  const history: InsertionHistorySnapshot[] = [];
  //repeatedly pop elements out of the original array an into the sorted array, swapping them over into place
  while (src.length > 0) {
    //take the first element from src and put it on sorted
    sortedArray.push(src.shift()!);
    //repeatedly swap until the entry to its left is smaller
    let insertionIndex = sortedArray.length - 1;

    while (
      insertionIndex >= 0 &&
      sortedArray[insertionIndex - 1] > sortedArray[insertionIndex]
    ) {
      comparisons++;
      history.push({
        unsorted: [...src],
        sorting: [...sortedArray],
        comparisons: comparisons,
        swaps: swaps,
        comparing: [insertionIndex, insertionIndex - 1]
      });
      [sortedArray[insertionIndex], sortedArray[insertionIndex - 1]] = [
        sortedArray[insertionIndex - 1],
        sortedArray[insertionIndex]
      ];
      //after each swap, push the state to history
      insertionIndex--;
    }
    swaps++;
    history.push({
      unsorted: [...src],
      sorting: [...sortedArray],
      comparisons: comparisons,
      swaps: swaps,
      swapping: [insertionIndex, insertionIndex - 1]
    });
  }
  history.push({
    unsorted: [...src],
    comparisons: comparisons,
    swaps: swaps,
    sorting: [...sortedArray]
  });
  return {
    originalArray: unsortedArray,
    sortedArray: sortedArray,
    history: history
  };
};
export default insertionSort;
