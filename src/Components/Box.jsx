import { useState } from "react";

export const Box = ({ colours }) => {
  const [colourPick, setColourPick] = useState(colours[0]);
  console.log(colourPick);

  return (
    <div className="square" style={{ backgroundColor: "#d11141" }}>
      1
    </div>
  );
};
