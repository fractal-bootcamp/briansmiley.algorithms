import { useEffect, useState } from "react";
import mergeSort, {
  Snapshot,
  indexMergeTree
} from "../algorithms/mergeSortFunc";
import SortableBar from "./SortableBar";
import { SortVizProps } from "./Sorts";

const MergeSort = ({ unsortedArray, tick }: SortVizProps) => {
  const [solution, setSolution] = useState(
    indexMergeTree(mergeSort(unsortedArray))
  );
  const arrayMax = Math.max(...unsortedArray);
  const [depth, setDepth] = useState(0);
  const [sortFlag, setSortFlag] = useState(false);
  useEffect(() => {
    if (depth === solution.before.length - 1) setSortFlag(true); //flip to whether we are splitting or sorting when we hit the last node
    setTimeout(() => {
      const increment = sortFlag ? -1 : 1; //if sort flag is on, we are counting backwards as we walk up and sort/merge
      setDepth(depth + increment); //increase our depth tick
    }, tick);
  }, [depth]);

  return (
    <MergeSortMeta
      context={solution}
      currentDepth={depth}
      sortFlag={sortFlag}
      arrayMax={arrayMax}
    />
  );
};
interface MergeSortMetaProps {
  context: Snapshot; //the entire merge
  currentDepth: number; //upticking render depth
  sortFlag: boolean; //whether we are sorting or splitting
  arrayMax: number; //size of largest entry; for display scaling
}
const MergeSortMeta = ({
  context,
  currentDepth,
  sortFlag,
  arrayMax
}: MergeSortMetaProps) => {
  const arrayToRender = sortFlag ? context.after : context.before;
  return (
    <div>
      {currentDepth > context.index! ? (
        <div className="flex justify-start gap-2 items-end">
          {/* If we are past a nodes index and it is a singleton, render it */}
          {context.after.length === 1 ? (
            <div className="flex h-full justify-start items-end mx-2">
              {arrayToRender.map(val => (
                <SortableBar height={val} max={arrayMax} key={val} />
              ))}
            </div>
          ) : (
            ""
          )}
          {/* Otherwise, render its children */}
          {context.leftChildren ? (
            <MergeSortMeta
              currentDepth={currentDepth}
              context={context.leftChildren}
              sortFlag={sortFlag}
              arrayMax={arrayMax}
            />
          ) : (
            ""
          )}
          {context.rightChildren ? (
            <MergeSortMeta
              currentDepth={currentDepth}
              context={context.rightChildren}
              sortFlag={sortFlag}
              arrayMax={arrayMax}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex h-full justify-start items-end mx-2">
          {arrayToRender.map(val => (
            <SortableBar height={val} max={arrayMax} key={val} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MergeSort;
