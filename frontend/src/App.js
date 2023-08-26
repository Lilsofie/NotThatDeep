import { useState}from 'react'
import './App.css';
import Start from './Pages/Start';
import NameOptions from './Pages/Question';
import Result from './Pages/Result';


getUser();

export async function getUser(){
    console.log('asdas');
    const response = await fetch('/get-user-data', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    const data = await response.json();
    console.log('pee');
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
