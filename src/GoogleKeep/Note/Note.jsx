import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Note.css'
const Note = (props) => {
    const DeleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
      <div className='main_note'>
        <div className="note">
                <h4>{props.title }</h4>

          <hr />
                <p>{ props.content }</p>
          <button className='btn-delete'onClick={DeleteNote}>
            <DeleteOutlinedIcon />
          </button>
        </div>
      </div>
    );
}

export default Note;
