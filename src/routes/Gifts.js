import React, { useEffect } from "react";

function Gifts(props) {
  useEffect(() => {
    console.log("gifts", props);
    props.funcNav(false);
  }, []);
  return <div>Gifts</div>;
}

export default Gifts;
