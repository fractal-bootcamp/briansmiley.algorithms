"use client";

import React, { use, useEffect, useState } from "react";
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
        <div key={`bubbleSort${val}`}>
          <SortableBar
            height={val}
            max={Math.max(...unsortedArray)}
            arrayLength={unsortedArray.length}
          />
          {val}
        </div>
      ))}
    </div>
  );
}
