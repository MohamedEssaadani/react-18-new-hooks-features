import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UseIdForm from "./components/UseIdForm";
import UseTransitionCounter from "./components/useTransitionCounter";
import AutomaticBatching from "./components/AutomaticBatching";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UseIdForm />
      <h3>Counter: </h3>
      <UseTransitionCounter />
      <h4>Test Automatic batching</h4>
      <AutomaticBatching />
    </div>
  );
}

export default App;
