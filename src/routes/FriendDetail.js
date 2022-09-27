import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "../styles/frienddetail.css";

import friendsData from "../api/friends.json";

function Friend() {
  let { id } = useParams();

  const [friend, setFriend] = useState();

  useEffect(() => {
    let friend = friendsData.data.find((e) => e.id == id);
    setFriend(friend);
  }, []);
  console.log("friendDetail", friend);

  return (
    <div className="friendDetail">
      <div className="art">{friend.art}</div>
      <div className="friendInfo"></div>
      <div className="friendTitles"></div>
      <div className="friendRankMate"></div>
    </div>
  );
}

export default Friend;
