import React, { useEffect } from "react";

import data from "../api/yugioh_api.json";

function Deck(props) {
  useEffect(() => {
    console.log(data);
    props.funcNav(false);
  }, []);
  console.log("solo", props);
  return <div>Deck</div>;
}

export default Deck;
