import "../style/searchRepos.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getRating from "../functions/rating.js";
import kConverter from "../functions/convertToK.js";
import { FaRegEye } from "react-icons/fa";

function SearchRepos() {
  const [reposInfo, setReposInfo] = useState([]);
  const [repoName, setRepoName] = useState("");

  const navigate = useNavigate();

  const handleButton = async () => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${repoName}&per_page=6`
    );
    const data = await response.json();
    console.log(data.items);

    setReposInfo([...data.items]);
  };
  return (
    <div className="SearchRepos">
      <h1>Github repos finder</h1>
      <input
        className="searchInput"
        placeholder="search the repos"
        type="text"
        value={repoName}
        onChange={(e) => {
          setRepoName(e.target.value);
        }}
      />
      <button className="btnSearch" type="submit" onClick={handleButton}>
        search
      </button>
      <div className="repos">
        {reposInfo.map((item) => {
          return (
            <div
              className="card"
              onClick={() => {
                navigate(`/userinfo`, {
                  state: item,
                });
              }}
              key={item.id}
            >
              <img
                className="avatar"
                src={item.owner.avatar_url}
                alt={item.owner.type}
                width="50px"
                height="50px"
              />
              <h2>{item.name}</h2>
              <p className="language">{item.language}</p>
              <p className="description">{item.description}</p>
              {/* <p>{item.name}</p> */}
              {/* <p>{item.stargazers_count}</p> */}
              {/* <p>{item.watchers_count}</p> */}
              <div className="statistics">
                <p className="views">
                  <FaRegEye /> {kConverter(item.watchers_count)} views
                </p>
                <p className="rating">{getRating(item.stargazers_count)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchRepos;
