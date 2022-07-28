import { useState } from "react";
import "./Global.css";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const currentTime = new Date().toLocaleTimeString();

  const addNote = (note) => {
    const newNote = {
      id: Math.random(),
      note: note,
      time: currentTime,
    };

    setList([...list, newNote]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const deleteNote = (id) => {
    const newList = list.filter((note) => note.id !== id);
    setList(newList);
  };
  
  return (
    <div className="App">
      <Header />

      <div className="toDoContainer">
        <h1>Add some notes here</h1>
        <div className="inputAndSubmit">
          <input type="text" value={input} onChange={handleChange}></input>
          <button className="submit" onClick={() => addNote(input)}>Submit</button>
        </div>
      </div>

      <div className="notesContainer">
          {list.map((note) => {
            return <Note key={note.id} note={note} deleteNote={deleteNote} />;
          })}
      </div>
    </div>
  );
}

export default App;
