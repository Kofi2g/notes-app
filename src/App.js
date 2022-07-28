import { useState } from "react";
import "./Global.css";
import Header from "./Header";


function App() {
  const [input, setInput] = useState("");

  
  return (
    <div className="App">
      <Header />

      <div className="toDoContainer">
        <h1>Add some notes here</h1>
        <div className="inputAndSubmit">
          <input></input>
          <button>Submit</button>
        </div>
      </div>

      <div className="notesContainer">
        <div className="notes">
          <p>Temp text Temp text Temp text Temp text</p>
          <p>date</p>
          <button>&times;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
