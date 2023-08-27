import { useState } from "react";
import { updateVote } from "../apiCalls";

var new_name = " "

function NameOptions(props){
  let allnames = []; 
  const [selectedname,setselectedname] = useState("");
  let votestatus = 0;
  new_name = props.newName

  for(let i = 0;i< props.userdata.length;i++){
    votestatus = props.userdata[i][1].has_voted  
    if(props.userdata[i][0] === new_name){
      if(votestatus === 1) {
        return <div>
                {props.phase === 0 ?
                props.setPageFunc(2): props.setPageFunc(3)}  
              </div> 
      }}
    else{
      allnames = [...allnames,
      <div id = {i} >
      <input name ='name' id = {props.userdata[i][0]} type = 'radio' 
        onClick={()=>{
          setselectedname(props.userdata[i][0])
        }}/>
      <label htmlFor = {props.userdata[i][0]}>{props.userdata[i][0]}</label>
      </div> ]
    }
  }
  return <div>
        <p>Your question of the day is : </p>
        <div>{props.qotd}</div>
        <div>{allnames}</div>
        <br/>
        {selectedname !== "" ?
          <button onClick = {()=>{
            updateVote(new_name,selectedname);
            {props.phase === 0 ?
              props.setPageFunc(2): props.setPageFunc(3)}  
          }}>Confirm</button>:<></>}
      </div>
  }
    
      

  
  
 

export default NameOptions
 