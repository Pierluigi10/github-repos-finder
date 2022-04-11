import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchRepos from "./components/SearchRepos";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <h1>Github repos finder</h1>
      <Routes>
        <Route path="/" element={<SearchRepos />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
