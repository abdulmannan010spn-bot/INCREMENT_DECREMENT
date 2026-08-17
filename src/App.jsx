import { useState } from "react";

const App = () => {
  const [num,setNum] = useState(0)

  function increaseNum(){
  setNum(num+1)

  }

  function decreaseNum(){
  setNum(num-1)
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
      
      <h1 className="h-36 w-36 bg-blue-500 rounded-full text-5xl font-bold flex items-center justify-center shadow-2xl border-4 border-blue-300">
        {num}
      </h1>

      <div className="flex gap-8 mt-12">
        <button onClick= {increaseNum}
        className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all duration-200 px-8 py-4 rounded-lg text-xl font-semibold shadow-lg">
          INCREASE
        </button>

        <button onClick= {decreaseNum} className="bg-rose-500 hover:bg-rose-600 active:scale-95 transition-all duration-200 px-8 py-4 rounded-lg text-xl font-semibold shadow-lg">
          DECREASE
        </button>
      </div>

    </div>
  );
};

export default App;