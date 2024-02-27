import { useState,useRef } from "react";
import "./App.css";
import { useCallback, useEffect } from "react";

function App() {

  const passwordRef = useRef(null)

  const [password, setPassword] = useState("");
  const [lenght, setLenght] = useState(10);
  const [characters, setCharacters] = useState(false);
  const [number, setNumber] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (characters) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= lenght; i++) {
      let charIdx = Math.floor(Math.random() * str.length);
      pass += str[charIdx];
    }

    setPassword(pass);
  }, [lenght, number, characters, setPassword]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select()
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, characters, number]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3 font-bold">
          Password generator
        </h1>
        <div className="flex shadow-sm rounded-md p-4 gap-2">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="outline-none w-full pl-2 p-2 rounded-lg text-lg"
            ref={passwordRef}
          />
          <button
            className="bg-blue-700 px-3 py-1 rounded-lg text-white"
            onClick={copyPass}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={1}
              max={30}
              value={lenght}
              step={1}
              onChange={(e) => setLenght(e.target.value)}
            />
            <label htmlFor="range"> Lenght : {lenght} </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="number"
              defaultChecked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="number"> Number</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              id="char"
              defaultChecked={characters}
              onChange={() => setCharacters((prev) => !prev)}
            />
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
