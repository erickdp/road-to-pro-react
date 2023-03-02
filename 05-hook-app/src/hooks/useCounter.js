// Custom Hook, pero casi siempre están amarrados a hooks propios de react

import { useState } from "react";

export const useCounter = (initValue = 10) => {
  const [counter, setCounter] = useState(initValue);

  const increment = (value = 1) => { // en el caso que quisiera que aumente en n valor
    setCounter(counter + value);
  };

  const decrement = () => {
    if(counter === 0) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
