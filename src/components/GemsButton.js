import React from "react";
import { Link } from "react-router-dom";

import "../styles/gemsbutton.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function GemsButton() {
  return (
    <Link to="gems">
      <div className="gemsButton">
        <div className="gem"></div>
        <p>686</p>
        <ArrowForwardIosIcon />
      </div>
    </Link>
  );
}

export default GemsButton;
