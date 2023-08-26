import {useRef, useState}from 'react'
import './App.css';



var username = ""

function Start() {
  const InputNameRef = useRef();
  const [hidden_status,set_hidden_status] = useState(false);

  return <div id = "Start" hidden = {hidden_status}>
    <input ref = {InputNameRef} type = 'text' placeholder='type in your name' onChange={(event)=>{
      InputNameRef.current.target = " ";
      username = event.target.value;
    }} />
    <button onClick={()=>{
      console.log(username)
      set_hidden_status(true)
    }} > GO!</button>
  </div>;
}

export default Start;