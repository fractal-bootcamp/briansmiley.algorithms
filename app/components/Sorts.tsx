"use client";
import { scrambled } from "../algorithms/utils";
import React, { useEffect, useMemo, useState } from "react";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
import { RotateCcw } from "lucide-react";
export interface SortVizProps {
  unsortedArray: number[];
  frame: number;
}
const sorts = [
  { name: "Bubble Sort", component: BubbleSort },
  { name: "Selection Sort", component: SelectionSort },
  { name: "Insertion Sort", component: InsertionSort },
  { name: "Merge Sort", component: MergeSort }
];
const Sorts = () => {
  const [controls, setControls] = useState({ arraySize: 64, clock: 0 });
  const [tick, setTick] = useState(50);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setControls({
          ...controls,
          clock: paused ? controls.clock : controls.clock + 1
        }),
      1000 / tick
    );
    return () => clearTimeout(timeout);
  }, [controls.clock, paused]);
  const sortData = useMemo(
    () =>
      scrambled(
        Array.from({ length: controls.arraySize }, (_, idx) => idx + 1)
      ),
    [controls.arraySize]
  );
  return (
    <div className="bg-slate-200 flex flex-col gap-3 rounded-xl m-2 p-2">
      <div className="mx-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Sorting</h1>
          <div
            className="hover:bg-slate-300 hover:cursor-pointer rounded-full w-fit p-2"
            onClick={() => setControls({ ...controls, clock: 0 })}
          >
            <RotateCcw strokeWidth={2.25} />
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div
            className="flex flex-col gap-1 w-fit"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <HiddenSliderControl
              label="Items"
              max={256}
              min={8}
              stateSetter={(val: number) =>
                setControls({ ...controls, arraySize: val, clock: 0 })
              }
              stateValue={controls.arraySize}
              step={1}
            />
            <HiddenSliderControl
              label="Speed"
              max={500}
              min={1}
              stateSetter={setTick}
              stateValue={tick}
              step={1}
            />
          </div>
          <div className="flex gap-3">
            <div className="flex">
              <div className="w-5 h-5 bg-[green]"></div>- Sorted
            </div>
            <div className="flex">
              <div className="w-5 h-5 bg-[#969e00]"></div>- Comparing
            </div>
            <div className="flex">
              <div className="w-5 h-5 bg-[#f2ff00]"></div>- Swapping
            </div>
          </div>
        </div>
        {sorts.map(sort => (
          <div className="bg-slate-400 rounded-xl p-2" key={sort.name}>
            {sort.name}:
            <sort.component unsortedArray={sortData} frame={controls.clock} />
          </div>
        ))}
      </div>
    </div>
  );
};

interface HiddenSliderControlProps {
  label: string;
  min: number;
  max: number;
  step: number;
  stateValue: number;
  stateSetter: (value: number) => void;
}
const HiddenSliderControl = ({
  label,
  min,
  max,
  step,
  stateValue,
  stateSetter
}: HiddenSliderControlProps) => {
  const [sliderViz, setSliderViz] = useState(false);
  return (
    <div
      className="flex items-center gap-2"
      onMouseLeave={() => setSliderViz(false)}
    >
      <button
        className="btn btn-xs btn-primary rounded-full w-fit"
        onMouseEnter={() => setSliderViz(true)}
      >
        {label}
      </button>
      {sliderViz && (
        <div className="flex w-[35%] items-center gap-1">
          <input
            className="range range-xs w-[500px]"
            type="range"
            min={min}
            max={max}
            step={step}
            value={stateValue}
            onChange={e => stateSetter(e.target.valueAsNumber)}
          />
          <div>{stateValue}</div>
        </div>
      )}
    </div>
  );
};
export default Sorts;
