import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <div>Counter with Hook: {counter}</div>
      <hr />
      <button onClick={() => increment(2)}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};
