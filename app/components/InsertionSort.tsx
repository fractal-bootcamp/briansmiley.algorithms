"use client";

import React, { useMemo } from "react";
import SortableBar from "./SortableBar";
import insertionSort from "../algorithms/insertionSortFunc";
import { SortVizProps } from "./Sorts";

export default function InsertionSort({ unsortedArray, frame }: SortVizProps) {
  const solution = useMemo(() => insertionSort(unsortedArray), [unsortedArray]);
  const historyFrame = Math.min(frame, solution.history.length - 1);

  return (
    <div className="flex gap-5">
      <div className="flex">
        <div className="flex justify-start items-end">
          {solution.history[historyFrame].sorting.map((val, valIdx) => (
            <SortableBar
              height={val}
              max={Math.max(...unsortedArray)}
              arrayLength={solution.originalArray.length}
              color={
                solution.history[historyFrame].comparing?.includes(valIdx)
                  ? "#969e00"
                  : solution.history[historyFrame].swapping?.includes(valIdx)
                  ? "#f2ff00"
                  : "green"
              }
              key={`insertionSort${valIdx}`}
            />
          ))}
        </div>
        <div className="flex justify-start items-end">
          {solution.history[historyFrame].unsorted.map((val, unsortedIdx) => (
            <SortableBar
              height={val}
              max={Math.max(...unsortedArray)}
              arrayLength={solution.originalArray.length}
              key={`insertionSort${unsortedIdx}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div>Comparisons: {solution.history[historyFrame].comparisons}</div>
        <div>Swaps: {solution.history[historyFrame].swaps}</div>
      </div>
    </div>
  );
}
