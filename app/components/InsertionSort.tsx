"use client";

import React, { useEffect, useMemo, useState } from "react";
import { scrambled, isSorted } from "../algorithms/utils";
import SortableBar from "./SortableBar";
import insertionSort from "../algorithms/insertionSortFunc";
import { SortVizProps } from "./Sorts";

export default function InsertionSort({ unsortedArray, tick }: SortVizProps) {
  const solution = useMemo(() => insertionSort(unsortedArray), [unsortedArray]);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx === solution.history.length - 1) return;
    setTimeout(() => setIdx(idx + 1), tick);
  }, [idx]);
  return (
    <div className="flex gap-5">
      <div className="flex justify-start items-end">
        {solution.history[idx].sorting.map(val => (
          <SortableBar
            height={val}
            max={Math.max(...unsortedArray)}
            arrayLength={solution.originalArray.length}
            color={
              solution.history[idx].comparing?.includes(val)
                ? "#969e00"
                : solution.history[idx].swapping?.includes(val)
                ? "#f2ff00"
                : "green"
            }
            key={`insertionSort${val}`}
          />
        ))}
      </div>
      <div className="flex justify-start items-end">
        {solution.history[idx].unsorted.map(val => (
          <SortableBar
            height={val}
            max={Math.max(...unsortedArray)}
            arrayLength={solution.originalArray.length}
            key={`insertionSort${val}`}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <div>Comparisons: {solution.history[idx].comparisons}</div>
        <div>Swaps: {solution.history[idx].swaps}</div>
      </div>
    </div>
  );
}
