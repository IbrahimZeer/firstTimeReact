import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const changeCouter = () => {
    setCount(++count);
  };
  return (
    <>
      <button onClick={changeCouter}> Ibraheem Zeer {count} </button>{" "}
    </>
  );
}

export default App;
