import CardArea from './Components/CardArea/CardArea.js';
import './App.css';
import {useState} from 'react';
import { IoMdSave } from "react-icons/io";

/* initialize the library with LOCAL STORAGE if it exists. Otherwise, blank array*/
let isLocal = window.localStorage["library"];

const setlibrary = () => {
  if (isLocal) 
{let theLibrary = JSON.parse(localStorage["library"]);
return theLibrary
}

else {
  return [];
}
}

let initial = setlibrary();


//START OF COMPONENT
function App() {

  
const [library, setLibrary] = useState(initial);
console.log(library)

  const saveData = (data) => {
setLibrary(data);
  }

  const saveHandler = () => {
    localStorage.clear();
    if (library.length > 0) {
      localStorage.setItem("library", JSON.stringify(library));
      console.log(JSON.stringify(library))
  }
  }




  return (
    <div className="App">
      <div id="titleSection">
      <h1 id="title">Virtual Library</h1>
<h1 id="save" onClick={saveHandler}><IoMdSave/></h1>
      </div>
      <CardArea library={library} saveData={saveData}/>


      



    </div>
  );
}

export default App;
