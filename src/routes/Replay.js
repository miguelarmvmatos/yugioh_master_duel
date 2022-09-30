import React, { useEffect } from "react";

function Replay(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("replay", props);
  return <div>Replay</div>;
}

export default Replay;
