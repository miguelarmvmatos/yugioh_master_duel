import React, { useEffect } from "react";

function EditPlayer(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("editplayer", props);
  return <div>EditPlayer</div>;
}

export default EditPlayer;
