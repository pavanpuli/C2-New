import "./App.css";
import { Rentals } from "./components/Rentals/Rentals";
import { AddHouse } from "./components/AddHouse/AddHouse";
import {useState} from 'react'

function App() {
  const [show,setShow]=useState(true)

  return (
    <div className="App">
      <button onClick={()=>setShow(show? false:true)}
      className="toggleForm">
        {show? "Add_House": "Show"}
      </button>
        {show ?<Rentals/>:<AddHouse/> }
      <br />
    </div>
  );
}

export default App;
