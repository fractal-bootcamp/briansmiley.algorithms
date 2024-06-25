const selectionSort = (arr: number[]) => {
  const sortedEventually = [...arr];
  const history: number[][] = [[...sortedEventually]];

  sortedEventually.forEach((elem, idx) => {
    let mindex = idx; //initially set minimum to the current element
    for (let i = idx + 1; i < sortedEventually.length; i++) {
      if (sortedEventually[i] < sortedEventually[mindex]) mindex = i;
    }
    //swap current element with the mindex value
    if (mindex !== idx) {
      const temp = sortedEventually[idx];
      sortedEventually[idx] = sortedEventually[mindex];
      sortedEventually[mindex] = temp;
      history.push([...sortedEventually]);
    }
  });
  return {
    originalArray: arr,
    sortedArray: sortedEventually,
    history: history
  };
};

export default selectionSort;
// console.log(selectionSort([5, 3, 5, 1, 1, 2, 4, 45, 1, 61, 24, 21, 15, 16]));
