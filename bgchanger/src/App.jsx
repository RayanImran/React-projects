import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4"
          style={{ backgroundColor: "yellow" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("black")}
          className="outline-none px-4"
          style={{ backgroundColor: "black" }}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
