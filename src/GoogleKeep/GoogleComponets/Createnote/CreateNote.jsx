import React from "react";
import "./CreateNote.css";
import Button from "@mui/material/Button"; // Correct import path for MUI v5
import AddIcon from "@mui/icons-material/Add"; // Assuming you want to use the add icon
import { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [expand, setExpand] = useState(false);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prevNotes) => {
      return { ...prevNotes, [name]: value };

    }
    );
  
  };
  const addNote = () => {
    props.passNote(note);
     setNote({ title: "", content: "" });
   
 }


  return (
    <div className="create-note" onDoubleClick={() => setExpand(!expand)}>
      <div className="inner_div">
        <div className="createnote">
          <form>
            {expand ? (
              <>
                <input
                  className="input"
                  name="title"
                  onChange={inputEvent}
                  type="text"
                  value={note.title}
                  placeholder="Title"
                />{" "}
                <hr />
              </>
            ) : null}

            <textarea
              name="content"
              className="textarea"
              placeholder="Write a Note...."
              onChange={inputEvent}
              value={note.content}
              onClick={() => setExpand(true)}
            ></textarea>
            {expand ? (
              <Button
                onClick={addNote}
                className="submit-button"
                variant="contained"
                sx={{
                  backgroundColor: "yellow", // Set the background color to white
                  color: "primary.main", // Use the primary color from the theme for text/icon
                  "&:hover": {
                    backgroundColor: "primary.light", // Lighten the button on hover
                  },
                  borderRadius: "50px", // Rounded corners
                  padding: "20px",
                }}
              >
                <AddIcon /> {/* Changed PlusIcon to AddIcon */}
              </Button>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
