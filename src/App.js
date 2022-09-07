import "./App.css";
import Classcomponent from "./pages/Classcomponents";
import Functionalcomponent from "./pages/Functioncomponents";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [name, setname] = useState("Piyush");
  return (
    <Routes>
      <Route path="/" element={<Classcomponent />} />
      <Route
        path="/function"
        element={<Functionalcomponent name={name} setname={setname} />}
      />
    </Routes>
  );
}

export default App;
//  <div className="App">
//       <h1>Class Components</h1>
//       <Classcomponent />
//       <br />
//       <h1>Fucntion Components</h1>
//       <Functionalcomponent name={name} setname={setname} />
//     </div>
