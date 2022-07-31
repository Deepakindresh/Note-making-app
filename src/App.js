
import NoteList from './components/NoteList';
import {useState, useEffect} from 'react';
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [searchText, setSearchText] = useState('');

  const [notes, setNotes] = useState([
    {
			id: 1,
			text: 'Hiii, Welcome to Deepak\'s Note App',
			date: '15/04/2021',
		},
		{
			id: 2,
			text: 'You can add notes by typing on the pink sticky note and saving it...',
			date: '21/04/2021',
		},
		{
			id: 3,
			text: 'You can also delete notes by clicking on the delete button...',
			date: '28/04/2021',
		},
		{
			id: 4,
			text: 'You could also search for your notes by typing in the search bar...',
			date: '30/04/2021',
		},
  ]);
  
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('react-notes-data-storage'));
    if (storedNotes) {
      console.log("notes loaded from local storage", storedNotes);
      setNotes(storedNotes);
    }
  }, [])
  // storing the notes in local storage
  useEffect(() => {
    if(notes.length > 0) {
    localStorage.setItem('react-notes-data-storage', JSON.stringify(notes));
  }
  }, [notes]);


// Uses prop drilling rather than context api since required by the company

  const addNote = (text) => {
    setNotes([...notes, {
      text,
      date: new Date().toLocaleDateString(),
      id: notes.length + 1
    }]);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
  }

  return (
    <div>
      <div className="container">
        <Header/>
        <Search handleSearchNote={setSearchText}/>
        <NoteList notes={notes.filter((note) => 
              note.text.toLowerCase().includes(searchText.toLowerCase())
        )} handleAddNote={addNote} handleDeleteNote = {deleteNote}/>
      </div>
    </div>
  );
}

export default App;
