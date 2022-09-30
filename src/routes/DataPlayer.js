import React, { useEffect } from "react";

function DataPlayer(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);

  console.log("DataPlayer", props);
  return <div>DataPlayer</div>;
}

export default DataPlayer;
