interface Snapshots {
  before: number[];
  after: number[];
  leftChildren?: Snapshots;
  rightChildren?: Snapshots;
}

const mergeSort = (
  arr: number[]
): { sorted: number[]; snapshots: Snapshots } => {
  if (arr.length < 2)
    return { sorted: arr, snapshots: { before: arr, after: arr } };

  const { sorted: sortedL, snapshots: leftSnapshots } = mergeSort(
    arr.slice(0, arr.length / 2)
  );
  const { sorted: sortedR, snapshots: rightSnapshots } = mergeSort(
    arr.slice(arr.length / 2)
  );

  const ret = [];
  let snapshot = {
    before: arr,
    after: arr
  };

  let [idx1, idx2] = [0, 0];
  while (idx1 < sortedL.length && idx2 < sortedR.length) {
    if (sortedL[idx1] < sortedR[idx2]) {
      ret.push(sortedL[idx1++]);
    } else {
      ret.push(sortedR[idx2++]);
    }
  }
  while (idx1 < sortedL.length) ret.push(sortedL[idx1++]);
  while (idx2 < sortedR.length) ret.push(sortedR[idx2++]);

  snapshot.after = ret;
  return {
    sorted: ret,
    snapshots: {
      before: arr,
      after: ret,
      leftChildren: leftSnapshots,
      rightChildren: rightSnapshots
    }
  };
};

export default mergeSort;

console.log(JSON.stringify(mergeSort([6, 34, 214, 52, 23]), undefined, 1));
