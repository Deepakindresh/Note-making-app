import React from 'react'


function Note({id, text, date, handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <div className='delete-icon' onClick={() => handleDeleteNote(id)}>X</div>
        </div>
    </div>
  )
}

export default Note