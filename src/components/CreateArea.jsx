import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name: inputName, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [inputName]: value
      };
    });
  }

  function handleClick(event){
    props.onCreate(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();//default behaviour in forms is to refresh when a button is pressed
  }
  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
