/* eslint-disable no-case-declarations */

import { Box } from "./Box";

/* eslint-disable react/prop-types */
export const TryLine = ({ colours, submitCombo }) => {
  // const array = colours;
  // const initialState = {
  //   items: array,
  //   currentIndex: 0,
  // };

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "next":
  //       const newIndex = (state.currentIndex + 1) % state.items.length;
  //       return { ...state, currentIndex: newIndex };
  //     default:
  //       return state;
  //   }
  // };
  let submittedCombination = ["no", "no", "no", "no"];

  const handleColourChange = (currentColour, index) => {
    submittedCombination[index] = currentColour;
  };

  const handleSubmit = (submittedCombination) => {
    submitCombo(submittedCombination);
    console.log(submittedCombination);
  };

  return (
    <div className="try-line">
      {[...Array(4)].map((ele, index) => (
        <Box
          key={index}
          position={index}
          colours={colours}
          handleColourChange={handleColourChange}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
