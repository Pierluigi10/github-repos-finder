import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchRepos() {
  const [reposInfo, setReposInfo] = useState([]);
  // const [searchRepos, setSearchRepos] = useState("");

  const [repoName, setRepoName] = useState("");
  // const [repositories, setRepositories] = useState([]);

  const navigate = useNavigate();

  // const handleButton = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.github.com/users/${searchRepos}/repos`
  //     );
  //     const data = await response.json();
  //     setReposInfo([...data]);
  //     console.log([...data]);
  //   } catch (err) {
  //     alert("no repos found, try again");
  //     setSearchRepos("");
  //   }
  // };

  //
  //   const handleButton = async () => {
  //     const response = await fetch(`https://api.github.com/users/${username}/repos`);
  //     const data = await response.json();
  //     // console.log(data);

  //     // const languages= await fetch(data.repos_url);
  //     // const repos = await repositories.json();
  //     // console.log(repos);

  //     setReposInfo([...data])

  // };

  const handleButton = async () => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${repoName}&per_page=6`
    );
    const data = await response.json();
    console.log(data.items);

    // const languages= await fetch(data.repos_url);
    // const repos = await repositories.json();
    // console.log(repos);

    setReposInfo([...data.items]);
  };
  return (
    <div className="App">
      {/* <input
        type="text"
        value={searchRepos}
        onChange={(e) => {
          setSearchRepos(e.target.value);
        }}
      /> */}

      <input
        className="prompt"
        placeholder="search your github.."
        type="text"
        value={repoName}
        onChange={(e) => {
          setRepoName(e.target.value);
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
            <h2
              onClick={() => {
                navigate(`/userinfo`, {
                  state: item,
                });
              }}
            >
              {item.name}
            </h2>
            <p>{item.description}</p>
            <p>{item.language}</p>
            <p>{item.name}</p>
            <p>{item.stargazers_count}</p>
            <p>{item.watchers_count}</p>
            {item.stargazers_count > 0 && item.watchers_count < 150 && (
              <p> 0.5 STELLA</p>
            )}
            {item.stargazers_count >= 150 && item.watchers_count < 300 && (
              <p> 1 STELLA</p>
            )}
            {item.stargazers_count >= 300 && item.watchers_count < 450 && (
              <p> 1.5 STELLA</p>
            )}
            {item.stargazers_count >= 450 && item.watchers_count < 600 && (
              <p> 2 STELLA</p>
            )}
            {item.stargazers_count >= 600 && item.watchers_count < 750 && (
              <p> 2.5 STELLA</p>
            )}
            {item.stargazers_count >= 750 && item.watchers_count < 1000 && (
              <p> 3.0 STELLA</p>
            )}
            {item.stargazers_count >= 1000 && item.watchers_count < 1500 && (
              <p> 3.5 STELLA</p>
            )}
            {item.stargazers_count >= 2000 && item.watchers_count < 2500 && (
              <p> 4 STELLA</p>
            )}
            {item.stargazers_count >= 2500 && item.watchers_count < 3000 && (
              <p> 4 STELLA</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SearchRepos;