import { useState}from 'react'
import './App.css';
import Start from './Pages/Start';
import NameOptions from './Pages/Question';
import Result from './Pages/Result';
import Waiting from './Pages/Waiting';



function App() {
  const [PageNumber, setPageNumber] = useState(0);
  const [Phase,setPhase] = useState(0);
  const [username,setusername] = useState("");
  const [userdata,setuserdata] = userstate({});
  return <div>
        {
          PageNumber === 0 ? 
          <Start setPageFunc = {setPageNumber} setNameFunc = {setusername} /> : <></>
        }
        {
          PageNumber === 1 ?
          <NameOptions setPageFunc = {setPageNumber} newName = {username}  phase = {Phase} setUserdataFunc = {setuserdata}/> : <></>
        }
        {
          PageNumber === 2?
          <Waiting setPageFunc = {setPageNumber} newName = {username} setPhaseFunc = {setPhase}/> : <></>
        }
        {
          PageNumber === 3?
          <Result setPageFunc = {setPageNumber} setPhaseFunc = {setPhase} phase = {Phase} userdata = {userdata}/> : <></>
        }
 
      
    </div>
}

export default App;
