"use client";

import React, { useEffect, useState } from "react";
import { scrambled, isSorted } from "./utils";
const sampleArray = Array.from({ length: 15 }, (_, idx) => idx);
const scrambledArray = scrambled(sampleArray);
interface SortVizProps {
  sortFunc: (arr: number[]) => number[];
}
export default function SortViz({ sortFunc }: SortVizProps) {
  const [arr, setArr] = useState(scrambledArray);
  useEffect(() => {
    if (isSorted(arr)) return;
    setTimeout(() => setArr(arr => sortFunc(arr)), 700);
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
