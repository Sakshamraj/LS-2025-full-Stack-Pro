import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Timer from './components/Timer.jsx';
import Home from './pages/Home.jsx';
import WatchLater from './pages/WatchLater.jsx';





function App() {
  let [WL, setWL] = useState([]);
  let [L, setL] = useState([]);
  let [tag, setTag] = useState(""); // should be a string, not an array

  return (
    <Router>
      <div className="App">
        <Navbar count={WL.length} logo={logo} tag={tag} setTag={setTag} />
        <header className="App-header">
          <Routes>
              <Route
                path="/watch-later"
                element={
                  <WatchLater
                    valueWL={WL}
                    onChangeWL={setWL}
                    valueL={L}
                    onChangeL={setL}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <Home
                    valueWL={WL}
                    onChangeWL={setWL}
                    valueL={L}
                    onChangeL={setL}
                    tag={tag}
                    setTag={setTag}
                  />
                }
              />
          </Routes>
        </header>
        <Timer />
      </div>
    </Router>
  );
}

// The App component serves as the main entry point for the application

export default App;
