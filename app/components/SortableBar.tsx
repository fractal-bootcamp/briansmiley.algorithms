type SortableBarProps = {
  height: number;
  max: number;
};
export default function SortableBar({ height, max }: SortableBarProps) {
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
