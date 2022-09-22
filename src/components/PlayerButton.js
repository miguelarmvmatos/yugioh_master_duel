import React from "react";
import { Link } from "react-router-dom";

function PlayerButton() {
  return (
    <Link to="player">
      <div>Player Button</div>
    </Link>
  );
}

export default PlayerButton;
