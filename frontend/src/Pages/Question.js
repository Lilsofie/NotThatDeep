import { useState } from "react";
import { getUser } from "../apiCalls";



async function updating_names(){
  setList(Object.keys(await getUser()));
  setTimeout(updating_names,1000);
}


var setList = () => {}
updating_names();

function NameOptions(props){
  let allnames = []; 
  const [option_hidden,set_option_hidden] = useState(true);
  const [select_hidden,set_select_hidden] = useState(false);
  const [selectedname,setselectedname] = useState("")
  const [nameList,setNameList] = useState([])
  setList = setNameList
  for(let i = 0;i<nameList.length;i++){
    {nameList[i] !== props.newName ?
    allnames = [...allnames,
      <div hidden = {option_hidden} id = {i} >
      <input name ='name' id = {nameList[i]} type = 'radio' 
        onClick={()=>{
          setselectedname(nameList[i])
        }}/>
      <label htmlFor = {nameList[i]}>{nameList[i]}</label>
      </div> ]:<></>}
  }
 
 return <div>
  <p>Your question of the day is : </p>
  <button hidden = {select_hidden} onClick={()=>{
    set_option_hidden(false);
    set_select_hidden(true);
    }}> Select </button>
  <br/>
  <div hidden = {option_hidden}>{allnames}</div>
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
 