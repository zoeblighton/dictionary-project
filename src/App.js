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
        <footer className="text-center">Coded by Zoe Blighton</footer>
      </div>
    </div>
  );
}

export default App;
