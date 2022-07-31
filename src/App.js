
import NoteList from './components/NoteList';
import {useState, useEffect} from 'react';
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

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

  // storing the notes in local storage
  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, [])

// Uses prop drilling rather than context api since required by the company

  const addNote = (text) => {
    setNotes([...notes, {
      text,
      date: new Date().toLocaleDateString(),
      id: notes.length + 1
    }]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div className="container">
      <Header/>
      <Search handleSearchNote={setSearchText}/>
      <NoteList notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)} handleAddNote={addNote} handleDeleteNode = {deleteNote}/>
    </div>
  );
}

export default App;
