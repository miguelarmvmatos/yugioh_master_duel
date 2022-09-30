import React, { useEffect } from "react";

function Pass(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("pass", props);
  return <div>Pass</div>;
}

export default Pass;
