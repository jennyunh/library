import './CardArea.css';
import { useState, useEffect } from 'react';
import Form from '../Form/Form.js';
import Card from '../Card/Card';

const CardArea = props => {

const [formOpen, setFormOpen] = useState(false);


  //library is an array of book objects
  const [library, setLibrary] = useState(props.library);

  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [read, setRead] = useState(false);
 

   //BOOK CONSTRUCTOR
   function Book(a, t, r, d) {
    this.author = a;
    this.title = t;
    this.read = r;
    this.description = d;
  }


//ADD BOOK TO LIBRARY
function addBookToLibrary() {
    //if the user read the book, return yes. Otherwise, nope.
  let readString = read ? "yes" : "nope";

  //add the new Book objects to the library array
  setLibrary(prevVal => [...prevVal, new Book(author, title, readString, description)])

}



const addBookHandler = () => {
    setFormOpen(true);
}

const toggleForm = () => {
    setFormOpen(!formOpen);
}


const submitHandler = (e) => {
    e.preventDefault();
    addBookToLibrary();
    setAuthor("");
    setTitle("");
    setRead("");
    setDescription("");
    toggleForm();
    props.saveData(library);
  };

  useEffect(() => {
   props.saveData(library)
      }, [library, props]) 
    

  const closeHandler = () => {
    toggleForm();
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const readHandler = () => {
    setRead(!read);
  };


return (

<div id="cardArea">

{/* ADD BOOK BUTTON */}
<span onClick={addBookHandler} id="addBook">+ Add Book</span>


{/* If form is open then render the form. */}
{(formOpen) && (<Form  
formOpen={formOpen} 
readHandler={readHandler}
authorHandler={authorHandler}
titleHandler={titleHandler}
descriptionHandler={descriptionHandler}
closeHandler={closeHandler}
submitHandler={submitHandler}
title={title}
author={author}
read={read}
description={description}/>)}

<div id="cards">
{/* If library exists and the length of the data is more than 0,
map the formData array so each element in the array returns a Card component */}
{((library) && (library.length > 0)) && (library.map((ele, ind) =>
<Card 
title={ele.title} 
author={ele.author} 
read={ele.read} 
description={ele.description} 
key={ind}/>))}
</div>

</div>

)


}

export default CardArea;