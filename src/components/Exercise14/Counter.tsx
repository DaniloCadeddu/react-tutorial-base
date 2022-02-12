import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

export const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const incr = () => dispatch(increment());
  const decr = () => dispatch(decrement());

  return (
    <div>
      <button onClick={incr}>Incrementa</button>
      {counter}
      <button onClick={decr}>Decrementa</button>
    </div>
  );
};
