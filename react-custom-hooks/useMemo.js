import { useState } from "react";
import "./styles.css";

const useMyMemo = (func, dependencies) => {
  const [values, setValues] = useState([]);
  const [memoizedValue, setMemoizedValue] = useState(null);

  const hasChanged = (dependencies) => {
    return values.length === 0
      ? true
      : values.some((value, i) => value !== dependencies[i]);
  };

  if (Array.isArray(dependencies) && hasChanged(dependencies)) {
    setValues(dependencies);
    setMemoizedValue(func.call(this));
    console.log("called");
  }
  return memoizedValue;
};

const Memo = () => {
  const [number, setNumber] = useState(5);
  function summation(n) {
    return n < 1 ? n : n + summation(n - 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(Number(e.target.form[0].value));
  };

  const memoizedValue = useMyMemo(() => summation(number), [number]);

  console.log(memoizedValue);

  return (
    <>
      <div>
        <h2>{memoizedValue}</h2>
        <form>
          <input
            name="number-input"
            type="number"
            placeholder="Enter number here"
          />
          <button type="submit" onClick={handleSubmit}>
            Change Number
          </button>
        </form>
      </div>
    </>
  );
};

export default function App() {
  return <Memo />;
}
