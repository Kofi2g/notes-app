import "./Global.css";

const Note = ({ note, deleteNote }) => {
  return (
    <div className="notes">
      <p>{note.note}</p>
      <p className="time">{note.time}</p>
      <div className="button">
        <button className="delete" onClick={() => deleteNote(note.id)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Note;
