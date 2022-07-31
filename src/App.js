
import NoteList from './components/NoteList';
import {useState, useEffect} from 'react';

function App() {

  const [notes, setNotes] = useState([{
    text: 'Hello Latracal Solutions!!!',
    date: '29/07/2022',
    id: 1
  },
  {
    text: 'Welcome to the note making app',
    date: '30/07/2022',
    id: 2
  },

  {
    text: 'Hope you have a wonderful day',
    date: '01/08/2022',
    id: 3
  },
  
  
  ]);

// Uses prop drilling rather than context api since required by the company

  const addNote = (text) => {
    setNotes([...notes, {
      text,
      date: new Date().toLocaleDateString(),
      id: notes.length + 1
    }]);
  }

  return (
    <div className="Container">
      <NoteList notes={notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
