export interface Snapshot {
  before: number[];
  after: number[];
  leftChildren?: Snapshot;
  rightChildren?: Snapshot;
}

const mergeSort = (arr: number[]): Snapshot => {
  if (arr.length < 2) return { before: arr, after: arr };

  const leftSnapshots = mergeSort(arr.slice(0, arr.length / 2));
  const rightSnapshots = mergeSort(arr.slice(arr.length / 2));
  const [sortedL, sortedR] = [leftSnapshots.after, rightSnapshots.after];
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
    before: arr,
    after: ret,
    leftChildren: leftSnapshots,
    rightChildren: rightSnapshots
  };
};

export default mergeSort;

console.log(JSON.stringify(mergeSort([6, 34, 214, 52, 23]), undefined, 1));
