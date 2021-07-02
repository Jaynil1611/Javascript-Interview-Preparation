import { useEffect, useState } from "react";
import "./styles.css";

const useDebounce = (searchValue, delay) => {
  const [state, setValue] = useState({ timer: null });

  useEffect(() => {
    clearTimeout(state.timer);
    const timer = setTimeout(
      () => setValue((state) => ({ ...state, searchValue })),
      delay
    );
    setValue((state) => ({ ...state, timer }));
  }, [searchValue, delay]);

  return state.searchValue;
};

const Debounce = () => {
  const [text, setText] = useState("");
  const delayedSearch = useDebounce(text, 1000);

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Enter here..."
      />
      <div>Search Results</div>
      <div>{delayedSearch}</div>
    </div>
  );
};

export default function App() {
  return <Debounce />;
}
