import { scrambled } from "../algorithms/utils";
import React from "react";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
const sampleArray = Array.from({ length: 15 }, (_, idx) => idx);
const scrambledArray = scrambled(sampleArray);

const sorts = [
  { name: "Bubble Sort", component: BubbleSort },
  { name: "Selection Sort", component: SelectionSort },
  { name: "Insertion Sort", component: InsertionSort }
];
const Sorts = () => {
  return (
    <div>
      {sorts.map(sort => (
        <div key={sort.name}>
          <sort.component unsortedArray={scrambledArray} />
          {sort.name}
        </div>
      ))}
    </div>
  );
};
export default Sorts;
