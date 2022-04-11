import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UserInfo() {
  const navigate = useNavigate();
  const location = useLocation();

  const infos = location.state;
  const [userBio, setUserBio] = useState("");
  const [followers, setFollowers] = useState("");

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
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(infos);
  return (
    <div>
      <h2>UserInfo</h2>
      <button onClick={() => navigate("/")}>Home</button>
      <div className="info">
        <img
          src={infos.owner.avatar_url}
          alt={infos.owner.type}
          width="50px"
          height="50px"
        />
        <p>{infos.owner.login}</p>
        <p>{userBio}</p>
        {followers > 0 && <p>Followers: {followers}</p>}

        {/* <p>{console.log(infos.description)}</p>
        <p>{console.log(infos.owner.followers_url)}</p> */}
      </div>
    </div>
  );
}

export default UserInfo;
