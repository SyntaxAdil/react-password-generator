import React, { useRef, useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import { useId } from "react";

const App = () => {
  const lengthId = useId();
  const symbolId = useId();
  const numericId = useId();
  const passwordRef = useRef(null);

  function copyPassword() {
    if (coping) return;
    passwordRef.current.focus();
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password).then(() => {
      setCoping(true);
      setTimeout(() => {
        passwordRef.current.setSelectionRange(0, 0);

        setCoping(false);
      }, 2000);
    });
  }

  const [coping, setCoping] = useState(false);
  const [password, setPassword] = useState("");
  const [symbolCheck, setSymbolCheck] = useState(false);
  const [numericCheck, setNumericCheck] = useState(false);
  const [length, setLength] = useState(2);
  function generatePassword(len, hasNum, hasSymbol) {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (hasNum) str += "0123456789";
    if (hasSymbol) str += "!@#$%^&*()_+{}:>?=-";

    for (let i = 0; i < len; i++) {
      let random = Math.floor(Math.random() * str.length);

      pass += str.charAt(random);
    }
    return pass;
  }
  useEffect(() => {
    setPassword(generatePassword(length, numericCheck, symbolCheck));
  }, [symbolCheck, length, numericCheck]);

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
              ref={passwordRef}
              value={password}
              type="text"
              className="outline-0 border border-blue-900 rounded-2xl px-4 py-1 w-full cursor-not-allowed"
              placeholder="Generated Password"
              readOnly
            />
            <button className="absolute right-2 top-1 " onClick={copyPassword}>
              {!coping ? (
                <Copy className="w-5 cursor-pointer " />
              ) : (
                <Check className="w-5 cursor-pointer " />
              )}
            </button>
          </div>

          <div className="flex gap-5 mt-3 flex-wrap ">
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
              <input
                type="range"
                id={lengthId}
                onChange={(e) => setLength(Number(e.target.value))}
                max={30}
                min={2}
              />
              <label htmlFor={lengthId}>
                Length {length < 10 && length >= 0 ? "0" + length : length}
              </label>
            </div>
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
              <input
                type="checkbox"
                id={symbolId}
                onChange={() => setSymbolCheck((prev) => !prev)}
              />
              <label htmlFor={symbolId}>Symbol</label>
            </div>
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
              <input
                type="checkbox"
                id={numericId}
                onChange={() => setNumericCheck((prev) => !prev)}
              />
              <label htmlFor={numericId}>Numeric</label>
            </div>
          </div>
        </form>
      </div>
      <small className="fixed bottom-15 select-none text-neutral-600 text-md">
        &copy;Abdur Rahman Adil
      </small>
    </section>
  );
};

export default App;
