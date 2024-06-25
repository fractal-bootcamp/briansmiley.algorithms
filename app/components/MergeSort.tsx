import mergeSort from "../algorithms/mergeSortFunc";
import { SortVizProps } from "./Sorts";
const MergeSort = ({ unsortedArray }: SortVizProps) => {
  const solution = mergeSort(unsortedArray);
  return <div></div>;
};
interface MergeSortMetaProps {
  level: number;
  arr: number[];
}
const MergeSortMeta = ({ level, arr }: MergeSortMetaProps) => {};
