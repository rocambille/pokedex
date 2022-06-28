import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <PokemonCard />
      </header>
    </div>
  );
}

export default App;
