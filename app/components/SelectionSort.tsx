"use client";

import React, { useEffect, useMemo, useState } from "react";
import SortableBar from "./SortableBar";
import selectionSort from "../algorithms/selectionSortFunc";
import { SortVizProps } from "./Sorts";

export default function SelectionSort({ unsortedArray, tick }: SortVizProps) {
  const solution = useMemo(() => selectionSort(unsortedArray), []);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx === solution.history.length - 1) return;
    setTimeout(() => setIdx(idx + 1), tick);
  }, [idx]);
  return (
    <div className="flex gap-5">
      <div className="flex">
        <div className="flex justify-start items-end">
          {solution.history[idx].sorting.map((val, valIdx) => (
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
          {solution.history[idx].unsorted.map((val, unsortedIdx) => (
            <SortableBar
              height={val}
              max={Math.max(...unsortedArray)}
              color={
                solution.history[idx].comparing?.includes(unsortedIdx)
                  ? "#969e00"
                  : solution.history[idx].inserting === unsortedIdx
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
        <div>Comparisons: {solution.history[idx].comparisons}</div>
        <div>Swaps: {solution.history[idx].swaps}</div>
      </div>
    </div>
  );
}
