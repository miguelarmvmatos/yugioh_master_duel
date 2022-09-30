import React, { useEffect } from "react";

function Missions(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("missions", props);
  return <div>Missions</div>;
}

export default Missions;
