import logo from './tilt.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>two-scoops.vercel.app</code>
        </p>
        <a
          className="App-link"
          href="https://twitter.com/ilostmyipad"
          target="_blank"
          rel="noopener noreferrer"
        >
          @iLostmyipad
        </a>
      </header>
    </div>
  );
}

export default App;
