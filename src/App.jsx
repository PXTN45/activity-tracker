import { useState } from "react";
import "./App.css";
import Workouts from "./pages/Workouts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h2>My Workout</h2> */}
      <Workouts />
    </div>
  );
}

export default App;
