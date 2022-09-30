import React, { useEffect } from "react";

function Gems(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("gems", props);
  return <div>Gems</div>;
}

export default Gems;
