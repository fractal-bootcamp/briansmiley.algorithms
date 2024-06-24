const selSortOneStep = (arr: number[]): number[] => {
  if (arr.length === 1) return arr;
  const ret = [...arr];

  let mindex = 0;
  arr.forEach((val, idx) => (mindex = val < arr[mindex] ? idx : mindex));
  //if the min is already at the start, call it on the remaining subset
  if (mindex === 0) return [arr[0], ...selSortOneStep(arr.slice(1))];
  if (mindex > 0) {
    const temp = ret[mindex];
    ret[mindex] = ret[0];
    ret[0] = temp;
  }
  return ret;
};

export default selSortOneStep;
