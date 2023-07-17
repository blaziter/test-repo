import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const eventRegex = new RegExp(/\d+/g);
    const eventIds = "(123,41239,432ww12š4,453)".match(eventRegex)!.map(Number);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < eventIds.length) {
        const item = eventIds[i];
        console.log(`intervalFour ${item}`);
        if (isNaN(item)) {
          console.log(`error intervalFour ${item}`);
          clearInterval(intervalId);
        }
        i++;
      }
    }, 60000);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
