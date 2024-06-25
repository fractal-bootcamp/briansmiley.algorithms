"use client";

import React, { useEffect, useState } from "react";
import SortableBar from "./SortableBar";
import bubbleSort from "../algorithms/bubbleSortFunc";

interface SortVizProps {
  unsortedArray: number[];
}
export default function BubbleSort({ unsortedArray }: SortVizProps) {
  const solution = bubbleSort(unsortedArray);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx === solution.history.length - 1) return;
    setTimeout(() => setIdx(idx + 1), 1000);
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
