import { useState } from "react";
import { getUser } from "../apiCalls";
import { getQuestion } from "../apiCalls";


async function gameloop(){
  setList(Object.keys(await getUser()));
  setQs((await getQuestion()).qs);
  setTimeout(gameloop,1000);
}

var setList = () => {}
gameloop();
var setQs = () =>{}



function NameOptions(props){
  let allnames = []; 
  const [selectedname,setselectedname] = useState("")
  const [nameList,setNameList] = useState([])
  const [qotd,setqotd] = useState("");
  setList = setNameList
  props.setUserdataFunc(nameList);
  setQs = setqotd
  for(let i = 0;i<nameList.length;i++){
    {nameList[i] !== props.newName ?
    allnames = [...allnames,
      <div id = {i} >
      <input name ='name' id = {nameList[i]} type = 'radio' 
        onClick={()=>{
          setselectedname(nameList[i])
        }}/>
      <label htmlFor = {nameList[i]}>{nameList[i]}</label>
      </div> ]:<></>}
  }
  
 return <div>
  <p>Your question of the day is : </p>
  <div>{qotd}</div>
  <div>{allnames}</div>
  <br/>
  {selectedname !== "" ?
    <button onClick = {()=>{
     {props.phase === 0 ?
      props.setPageFunc(2): props.setPageFunc(3)}
    }}>Confirm</button>
    :<></>}
 </div>
}
export default NameOptions
 