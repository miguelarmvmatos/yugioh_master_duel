import React, { useEffect } from "react";

import data from "../api/yugioh_api.json";

function Deck() {
  useEffect(() => {
    console.log(data);
  });
  return <div>Deck</div>;
}

export default Deck;
