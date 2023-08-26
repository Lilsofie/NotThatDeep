import { useState } from "react";

var names = ['Annie','Ark','Josephine','Kate']

function NameOptions(props){
  let allnames = []; 
  const [question_hidden,set_question_hidden] = useState(false);
  const [option_hidden,set_option_hidden] = useState(true);
  const [select_hidden,set_select_hidden] = useState(false);
  for(let i = 0;i<names.length;i++){
    allnames = [...allnames,
      <div hidden = {option_hidden} id = {i} >
      <input  name ='name' id = {names[i]} type = 'radio'/>
      <label htmlFor = {names[i]}>{names[i]}</label>
      </div>
    ]
  }
 
 return <div hidden = {question_hidden}>
  <p>Your question of the day is : </p>
  <button hidden = {select_hidden} onClick={()=>{
    set_option_hidden(false);
    set_select_hidden(true);
    }}> Select </button>
  <br/>
  <div hidden = {option_hidden}>{allnames}</div>
  <br/>
  <button onClick = {()=>{
    set_question_hidden(true)
  }}>Confirm</button>
 </div>
}
export default NameOptions
 