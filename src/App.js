import "./App.css";
import construction from "../src/images/construction.svg";

function App() {
  return (
    <div className="App h-full">
      <nav class="h-12 bg-blue-400 flex relative">
        <ul class="hidden flex-row justify-evenly w-1/2 absolute items-center right-0 h-full">
          <li>link1</li>
          <li>link1</li>
          <li>link1</li>
        </ul>
      </nav>
      <div className="m-auto px-6">
        <h1 className="m-auto w-fit my-6">🛠 Under Construction 🛠</h1>
        <header className=" flex justify-center items-center">
          <img
            src={construction}
            alt="workers"
            className="md:w-1/2 md:h-1/2 w-full"
          />
        </header>
        <p className="m-auto w-fit my-6 text-center">
          Camo To Code is evolving into something new! 😎
        </p>
      </div>
    </div>
  );
}

export default App;
