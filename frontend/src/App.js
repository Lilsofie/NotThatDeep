import { useState}from 'react'
import './App.css';
import Start from './Pages/Start';
import NameOptions from './Pages/Question';
import Result from './Pages/Result';
import Waiting from './Pages/Waiting';
import { getUser } from "./apiCalls";
import { getQuestion } from "./apiCalls";
import { getPhase } from "./apiCalls";
import { ReactComponent as Boat } from './sailboat-svgrepo-com.svg';

async function gameloop(){
  const userdata = await getUser();
  setList(Object.entries(userdata));
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


  return <div className='bg'>
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
        <Water/>
        <div style = {{
          position: 'fixed',
          backgroundColor: '#053752',
          width: '100vw',
          height: '100vh',
          zIndex: '-120',
          top: '0px',
        }}>asdasd</div>
        
 
      
    </div>
}


function Water() {
  function getWaterStyle(offset, color) {

      return {
          position: 'fixed',
          width: '1800px',
          height: '1800px',
          left: `${-500 + offset * 10}px`,
          top: `${80 - offset * 5}%`,
          borderRadius: '45%',
          animation: `rotate ${30 - offset * 3}s linear infinite ${offset}s`,
          backgroundColor: color,
      }
  }

  return <div>

      <div style={
          {
              position: 'fixed',
              width: '100%',
              height: '100%',
              left: '50%',
              top: '50vh',
              transform: 'translate(-50%,-50%) scaleX(5) scaleY(0.5)',
              borderRadius: '10px',
              zIndex: '-1',
              // center all the children
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
          }
      }>
          <div style={getWaterStyle(3, 'rgba(100,190,255,1)')}></div>
          <div style={getWaterStyle(1, 'rgba(100,205,255,1)')}></div>

          <Boat style={
              {
                  top: '-12%',
                  position: 'fixed',
                  width: '1000px',
                  height: '1000px',
                  animation: 'bobUpAndDownAndSwayLeftAndRight 5s linear infinite',
                  animationTimingFunction: 'ease-in',
                  fill: '#db831f', // set the fill color
              }
          }
          />
          <div style={getWaterStyle(0, 'rgba(110,215,255,1)')}></div>

      </div>
  </div>

}

export default App;
