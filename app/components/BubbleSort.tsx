"use client";

import React, { use, useEffect, useState } from "react";
import SortableBar from "./SortableBar";
import { bubbleSort2 } from "../algorithms/bubbleSortFunc";
import { SortVizProps } from "./Sorts";

export default function BubbleSort({ unsortedArray, tick }: SortVizProps) {
  const solution = bubbleSort2(unsortedArray);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx === solution.history.length - 1) return;
    setTimeout(() => setIdx(idx + 1), tick);
  }, [idx]);

  return (
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
  );
}
