import React from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "../styles/goback.css";

function GoBack(props) {
  let history = useNavigate();
  const handleClick = () => {
    props.funcNav(true);
    history(-1);
  };
  return (
    <div className="goBack">
      <button onClick={handleClick}>
        <ArrowBackIosIcon />
      </button>
    </div>
  );
}

export default GoBack;
