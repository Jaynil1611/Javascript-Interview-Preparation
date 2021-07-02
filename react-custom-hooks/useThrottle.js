import { useState } from "react";
import "./styles.css";

const useThrottle = (func, delay) => {
  const [flag, setFlag] = useState(true);

  return function () {
    let args = arguments,
      context = this;
    if (flag) {
      func.apply(context, args);
      setTimeout(() => setFlag(true), delay);
      setFlag(false);
    }
  };
};

const Throttle = () => {
  const printText = () => console.log("Logger");
  const throttledLogger = useThrottle(printText, 3000);

  return (
    <div>
      <button onClick={throttledLogger}>Click Here</button>
    </div>
  );
};

export default function App() {
  return <Throttle />;
}
