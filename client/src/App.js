import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { accessToken, logout } from "./Spotify";
import { GlobalStyle } from "./styles";
import styled from "styled-components/macro";

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(accessToken);
    console.log(token);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />

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
            <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>

            <Router>
              <ScrollToTop />

              <Switch>
                <Route path="/top-artists">
                  <TopArtists />
                </Route>
                <Route path="/top-tracks">
                  <TopTracks />
                </Route>
                <Route path="/playlists/:id">
                  <Playlist />
                </Route>
                <Route path="/playlists">
                  <Playlists />
                </Route>
                <Route path="/">
                  <Profile />
                </Route>
              </Switch>
            </Router>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
