/* eslint-disable react/prop-types */

import "../App.css";
import { Trybox } from "./Trybox";

export const TryLine = ({ colours }) => {
  return (
    <div className="try-line">
      <Trybox colours={colours} />
      <Trybox colours={colours} />
      <Trybox colours={colours} />
      <Trybox colours={colours} />
    </div>
  );
};
