import React, { useState } from "react";

function SearchRepos() {
  const [reposInfo, setReposInfo] = useState([]);
  const [searchRepos, setSearchRepos] = useState("");

  const handleButton = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${searchRepos}/repos`
      );
      const data = await response.json();
      setReposInfo([...data]);
      console.log([...data]);
    } catch (err) {
      alert("no repos found, try again");
      setSearchRepos("");
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchRepos}
        onChange={(e) => {
          setSearchRepos(e.target.value);
        }}
      />
      <button type="submit" onClick={handleButton}>
        search
      </button>

      {reposInfo.map((item) => {
        return (
          <div key={item.id}>
            <img
              src={item.owner.avatar_url}
              alt={item.owner.type}
              width="50px"
              height="50px"
            />
            <h2>{item.name}</h2>
            <p>{item.language}</p>
            {/* <p>{item.languages_url}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default SearchRepos;
