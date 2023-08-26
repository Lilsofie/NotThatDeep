import { useState } from "react";
import { updateVote } from "../apiCalls";
import { hasVote } from "../apiCalls";

async function voted(new_name){
  votes(await hasVote(new_name))
}

var votes = () =>{};
var new_name = " "
voted(new_name);

function NameOptions(props){
  let allnames = []; 
  const [selectedname,setselectedname] = useState("");
  const [votestatus,setvotestutus] = useState(0);
  votes = setvotestutus;
  new_name = props.newName

  if(votestatus === 0){
    for(let i = 0;i< props.userdata.length;i++){
    {
      props.userdata[i][0] !== new_name ?
      allnames = [...allnames,
      <div id = {i} >
      <input name ='name' id = {props.userdata[i][0]} type = 'radio' 
        onClick={()=>{
          setselectedname(props.userdata[i][0])
        }}/>
      <label htmlFor = {props.userdata[i][0]}>{props.userdata[i][0]}</label>
      </div> ]:<></>}
    }
    return <div>
              <p>Your question of the day is : </p>
              <div>{props.qotd}</div>
              <div>{allnames}</div>
              <br/>
              {selectedname !== "" ?
                <button onClick = {()=>{
                  updateVote(new_name,selectedname);
                  hasVote(new_name);
                  console.log(new_name);
                  console.log(selectedname);
                  {props.phase === 0 ?
                    props.setPageFunc(2): props.setPageFunc(3)}  
               }}>Confirm</button>:<></>}
            </div>
    }
    else{
      return <div>
        {props.phase === 0 ?
        props.setPageFunc(2): props.setPageFunc(3)}  
      </div>
    }

  
  
 
}
export default NameOptions
 