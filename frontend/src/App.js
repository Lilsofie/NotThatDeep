import { useState}from 'react'
import './App.css';
import Start from './Pages/Start';
import NameOptions from './Pages/Question';
import Result from './Pages/Result';
import Waiting from './Pages/Waiting';
import { getUser } from "./apiCalls";
import { getQuestion } from "./apiCalls";
import { getPhase } from "./apiCalls";

async function gameloop(){
  setList(Object.keys(await getUser()));
  setQs((await getQuestion()).qs);
  settingPhase(await getPhase());
  setTimeout(gameloop,1000);
}


var setList = () => {}
var setQs = () =>{}
var settingPhase = () => {};

gameloop();

function App() {
  const [PageNumber, setPageNumber] = useState(0);
  const [phase,setPhase] = useState(0);
  const [username,setusername] = useState("");
  const [userdata,setuserdata] = useState({});
  const [question,setquestion] = useState("");
  setList = setuserdata;
  setQs = setquestion;
  settingPhase = setPhase;

  // console.log('asd');

  return <div>
        {
          PageNumber === 0 ? 
          <Start setPageFunc = {setPageNumber} setNameFunc = {setusername} /> : <></>
        }
        {
          PageNumber === 1 ?
          <NameOptions setPageFunc = {setPageNumber} newName = {username}  phase = {phase} userdata = {userdata} qotd = {question}/> : <></>
        }
        {
          PageNumber === 2?
          <Waiting setPageFunc = {setPageNumber} newName = {username} setPhaseFunc = {setPhase}/> : <></>
        }
        {
          PageNumber === 3?
          <Result setPageFunc = {setPageNumber} setPhaseFunc = {setPhase} phase = {phase} userdata = {userdata}/> : <></>
        }
 
      
    </div>
}

export default App;
