import { useEffect, useState } from "react";

export default function Counter({ end, duration = 2000 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setValue(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{value}</span>;
}
