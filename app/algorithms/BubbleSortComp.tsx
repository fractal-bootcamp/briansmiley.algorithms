"use client";

import React, { useEffect, useState } from "react";
import { scrambled } from "./utils";
import { isSorted, bubbleOneStep } from "./bubblesort";
const sampleArray = Array.from({ length: 15 }, (_, idx) => idx);

export default function BubbleSort() {
  const [arr, setArr] = useState(scrambled(sampleArray));
  useEffect(() => {
    if (isSorted(arr)) return;
    setTimeout(() => setArr(arr => bubbleOneStep(arr)), 100);
  }, [arr]);
  return (
    <div className="flex justify-start items-end">
      {arr.map(val => (
        <SortableBar height={val} max={arr.length} key={val} />
      ))}
    </div>
  );
}

type SortableBarProps = {
  height: number;
  max: number;
};
function SortableBar({ height, max }: SortableBarProps) {
  const style: React.CSSProperties = {
    minHeight: `${height * (100 / max)}px`,
    backgroundColor: `rgb(${height * (255 / max)} 0 ${
      255 - (255 / max) * height
    })`
  };
  return (
    <div className="flex flex-col">
      <div className="min-w-[15px]" style={style}></div>
      {height}
    </div>
  );
}
