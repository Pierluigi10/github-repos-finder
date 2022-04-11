import React, { useState } from "react";
import "./App.css";

function App() {
  const [reposInfo, setReposInfo] = useState([]);
  const [searchRepos, setSearchRepos] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       `https://api.github.com/users/${searchInput}/repos`
  //     );
  //     const data = await response.json();
  //     setReposInfo([...data]);
  //     // console.log([...data]);
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleButton = async () => {
    const response = await fetch(
      `https://api.github.com/users/${searchRepos}/repos`
    );
    const data = await response.json();
    setReposInfo([...data]);
    console.log([...data]);
  };

  return (
    <div className="App">
      <h1>Hello!</h1>

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
            <p>{item.languages_url}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
