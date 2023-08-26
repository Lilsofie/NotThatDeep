import {useRef, useState}from 'react'
import { postUser } from '../apiCalls';


function Start(props) {
  const InputNameRef = useRef();
  const[username,setusername] = useState("")
  return <div id = "Start">
    <input ref = {InputNameRef} type = 'text' placeholder='type in your name' onChange={(event)=>{
      InputNameRef.current.target = "";
      setusername(event.target.value);
    }} />
    {username !== "" ? <button onClick={()=>{
      props.setPageFunc(1);
      postUser(username);
    }}> GO!</button>:<></>}
    
  </div>;
}

export default Start;