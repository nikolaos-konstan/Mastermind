import { useState } from "react";
import "./App.css";
import { SecretCombo } from "./Components/SecretCombo";
import { TryLine } from "./Components/TryLine";
import { ResultBox } from "./Components/ResultBox";

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
  // store the submitted lines
  const [submittedLines, setSubmittedLines] = useState([]);
  console.log("the submitted lines are " + submittedLines);

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
  //submit a combination and compare
  let countAll = 0; // To count elements appearing in both arrays regardless of index
  let countSameIndex = 0; // To count elements appearing in the same index in both arrays
  const submitCombo = (combo) => {
    setSubmittedLines((prevArray) => [...prevArray, combo]);
    console.log("the submitted combo is " + combo);
    if (combo.length !== hiddenCombination.length) {
      throw new Error("Arrays must be of the same size");
    }

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
      {
        <div className="grid-container">
          {submittedLines.map((element, index) => (
            <ResultBox
              key={index}
              element={element}
              countAll={countAll}
              countSameIndex={countSameIndex}
              className="grid-item"
            >
              {element}
            </ResultBox>
          ))}
        </div>
      }
      <TryLine colours={colours} submitCombo={submitCombo} />
    </>
  );
}

export default App;
