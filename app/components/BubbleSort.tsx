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
    <div className="flex gap-2">
      <div className="flex justify-start items-end">
        {solution.history[idx].array.map((val, valIdx) => (
          <div key={`bubbleSort${val}`}>
            <SortableBar
              height={val}
              color={
                idx >= solution.history.length - 1 ||
                valIdx >
                  solution.originalArray.length - solution.history[idx].passes
                  ? "green"
                  : solution.history[idx].comparing.includes(val)
                  ? "yellow"
                  : undefined
              }
              max={Math.max(...unsortedArray)}
              arrayLength={unsortedArray.length}
            />
            {val}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <div>Comparisons: {solution.history[idx].comparisons}</div>
        <div>Swaps: {solution.history[idx].swaps}</div>
      </div>
    </div>
  );
}
