import {useRef, useState}from 'react'
import { postUser } from '../apiCalls';
import './start.css'



function Start(props) {
  const InputNameRef = useRef();
  const[username,setusername] = useState("")
  return <div id = "start" className=''>
    <div className='box'>
      <h1 className='title'> Not <br/>&nbsp; &nbsp; &nbsp; That <br/>Deep</h1>
      <br/>
      <div className='group'>
        <input className = "center" id = "inputbar" ref = {InputNameRef} type = 'text' placeholder='type in your name' onChange={(event)=>{
      InputNameRef.current.target = "";
      setusername(event.target.value);
    }} />&nbsp;&nbsp;
     {username !== "" ? <button className = 'go'onClick={()=>{
      props.setPageFunc(1);
      props.setNameFunc(username);
      postUser(username);
    }}> GO!</button>:<></>}
      </div>  
   </div>
    
  </div>;
}

export default Start;