import { useState}from 'react'
import './App.css';
import Start from './Pages/Start';
import NameOptions from './Pages/Question';
import Result from './Pages/Result';
import axios from 'axios'



getUser();
export async function getUser(){
    console.log('asdas');
    const response = await fetch("https://localhost:5000/get-user-data");
    console.log(response);
    const data = await response.json();
    console.log(data)

    return data;
}
function App() {
  const [PageNumber, setPageNumber] = useState(0);
  const [Phase,setPhase] = useState(1);
  return <div>
        {
          PageNumber === 0 ? 
          <Start setPageFunc = {setPageNumber}/> : <></>
        }
        {
          PageNumber === 1 ?
          <NameOptions setPageFunc = {setPageNumber}/> : <></>
        }
        {
          PageNumber === 2 ?
          <Result setPageFunc = {setPageNumber} setPhaseFunc = {setPhase} Phase = {Phase}/> : <></>
        }
       
        
      
    </div>
}

export default App;
