import "./App.css";
import logo from "./dictionary-logo.png";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <p>
            {" "}
            This project was coded by{" "}
            <a
              href="https://github.com/zoeblighton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoe Blighton
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://app.netlify.com/projects/enchanting-gingersnap-0e85cd/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
