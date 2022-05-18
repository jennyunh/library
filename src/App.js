import CardArea from './Components/CardArea/CardArea.js';
import './App.css';
import {useState} from 'react';
import { IoMdSave } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";


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

  
const [saveDisplay, setSaveDisplay] = useState(false);
const [clearDisplay, setClearDisplay] = useState(false);

const [library, setLibrary] = useState(initial);

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

const displaySave = () => {
setSaveDisplay(!saveDisplay)
}

const displayClear = () => {
  setClearDisplay(!clearDisplay)
  }

const clear = () => {
  localStorage.clear();
  setLibrary([]);
  console.log(window.localStorage);
}


  return (
    <div className="App">
      <div id="titleSection">
      <h1 id="title">Virtual Book List</h1>
      <h1 id="clear" onMouseLeave={displayClear} onMouseEnter={displayClear} onClick={clear}>
        <VscDebugRestart/>
        {(clearDisplay) && (<span id="saveDisplay">Clear List</span>)}
  
        </h1>
<h1 id="save" onClick={saveHandler} onMouseLeave={displaySave} onMouseEnter={displaySave}>
  <IoMdSave/>
  {(saveDisplay) && (<span id="saveDisplay">Save to Local Storage</span>)}
  </h1>
      </div>
      <CardArea library={library} saveData={saveData}/>


      



    </div>
  );
}

export default App;
