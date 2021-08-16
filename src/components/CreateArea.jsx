import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = React.useState(false);
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

  function expand(){
    setExpanded(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/> : null}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
