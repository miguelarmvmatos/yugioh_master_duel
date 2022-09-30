import React, { useEffect } from "react";

function Online(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("online", props);
  return <div>Online</div>;
}

export default Online;
