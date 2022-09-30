import React, { useEffect } from "react";

function Shop(props) {
  useEffect(() => {
    props.funcNav(false);
  }, []);
  console.log("shop", props);
  return <div>Shop</div>;
}

export default Shop;
