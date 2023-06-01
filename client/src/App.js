import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");

    console.log(accessToken);
    console.log(refreshToken);

    if (refreshToken) {
      fetch(`/request_token?refresh_token=${refreshToken}`)
        .then((response) => response.json)
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="http://localhost:5000/login"
          target="_self"
          rel="noopener noreferrer"
        >
          Login to Spotify
        </a>
      </header>
    </div>
  );
}

export default App;
