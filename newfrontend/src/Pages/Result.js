import { useState } from "react"

var names = ['Annie','Ark','Josephine','Kate']
var votes = [43,40,35,30]
var percntage = [90,80,70,60]

function Bar(props){   
    return <div>
       <div style={{width:85,display:'inline-block'}}> {props.name} </div>  
       <div style = {{marginLeft:5,display:'inline-block',height:10,width:props.width,backgroundColor:'mediumaquamarine'}}></div> 
       <div style = {{display:'inline-block',height:10,width:(300-props.width)}}></div> 
       <div style={{marginLeft: 15,display:"inline-block"}}>{props.votes} votes</div> 
        <div style={{marginLeft: 10,display:"inline-block"}}>({props.percntage}%)</div>
        </div>
}

function Result(props){
   //const[width,setwidth] = useState(100)
    let bars = [];
    for(let i = 0 ;i<names.length;i++){
        bars = [...bars,<Bar name = {names[i]} width = {percntage[i]*3} votes = {votes[i]} percntage = {percntage[i]}/>]
    }
    
    return <div>
        {
            props.Phase === 0 ? props.setPageFunc(0):<></>
        }
        <h1>Result</h1>
        <h2>Winner</h2>
        {bars}
    </div>
}
export default Result