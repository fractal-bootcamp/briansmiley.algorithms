"use client";

import React, { useEffect, useState } from "react";
import SortableBar from "./SortableBar";
import selectionSort from "../algorithms/selectionSortFunc";
import { SortVizProps } from "./Sorts";

export default function SelectionSort({ unsortedArray, tick }: SortVizProps) {
  const solution = selectionSort(unsortedArray);
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
            color={"green"}
            key={`selectionSort${val}`}
          />
        ))}
      </div>
      <div className="flex justify-start items-end">
        {solution.history[idx].unsorted.map((val, unsortedIdx) => (
          <SortableBar
            height={val}
            max={Math.max(...unsortedArray)}
            color={
              solution.history[idx].comparing[1] === unsortedIdx
                ? "green"
                : solution.history[idx].comparing[0] === unsortedIdx
                ? "yellow"
                : undefined
            }
            arrayLength={solution.originalArray.length}
            key={`selectionSort${val}`}
          />
        ))}
      </div>
    </div>
  );
}
