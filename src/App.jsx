import React from "react";
import { Copy } from "lucide-react";
import { useId } from "react";

const App = () => {
  const lengthId = useId();
  const uppercaseId = useId();
  const numericId = useId();
  return (
    <section className="bg-gray-800 min-h-screen w-full text-white flex items-center justify-center ">
      <div className="flex gap-5 items-center px-8 py-4 bg-white rounded-xl text-blue-950 min-w-70 shadow m-2">
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h3 className="font-semibold  text-2xl mb-4">Password Generator</h3>
          <div className="relative">
            <input
              type="text"
              className="outline-0 border border-blue-900 rounded-2xl px-4 py-1 w-full cursor-not-allowed"
              placeholder="Generated Password"
              readOnly
            />
            <button className="absolute right-2 top-1 ">
              <Copy className="w-5 cursor-pointer " />
            </button>
          </div>

          <div className="flex gap-5 mt-3 flex-wrap ">
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
              <input type="range" id={lengthId} />
              <label htmlFor={lengthId}>Length 0</label>
            </div>
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
              <input type="checkbox" id={uppercaseId} />
              <label htmlFor={uppercaseId}>Uppercase</label>
            </div>
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
              <input type="checkbox" id={numericId} />
              <label htmlFor={numericId}>Numeric</label>
            </div>
          </div>
        </form>
      </div>
        <small className="fixed bottom-15 select-none text-neutral-600 text-md"  >&copy;Abdur Rahman Adil</small>
    </section>
  );
};

export default App;
