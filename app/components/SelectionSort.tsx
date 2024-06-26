"use client";

import React, { useEffect, useMemo, useState } from "react";
import SortableBar from "./SortableBar";
import selectionSort from "../algorithms/selectionSortFunc";
import { SortVizProps } from "./Sorts";

export default function SelectionSort({ unsortedArray, frame }: SortVizProps) {
  const solution = useMemo(() => selectionSort(unsortedArray), [unsortedArray]);
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
              color={"green"}
              key={`selectionSort${valIdx}`}
            />
          ))}
        </div>
        <div className="flex justify-start items-end">
          {solution.history[historyFrame].unsorted.map((val, unsortedIdx) => (
            <SortableBar
              height={val}
              max={Math.max(...unsortedArray)}
              color={
                solution.history[historyFrame].comparing?.includes(unsortedIdx)
                  ? "#969e00"
                  : solution.history[historyFrame].inserting === unsortedIdx
                  ? "#f2ff00"
                  : undefined
              }
              arrayLength={solution.originalArray.length}
              key={`selectionSort${unsortedIdx}`}
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
