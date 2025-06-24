import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import VideoCard from './components/VideoCard.jsx';

function App() {
  return (
    <div className="App">
      <Navbar count={1} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <VideoCard />
      </header>
    </div>
  );
}

export default App;
