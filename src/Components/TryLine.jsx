import { useReducer } from "react";

/* eslint-disable react/prop-types */
export const TryLine = ({ colours }) => {
  const array = colours;
  const initialState = {
    items: array,
    currentIndex: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "next":
        const newIndex = (state.currentIndex + 1) % state.items.length;
        return { ...state, currentIndex: newIndex };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const currentItem = state.items[state.currentIndex];
  return (
    <div className="try-line">
      <div
        className="square"
        style={{ backgroundColor: currentItem }}
        onClick={() => dispatch({ type: "next" })}
      >
        1
      </div>
      <div className="square">1</div>
      <div className="square">1</div>
      <div className="square">1</div>
    </div>
  );
};
