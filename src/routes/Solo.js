import React, { useEffect } from "react";

function Solo(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("solo", props);
  return <div>Solo</div>;
}

export default Solo;
