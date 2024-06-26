"use client";
import { scrambled } from "../algorithms/utils";
import React, { useEffect, useState } from "react";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
export interface SortVizProps {
  unsortedArray: number[];
  tick: number;
}
const sorts = [
  { name: "Bubble Sort", component: BubbleSort },
  { name: "Selection Sort", component: SelectionSort },
  { name: "Insertion Sort", component: InsertionSort },
  { name: "Merge Sort", component: MergeSort }
];
const Sorts = () => {
  const [sortData, setSortData] = useState(() =>
    scrambled(Array.from({ length: 32 }, (_, idx) => idx + 1))
  );
  return (
    <div className="bg-slate-400">
      {sorts.map(sort => (
        <div key={sort.name}>
          <sort.component unsortedArray={sortData} tick={25} />
          {sort.name}
        </div>
      ))}
    </div>
  );
};
export default Sorts;
