import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);


  function addNotes(newNote){
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(delIndex){
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== delIndex;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onCreate={addNotes}/>
      {notes.map((aNote, index) => (
        <Note key={index} id={index} title={aNote.title} content={aNote.content} delete={deleteNote}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;