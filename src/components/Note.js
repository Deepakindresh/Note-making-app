import React from 'react'


function Note({id, text, date}) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <div className='delete-icon'>X</div>
        </div>
    </div>
  )
}

export default Note