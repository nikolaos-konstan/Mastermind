/* eslint-disable no-case-declarations */

import { Box } from "./Box";

/* eslint-disable react/prop-types */
export const TryLine = ({ colours }) => {
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
  const handleColourChange = (currentColour) => {
    console.log(currentColour);
  };

  return (
    <div className="try-line">
      <div
        className="square"
        //style={{ backgroundColor: currentItem }}
        //onClick={() => dispatch({ type: "next" })}
      >
        1
      </div>
      <Box colours={colours} handleColourChange={handleColourChange} />
      <Box colours={colours} handleColourChange={handleColourChange} />
      <Box colours={colours} handleColourChange={handleColourChange} />
    </div>
  );
};
