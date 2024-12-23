import { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

function App() {
  // NOTE: #1 set up the basic functionality
  const [val, setVal] = useState("");

  // NOTE: #2 make the throttle value
  const throttleVal = useThrottle(val, 1000);

  // useEffect(
  //   function () {
  //     console.log("Throttle value", val);
  //   },
  //   [val]
  // );
  
  // NOTE: #7 call the effect with the throttle value
  useEffect(
    function () {
      console.log("Throttle value", throttleVal);
    },
    [throttleVal]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Type value..."
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  );
}

export default App;
