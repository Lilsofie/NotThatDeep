import { useState } from "react";
import { updateVote } from "../apiCalls";

function NameOptions(props){
  let allnames = []; 
  let newName = props.newName;
  const [selectedname,setselectedname] = useState("")
  
  for(let i = 0;i< props.userdata.length;i++){
    {props.userdata[i][0] !== newName ?
    allnames = [...allnames,
      <div id = {i} >
      <input name ='name' id = {props.userdata[i][0]} type = 'radio' 
        onClick={()=>{
          setselectedname(props.userdata[i][0])
        }}/>
      <label htmlFor = { props.userdata[i][0]}>{ props.userdata[i][0]}</label>
      </div> ]:<></>}
  }
  
 return <div>
  <p>Your question of the day is : </p>
  <div>{props.qotd}</div>
  <div>{allnames}</div>
  <br/>
  {selectedname !== "" ?
    <button onClick = {()=>{
      updateVote(newName,selectedname)
     {props.phase === 0 ?
      props.setPageFunc(2): props.setPageFunc(3)}
      
    }
  }>Confirm</button>
    :<></>}
 </div>
}
export default NameOptions
 