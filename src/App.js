import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.github.com/users/Pierluigi10/repos`
      );
      const data = await response.json();
      setResult([...data]);
      console.log([...data]);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Hello!</h1>
      {result.map((value) => {
        return (
          <div key={value.id}>
            {/* <img src={value.owner.avatar_url} alt={value.owner.type} width="50px" height="50px"/> */}
            <h2>{value.name}</h2>
            <p>{value.language}</p>
            <p>{value.languages_url}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
