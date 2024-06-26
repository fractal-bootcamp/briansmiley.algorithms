"use client";

import React, { useEffect, useState } from "react";
import { scrambled, isSorted } from "../algorithms/utils";
import SortableBar from "./SortableBar";
import { insertionSort2 } from "../algorithms/insertionSortFunc";
import { SortVizProps } from "./Sorts";

export default function InsertionSort({ unsortedArray, tick }: SortVizProps) {
  const solution = insertionSort2(unsortedArray);
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
              solution.history[idx].comparing.includes(val) ? "yellow" : "green"
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
    </div>
  );
}
