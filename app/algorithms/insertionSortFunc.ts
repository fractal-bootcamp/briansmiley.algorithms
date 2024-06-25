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
