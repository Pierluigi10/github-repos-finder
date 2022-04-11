import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UserInfo() {
  const navigate = useNavigate();
  const location = useLocation();

  const infos = location.state;

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
        <p>{console.log(infos.description)}</p>
        <p>{console.log(infos.owner.followers_url)}</p>
      </div>
    </div>
  );
}

export default UserInfo;
