import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/userInfo.css";
import { BsPeople } from "react-icons/bs";

function UserInfo() {
  const navigate = useNavigate();
  const location = useLocation();

  const infos = location.state;
  

  const [userBio, setUserBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.github.com/users/${infos.owner.login}`
      );
      const data = await response.json();
      setUserBio(data.bio);

      const fetchFollowers = await fetch(
        `https://api.github.com/users/${infos.owner.login}/followers`
      );
      const followersList = await fetchFollowers.json();
      // console.log(followersList.length)
      setFollowers(followersList.length);

      const fetchFollowing = await fetch(
        `https://api.github.com/users/${infos.owner.login}/following`
      );
      const followingList = await fetchFollowing.json();
      // console.log(followersList.length)
      setFollowing(followingList.length);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(infos);
  return (
    <div className="UserInfo">
      <h2>Githuber Details</h2>

      <div className="info">
        <img
          className="avatar"
          src={infos.owner.avatar_url}
          alt={infos.owner.type}
          width="50px"
          height="50px"
        />
        <a href={infos.owner.html_url} target="_blank" rel="noreferrer">
          {infos.owner.login}
        </a>
        <div className="followInfo">
          {(followers > 0 || following > 0) && <BsPeople />}
          {followers > 0 && (
            <p>
              <b>{followers}</b> followers
            </p>
          )}
          {following > 0 && (
            <p>
              <b>{following}</b> following
            </p>
          )}
        </div>
        <p className="bio">{userBio}</p>
      </div>
      <button className="btnToHome" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}

export default UserInfo;
