import { useState } from "react";
import "./App.css";
import { SecretCombo } from "./Components/SecretCombo";
import { TryLine } from "./Components/TryLine";

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
  //submit a combination
  // const handleSubmit = () => {
  //   console.log("submitted");
  // };

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
    gameStart = <button onClick={generateRandomArray}>Restart Game</button>;
  }

  const submitCombo = (combo) => {
    console.log("the submitted combo is " + combo);
    if (combo.length !== hiddenCombination.length) {
      throw new Error("Arrays must be of the same size");
    }

    let countAll = 0; // To count elements appearing in both arrays regardless of index
    let countSameIndex = 0; // To count elements appearing in the same index in both arrays

    for (let i = 0; i < combo.length; i++) {
      if (hiddenCombination.includes(combo[i])) {
        countAll++;
        if (combo[i] === hiddenCombination[i]) {
          countSameIndex++;
        }
      }
    }

    console.log(countAll - countSameIndex);
    console.log(countSameIndex);
    // return {
    //   countAll,
    //   countSameIndex,
    // };
  };

  return (
    <>
      {gameStart}
      <SecretCombo hiddenCombination={hiddenCombination} />
      <TryLine colours={colours} submitCombo={submitCombo} />
    </>
  );
}

export default App;
