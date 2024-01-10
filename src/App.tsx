import {
  increment,
  decrement,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full my-4">
        <div className="flex border-2 border-purple-400 rounded-md p-10 gap-3 bg-slate-200">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-1.5 rounded-md bg-red-500 text-semibold text-white"
          >
            Decrement
          </button>
          <h1 className="text-5xl my-4 mx-4">{count}</h1>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-1.5  rounded-md bg-green-500 text-semibold text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="px-4 py-1.5  rounded-md bg-green-500 text-semibold text-white"
          >
            Increment By 5
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
