import React, {useEffect, useState} from 'react'

function CreateNote({handleAddNote}) {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;


    const handleSaveClick = () => {
        // remove empty notes
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('');    
        }
    }

  return (
    <div className='note new'>
        <textarea rows='8' cols='10' placeholder='Type to add a note...' onChange={(e) => {
        if(characterLimit - e.target.value.length >= 0) {
                setNoteText(e.target.value);           
        }
    }}></textarea>
        <div className='note-footer'>
            <small>{characterLimit - noteText.length}</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default CreateNote;