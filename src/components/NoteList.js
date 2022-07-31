import React from 'react'
import CreateNote from './CreateNote'
import Note from './Note'
function NoteList({ notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className='notes-list'>
        {notes.map(note => (
            <Note id={note.id} text = {note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
            ))}
        <CreateNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoteList