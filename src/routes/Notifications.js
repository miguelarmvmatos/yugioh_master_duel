import React, { useEffect } from "react";

function Notifications(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("notifications", props);
  return <div>Notifications</div>;
}

export default Notifications;
