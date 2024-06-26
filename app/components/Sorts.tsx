"use client";
import { scrambled } from "../algorithms/utils";
import React, { useEffect, useState } from "react";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
const sampleArray = Array.from({ length: 8 }, (_, idx) => idx + 1);
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
    scrambled(Array.from({ length: 8 }, (_, idx) => idx + 1))
  );
  return (
    <div>
      {sorts.map(sort => (
        <div key={sort.name}>
          <sort.component unsortedArray={sortData} tick={500} />
          {sort.name}
        </div>
      ))}
    </div>
  );
};
export default Sorts;
