const insertionSort = (unsortedArray: number[]) => {
  let sortedArray: number[] = [];
  const intermediateSortedArrays: number[][] = [];
  //loop through the unsorted array and insert its elements into a sorted one
  unsortedArray.forEach(elem => {
    //find index of first element in sorted array larger than current element
    //if no sorted elements are larger, default to last index
    let insertionIndex = sortedArray.findIndex(sortedNum => sortedNum >= elem);
    if (insertionIndex === -1) insertionIndex = sortedArray.length;
    //place the element at the appropriate index
    sortedArray.splice(insertionIndex, 0, elem);

    //Add the sort step to the sortedArray history
    intermediateSortedArrays.push([...sortedArray]);
  });
  return {
    originalArray: unsortedArray,
    sortedArray: sortedArray,
    history: intermediateSortedArrays
  };
};

export default insertionSort;

interface InsertionHistorySnapshot {
  unsorted: number[];
  sorting: number[];
  comparing: [number, number];
}
export const insertionSort2 = (unsortedArray: number[]) => {
  let src = [...unsortedArray];
  let sortedArray: number[] = [];
  const history: InsertionHistorySnapshot[] = [];
  //repeatedly pop elements out of the original array an into the sorted array, swapping them over into place
  while (src.length > 0) {
    //take the first element from src and put it on sorted
    sortedArray.push(src.shift()!);
    //repeatedly swap until the entry to its left is smaller
    let insertionIndex = sortedArray.length - 1;
    history.push({
      unsorted: [...src],
      sorting: [...sortedArray],
      comparing: [sortedArray[insertionIndex], sortedArray[insertionIndex - 1]]
    });
    while (
      insertionIndex >= 0 &&
      sortedArray[insertionIndex - 1] > sortedArray[insertionIndex]
    ) {
      [sortedArray[insertionIndex], sortedArray[insertionIndex - 1]] = [
        sortedArray[insertionIndex - 1],
        sortedArray[insertionIndex]
      ];
      //after each swap, push the state to history
      insertionIndex--;
      history.push({
        unsorted: [...src],
        sorting: [...sortedArray],
        comparing: [
          sortedArray[insertionIndex],
          sortedArray[insertionIndex - 1]
        ]
      });
    }
  }
  history.push({
    unsorted: [...src],
    sorting: [...sortedArray],
    comparing: [-1, -1]
  });
  return {
    originalArray: unsortedArray,
    sortedArray: sortedArray,
    history: history
  };
};
