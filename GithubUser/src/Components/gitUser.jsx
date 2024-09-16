import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function GitHub() {
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
    <div className="app">
      <h1>GitHub User find </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={useState}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-card">
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

export default GitHub;
