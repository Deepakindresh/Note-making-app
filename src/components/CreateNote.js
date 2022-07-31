import React, {useState} from 'react'

function CreateNote({handleAddNote}) {

    const [noteText, setNoteText] = useState('');  

    const handleChange = (e) => {
        setNoteText(e.target.value);
    }

    const handleSaveClick = () => {
        handleAddNote(noteText);
    }

  return (
    <div className='note new'>
        <textarea rows='8' cols='10' placeholder='Type to add a note...' onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>200 Remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default CreateNote;