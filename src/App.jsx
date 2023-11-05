import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

export default function App() {
  return (
    <div className="grid xl:grid-cols-5">
      <div className="xl:col-span-1 relative">
        <Sidebar />
      </div>
      <main className="App-header xl:col-span-4">
        <Home />
        <About />
        {/* <img src={logo} className="App-logo " alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link "
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1 id="ancre1" className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
      </main>
    </div>
  );
}
