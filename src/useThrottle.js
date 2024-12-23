import { useEffect, useRef, useState } from "react";

// NOTE: #3 create the custom hook with val and interval parameters
export function useThrottle(value, interval = 1000) {

  // NOTE: #4 create throttleVal state
  const [throttledVal, setThrottledVal] = useState(value);

  // NOTE: #5 create lastExc ref 
  const lastExc = useRef(-1);

  // NOTE: #6 create the effect
  useEffect(() => {

    // NOTE: #6.1 checks if the interval has passed
    if (Date.now() >= lastExc.current + interval) {

      // NOTE: #6.2 if passed setThrottleVal to updated value and set lastExc to now
      setThrottledVal(value);
      lastExc.current = Date.now();
    } else {
      
      // NOTE: #6.3 it will clean up the previosu calls and recall the new timer
      const timerId = setTimeout(() => {
        setThrottledVal(value);
        lastExc.current = Date.now();
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [interval, value]);

  return throttledVal;
}
