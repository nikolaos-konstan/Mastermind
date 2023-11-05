import { useState } from "react";
import "./App.css";
import { SecretCombo } from "./Components/SecretCombo";
import { TryLine } from "./Components/TryLine";
import { ResultBox } from "./Components/ResultBox";
import { ResultModal } from "./Components/ResultModal";

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
    setSubmittedLines([]);
  };

  //Conditional Rendering
  let gameStart = <button onClick={generateRandomArray}>Start Game</button>;
  if (hiddenCombination.length > 0) {
    gameStart = <button onClick={generateRandomArray}>Restart Game</button>;
  }
  //submit a combination and compare

  const submitCombo = (combo) => {
    setSubmittedLines((prevArray) => [...prevArray, combo]);
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
              index={index}
              submittedLines={submittedLines}
              hiddenCombination={hiddenCombination}
              className="grid-item"
            >
              {element}
            </ResultBox>
          ))}
        </div>
      }
      {hiddenCombination.length > 0 && (
        <TryLine
          colours={colours}
          submitCombo={submitCombo}
          hiddenCombination={hiddenCombination}
        />
      )}
    </>
  );
}

export default App;
