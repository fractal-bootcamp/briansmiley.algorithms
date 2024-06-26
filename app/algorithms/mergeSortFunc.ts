export interface Snapshot {
  before: number[];
  after: number[];
  leftChildren?: Snapshot;
  rightChildren?: Snapshot;
  index?: number;
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

/**Adds breadth first indexing to merge tree */
export const indexMergeTree = (snapshot: Snapshot) => {
  let count = 0;
  const queue = [snapshot];
  while (queue.length > 0) {
    const node = queue.shift()!;
    node.index = count++;
    if (node.leftChildren) queue.push(node.leftChildren);
    if (node.rightChildren) queue.push(node.rightChildren);
  }
  // console.log(snapshot);
  return snapshot;
};
export default mergeSort;

// console.log(
//   JSON.stringify(
//     indexMergeTree(
//       mergeSort([1, 2, 5, 7, 5, 4, 12, 41, 12, 14, 16, 17, 345, 52, 23])
//     ),
//     undefined,
//     1
//   )
// );
