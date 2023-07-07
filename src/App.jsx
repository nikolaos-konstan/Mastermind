import { useState } from "react";
import "./App.css";
import { Main } from "./assets/Main";

function App() {
  const [hiddenCombination, setHiddenCombination] = useState([]);
  const colours = [
    "#d11141",
    "#00b159",
    "#00aedb",
    "#f37735",
    "#ffc425",
    "#d696bb",
  ];

  const generateRandomArray = () => {
    const randomArray = [];
    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * 6);
      randomArray.push(colours[randomNumber]);
    }
    setHiddenCombination(randomArray);
    console.log(hiddenCombination);
  };

  return (
    <>
      <button onClick={generateRandomArray}>generate</button>
      <Main />
    </>
  );
}

export default App;
