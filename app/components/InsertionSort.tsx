"use client";

import React, { useEffect, useState } from "react";
import { scrambled, isSorted } from "../algorithms/utils";
import SortableBar from "./SortableBar";
import insertionSort from "../algorithms/insertionSortFunc";
import { SortVizProps } from "./Sorts";

export default function InsertionSort({ unsortedArray, tick }: SortVizProps) {
  const solution = insertionSort(unsortedArray);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx === solution.history.length - 1) return;
    setTimeout(() => setIdx(idx + 1), tick);
  }, [idx]);
  return (
    <div className="flex gap-5">
      <div className="flex justify-start items-end">
        {solution.history[idx].map(val => (
          <SortableBar
            height={val}
            max={solution.originalArray.length}
            key={val}
          />
        ))}
      </div>
      <div className="flex justify-start items-end">
        {solution.originalArray.slice(idx + 1).map(val => (
          <SortableBar
            height={val}
            max={solution.originalArray.length}
            key={val}
          />
        ))}
      </div>
    </div>
  );
}
