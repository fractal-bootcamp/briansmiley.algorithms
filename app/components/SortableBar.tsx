"use client";
type SortableBarProps = {
  height: number;
  arrayLength: number;
  max: number;
};
export default function SortableBar({
  height,
  arrayLength,
  max
}: SortableBarProps) {
  const style: React.CSSProperties = {
    minHeight: `${height * (100 / max)}px`,
    minWidth: `${500 / arrayLength}px`,
    backgroundColor: `rgb(${height * (255 / max)} 0 ${
      255 - (255 / max) * height
    })`
  };
  return (
    <div className="flex flex-col">
      <div className="" style={style}></div>
    </div>
  );
}
