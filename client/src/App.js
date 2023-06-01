import { useEffect, useState } from "react";
import "./App.css";
import { accessToken, logout } from "./Spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(accessToken);
    console.log(token);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a
            className="App-link"
            href="http://localhost:5000/login"
            target="_self"
            rel="noopener noreferrer"
          >
            Login to Spotify
          </a>
        ) : (
          <>
            <h1>Logged In!</h1>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
