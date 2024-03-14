import React, { useState } from "react";
import "../App.css";
import Header from "./GoogleComponets/Header";
import Footer from "./GoogleComponets/Footer";
import CreateNote from "./GoogleComponets/Createnote/CreateNote";
import Note from "./Note/Note.jsx";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const AddnewNote = (note) => {
    setAddItem((prevData) => {
      return [note, ...prevData];
    });
    // console.log(note);
  };
  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((currentdata,indx) => {
      return indx !== id;
      
    }))
  
  }
  return (
    <>
      <Header />
      <CreateNote passNote={AddnewNote} />
      {addItem.map((val, index) => {
        return (
          <Note key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem ={onDelete}
          />
      
        )
      })
      }
      <Footer />
    </>
  );
};

export default App;
