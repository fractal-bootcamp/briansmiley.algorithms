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
    scrambled(Array.from({ length: 64 }, (_, idx) => idx + 1))
  );
  return (
    <div className="bg-slate-200 flex flex-col gap-3 rounded-xl m-2 p-2">
      <div className="mx-2 flex flex-col gap-2">
        <h1 className="text-xl font-bold">Sorting</h1>
        {sorts.map(sort => (
          <div className="bg-slate-400 rounded-xl p-2" key={sort.name}>
            {sort.name}:
            <sort.component unsortedArray={sortData} tick={0} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sorts;
