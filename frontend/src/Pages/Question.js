import { useState } from "react";
import { updateVote } from "../apiCalls";
import './question.css'

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
      <label >
      <input className="importedName" name ='name' id = {props.userdata[i][0]} type = 'radio' 
        onClick={()=>{
          setselectedname(props.userdata[i][0])
        }}/>
      <span>{props.userdata[i][0]}</span>
      </label> ]
    }
  }
  return <div>
     <div className="position">
        
        <div className="question">{props.qotd}</div>
        </div>
        <div className="option">
        <div>
          <form>
             <div className="names">{allnames}</div>
          </form>
        </div>
        </div>
        <br/>
        {selectedname !== "" ?
          <div className="container">
            <button className = "confirm" onClick = {()=>{
            updateVote(new_name,selectedname);
            {props.phase === 0 ?
              props.setPageFunc(2): props.setPageFunc(3)}  
          }}>Confirm</button>
          </div>:<></>}
      </div>
  }
    
      

  
  
 

export default NameOptions
 