import { useState } from "react";
import "./App.css";
import { Main } from "./assets/Main";

function App() {
  const [hiddenCombination, setHiddenCombination] = useState([1, 2, 3, 4]);
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
    console.log(hiddenCombination[0]);
  };

  console.log(hiddenCombination[1]);
  return (
    <>
      <button onClick={generateRandomArray}>generate</button>
      <Main hiddenCombination={hiddenCombination} colours={colours} />
    </>
  );
}

export default App;
