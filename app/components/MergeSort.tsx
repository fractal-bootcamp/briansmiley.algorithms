import { useEffect, useState } from "react";
import mergeSort, { Snapshot } from "../algorithms/mergeSortFunc";
import SortableBar from "./SortableBar";
import { SortVizProps } from "./Sorts";

const contextDepth = (context: Snapshot) =>
  Math.ceil(Math.log2(context.after.length)); //remaining level of merge/split below this one to know how to handle currentDepth
const MergeSort = ({ unsortedArray, tick }: SortVizProps) => {
  const solution = mergeSort(unsortedArray);
  const [depth, setDepth] = useState(1);
  useEffect(() => {
    if (depth === contextDepth(solution)) return;
    setTimeout(() => setDepth(depth + 1), tick);
  }, [depth]);
  return <MergeSortMeta context={solution} currentDepth={depth} />;
};
interface MergeSortMetaProps {
  currentDepth: number; //passed down depth the render is at to decide what to show
  context: Snapshot; //the entire merge
}
const MergeSortMeta = ({ currentDepth, context }: MergeSortMetaProps) => {
  const renderSelfSorted = contextDepth(context) <= currentDepth;
  return (
    <div>
      {renderSelfSorted ? (
        <div className="flex justify-start items-end mx-2">
          {context.after.map(val => (
            <SortableBar
              height={val}
              max={Math.max(...context.after)}
              key={val}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-start gap-2">
          {context.leftChildren ? (
            <MergeSortMeta
              currentDepth={currentDepth}
              context={context.leftChildren}
            />
          ) : (
            ""
          )}
          {context.rightChildren ? (
            <MergeSortMeta
              currentDepth={currentDepth}
              context={context.rightChildren}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};
export default MergeSort;
