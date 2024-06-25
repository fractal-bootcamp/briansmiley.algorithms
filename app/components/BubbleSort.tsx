"use client";

import React, { useEffect, useState } from "react";
import SortableBar from "./SortableBar";
import bubbleSort from "../algorithms/bubbleSortFunc";
import { SortVizProps } from "./Sorts";

export default function BubbleSort({ unsortedArray, tick }: SortVizProps) {
  const solution = bubbleSort(unsortedArray);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx === solution.history.length - 1) return;
    setTimeout(() => setIdx(idx + 1), tick);
  }, [idx]);
  return (
    <div className="flex justify-start items-end">
      {solution.history[idx].map(val => (
        <SortableBar
          height={val}
          max={solution.originalArray.length}
          key={val}
        />
      ))}
    </div>
  );
}