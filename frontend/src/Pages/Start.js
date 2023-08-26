import {useRef, useState}from 'react'

var username = ""

function Start(props) {
  const InputNameRef = useRef();
  const [start_hidden_status,set_start_hidden_status] = useState(false);
  return <div id = "Start" hidden = {start_hidden_status}>
    <input ref = {InputNameRef} type = 'text' placeholder='type in your name' onChange={(event)=>{
      InputNameRef.current.target = " ";
      username = event.target.value;
    }} />
    <button onClick={()=>{
      console.log(username)
      set_start_hidden_status(true)
    }} > GO!</button>
  </div>;
}

export default Start;