import { useRef, useState } from "react";
import "./styles.css";

const initialTimer = { minutes: 0, seconds: 0 };

const Timer = () => {
  const [timer, setTimer] = useState(initialTimer);
  const inputRef = useRef(null);

  const timeChangeHandler = (e) => {
    e.preventDefault();
    setTimer((timer) => ({ ...timer, minutes: e.target.value }));
  };

  const startTimer = (e) => {
    e.preventDefault();
    const id = setInterval(() => {
      setTimer(({ minutes, seconds }) => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(id);
          return initialTimer;
        }
        return seconds === 0
          ? { minutes: minutes - 1, seconds: 59 }
          : { minutes, seconds: seconds - 1 };
      });
    }, 1000);
    inputRef.current = { interval: id };
  };

  const stopTimer = (e) => {
    e.preventDefault();
    clearInterval(inputRef.current?.interval);
  };

  const resetTimer = (e) => {
    e.preventDefault();
    setTimer(initialTimer);
    clearInterval(inputRef.current?.interval);
  };

  const clearInput = (e) => {
    e.target.value = "";
  };

  const { minutes, seconds } = timer;

  const getColor = () => {
    return minutes === 0 && seconds <= 5 ? "red" : "initial";
  };

  return (
    <>
      <form>
        <label> Enter Timer in minutes : </label>
        <input
          required
          onChange={timeChangeHandler}
          type="number"
          placeholder="time"
          onBlur={clearInput}
        />
        <button type="submit" onClick={startTimer}>
          Start
        </button>
        <button onClick={stopTimer}> Stop </button>
        <button type="reset" onClick={resetTimer}>
          Reset
        </button>
      </form>
      <div className={`${getColor()}`}>{`${minutes} : ${seconds}`}</div>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}
