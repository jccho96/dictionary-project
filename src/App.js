import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1> What word do you want to look up? </h1>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by yeyeong and
          <a
            href="https://github.com/jccho96/dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github{" "}
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
