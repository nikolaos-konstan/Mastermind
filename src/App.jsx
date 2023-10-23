import { useState } from "react";
import "./App.css";
import { SecretCombo } from "./Components/SecretCombo";

function App() {
  //State of secret combination
  const [hiddenCombination, setHiddenCombination] = useState([]);
  const colours = [
    "#d11141",
    "#00b159",
    "#00aedb",
    "#f37735",
    "#ffc425",
    "#d696bb",
  ];

  //Generate Secret Combination
  const generateRandomArray = () => {
    const randomArray = [];
    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * 6);
      randomArray.push(colours[randomNumber]);
    }
    setHiddenCombination(randomArray);
  };

  //Conditional Rendering
  let gameStart = <button onClick={generateRandomArray}>Start Game</button>;
  if (hiddenCombination.length > 0) {
    gameStart = <p>Game Started!</p>;
  }

  console.log(hiddenCombination);
  return (
    <>
      {gameStart}
      <SecretCombo hiddenCombination={hiddenCombination} />
    </>
  );
}

export default App;
