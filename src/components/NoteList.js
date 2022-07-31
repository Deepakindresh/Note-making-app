import React from 'react'
import CreateNote from './CreateNote'
import Note from './Note'
function NoteList({ notes, handleAddNote }) {
  return (
    <div className='note-list'>
        {notes.map(note => (
            <Note id={note.id} text = {note.text} date={note.date}/>
            ))}
        <CreateNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoteList