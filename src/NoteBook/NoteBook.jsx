    import React, { useState } from "react";
    import './NoteBook.css'


    const NoteBook = () => {
        const [notes, setNotes] = useState([]);
        const [currentNote, setCurrentNote] = useState("");
        const [currentPage, setCurrentPage] = useState("write");
        const [editNote, setEditNote] = useState(null)
        const [editedText, setEditedText] = useState('')
        const handleSaveNote = () => {
            if (currentNote.trim() === "") 
                return;
            const newNote = {
            id: Date.now(),
            text: currentNote,
            date: new Date().toLocaleString(), // Save the current date and time
            };
            setNotes([...notes, newNote]);
            setCurrentNote(""); // Clear the input field
        };
        
        const handleDeleteNote = (id) => {
            setNotes(notes.filter((note) => note.id !== id));
        };
        
    return (
        <div className="NOteAPP">
        <h1>Notepad</h1>
        <div className="tabs">
            <button
            className={currentPage === "write" ? "active" : ""}
            onClick={() => setCurrentPage("write")}
            >
            Write Note
            </button>
            <button
            className={currentPage === "saved" ? "active" : ""}
            onClick={() => setCurrentPage("saved")}
            >
            Saved Notes
            </button>
        </div>
        {currentPage === "write" ? (
            <div className="write-page">
            <textarea
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                placeholder="Write your note here..."
            />
            <button onClick={handleSaveNote}>Save Note</button>
            </div>
        ) : (
            <div className="saved-page">
            {notes.length === 0 ? (
                <p>No notes saved yet.</p>
            ) : (
                <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                    <div className="note-text">{note.text}</div>
                    <div className="note-date">{note.date}</div>
                    <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </li>
                ))}
                </ul>
            )}
            </div>
        )}
        </div>
    )
    }

    export default NoteBook