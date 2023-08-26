import { useState}from 'react'
import './App.css';
import Start from './Pages/Start';
import NameOptions from './Pages/Question';
import Result from './Pages/Result';


function App() {
  const [PageNumber, setPageNumber] = useState(1);
  const [Phase,setPhase] = useState(0);
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
