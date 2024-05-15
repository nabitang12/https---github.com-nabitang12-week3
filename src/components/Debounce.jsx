import { useEffect, useState } from "react";

const Debounce = (value, delay) => {
  const [debouncedvalue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value]);

  return debouncedvalue;
};

export default Debounce;
