const selectionSort = (arr: number[]) => {
  const sorted = [...arr];
  const history: number[][] = [sorted];
  arr.forEach((_, idx) => {
    const mindex = sorted
      .slice(idx)
      .reduce(
        (num, mindex, currentIndex) =>
          num < sorted[mindex] ? currentIndex : mindex,
        0
      );
    console.log(mindex);
    if (mindex > idx) {
      const swapSpot = mindex + idx;
      const temp = sorted[swapSpot];
      sorted[swapSpot] = sorted[idx];
      sorted[idx] = temp;
      history.push(sorted);
    }
  });
  return {
    originalArray: arr,
    sortedArray: sorted,
    history: history
  };
};

export default selectionSort;
console.log(selectionSort([5, 3, 5, 1, 1, 2, 4, 45, 1, 61, 24, 21, 15, 16]));
