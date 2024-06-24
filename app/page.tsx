"use client";

import SortViz from "./algorithms/SortViz";
import bubbleSort from "./algorithms/bubblesort";
import selSort from "./algorithms/selectionsort";
export default function Home() {
  return (
    <div>
      <SortViz sortFunc={bubbleSort} />
      <SortViz sortFunc={selSort} />
    </div>
  );
}
