import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export const ResultBox = ({
  element,
  index,
  submittedLines,
  hiddenCombination,
}) => {
  //state of the number of correct answers
  const [samePosition, setSamePosition] = useState(0);
  const [sameColour, setSameColour] = useState(0);

  let combo = submittedLines[index];
  console.log("the result array is " + combo);
  useEffect(() => {
    if (combo.length !== hiddenCombination.length) {
      throw new Error("Arrays must be of the same size");
    }

    let countAll = 0; // To count elements appearing in both arrays regardless of index
    let countSameIndex = 0; // To count elements appearing in the same index in both arrays
    const countMapArray1 = new Map();
    const countMapArray2 = new Map();

    for (let i = 0; i < combo.length; i++) {
      if (combo[i] === hiddenCombination[i]) {
        countSameIndex++;
      }
      countMapArray1.set(combo[i], (countMapArray1.get(combo[i]) || 0) + 1);
      countMapArray2.set(
        hiddenCombination[i],
        (countMapArray2.get(hiddenCombination[i]) || 0) + 1
      );
    }

    countMapArray1.forEach((count, element) => {
      if (countMapArray2.has(element)) {
        countAll += Math.min(count, countMapArray2.get(element));
      }
    });

    setSameColour(countAll - countSameIndex);
    setSamePosition(countSameIndex);
  }, [combo, hiddenCombination]);

  console.log(samePosition + " elements are in the correct position");
  console.log(sameColour + " elements are in the wrong position");

  return (
    <>
      <div className="square" style={{ backgroundColor: element[0] }}></div>
      <div className="square" style={{ backgroundColor: element[1] }}></div>
      <div className="square" style={{ backgroundColor: element[2] }}></div>
      <div className="square" style={{ backgroundColor: element[3] }}></div>
      <div className="grid-container-results">
        <div className="grid-item-results">{samePosition}</div>
        <div className="grid-item-results">{sameColour}</div>
        <div className="grid-item-results">1</div>
        <div className="grid-item-results">1</div>
      </div>
    </>
  );
};
