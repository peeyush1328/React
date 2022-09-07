import "./App.css";
import Classcomponent from "./Componenets/Classcomponents";
import Functionalcomponent from "./Componenets/Functioncomponents";
import { useState } from "react";

function App() {
  const [name, setname] = useState("Piyush");
  return (
    <div className="App">
      <h1>Class Components</h1>
      <Classcomponent />
      <br />
      <h1>Fucntion Components</h1>
      <Functionalcomponent name={name} setname={setname} />
    </div>
  );
}

export default App;
