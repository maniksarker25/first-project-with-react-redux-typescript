import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/features/counterSlice";
function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
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
        </div>
      </div>
    </>
  );
}

export default App;
