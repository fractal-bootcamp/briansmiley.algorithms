"use client";

import React, { use, useEffect, useMemo, useState } from "react";
import SortableBar from "./SortableBar";
import bubbleSort from "../algorithms/bubbleSortFunc";
import { SortVizProps } from "./Sorts";

export default function BubbleSort({ unsortedArray, frame }: SortVizProps) {
  const solution = useMemo(() => bubbleSort(unsortedArray), [unsortedArray]);
  const historyFrame = Math.min(frame, solution.history.length - 1);
  return (
    <div className="flex gap-5">
      <div className="flex justify-start items-end">
        {solution.history[historyFrame].array.map((val, valIdx) => (
          <div key={`bubbleSort${valIdx}`}>
            <SortableBar
              height={val}
              color={
                historyFrame >= solution.history.length - 1 ||
                valIdx >
                  solution.originalArray.length -
                    solution.history[historyFrame].passes
                  ? "green"
                  : solution.history[historyFrame].comparing?.includes(val)
                  ? "#969e00"
                  : solution.history[historyFrame].swapping?.includes(val)
                  ? "#f2ff00"
                  : undefined
              }
              max={Math.max(...unsortedArray)}
              arrayLength={unsortedArray.length}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <div>Comparisons: {solution.history[historyFrame].comparisons}</div>
        <div>Swaps: {solution.history[historyFrame].swaps}</div>
      </div>
    </div>
  );
}
