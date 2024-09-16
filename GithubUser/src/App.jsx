import { useState } from "react";
import axios from "axios";

import "./App.css";
import Computer from "./Components/newpage";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(response.data);
    } catch (error) {
      setError("User not found");
      setUser(null);
    }
  };

  return (
    <div>
      <Computer />

      <h1 className="text-red-600">GitHub User Finder</h1>
      <div>
        <hr />
        <br></br>
        <a href="path/to/your/file.txt" download>
          <button type="button"> Download</button>
        </a>
        <input
          className="border-spacing-10 mt-5 p-3 h-12 w-96"
          type="text"
          placeholder="Enter your GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="text-white mr-10" onClick={handleSearch}>
          Search
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt="Avatar" />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
