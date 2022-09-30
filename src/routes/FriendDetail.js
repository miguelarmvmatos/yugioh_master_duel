import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/frienddetail.css";

import friendsData from "../api/friends.json";

function Friend(props) {
  let { id } = useParams();
  const data = friendsData.data;

  const [friend, setFriend] = useState();

  useEffect(() => {
    let frienddetail = data.find((e) => e.id == id);
    setFriend(frienddetail);
    props.funcNav(false);
  }, [friend]);
  if (!friend) return;

  return (
    <div>
      <div className="friendWrapper">
        <div className="friendDetail">
          <div className="art">
            <img
              src={require(`../resources/art/${friend.art}.jpg`)}
              alt={friend.art}
            />
          </div>
          <div className="friendInfo">
            <div className="friendIconData">
              <img
                src={require(`../resources/frames/${friend.iconFrame}.png`)}
                alt={friend.icon}
                className="friendFrame"
              />
              <img
                src={require(`../resources/icons/${friend.icon}.png`)}
                alt={friend.icon}
                className="friendIcon"
              />
            </div>
            <p>{friend.nickname}</p>
          </div>
          <div className="friendNumbers">
            <p>{`LV${friend.level}`}</p>
            <p>{`ID: ${friend.gameId}`}</p>
          </div>
          <div className="friendFriends">
            <p>{`${friend.followers} Followers`}</p>
            <p>{`${friend.following} Following`}</p>
          </div>
          <div className="friendTitles">
            <div className="title">{friend.title1 ? friend.title1 : "-"}</div>
            <div className="title">{friend.title2 ? friend.title2 : "-"}</div>
            <div className="title">{friend.title3 ? friend.title3 : "-"}</div>
            <div className="title">{friend.title4 ? friend.title4 : "-"}</div>
          </div>
          <div className="friendRankMate">
            <div className="rank">
              <img
                src={require(`../resources/ranks/rank_${friend.rank}.png`)}
                alt={friend.rank + friend.rankLevel}
              />
              <p className={friend.rank}>{friend.rankLevel}</p>
            </div>
            <div className="mate">
              <img
                src={require(`../resources/mates/${friend.mate}.png`)}
                alt={friend.mate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend;
