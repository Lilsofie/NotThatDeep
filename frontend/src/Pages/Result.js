import { useState } from "react"

function Bar(props){   
    return <div>
       <div style = {{width:85,display:'inline-block'}}> {props.name} </div>  
       <div style = {{marginLeft:5,display:'inline-block',height:10,width:props.width,backgroundColor:'mediumaquamarine'}}></div> 
       <div style = {{display:'inline-block',height:10,width:(300-props.width)}}></div> 
       <div style={{marginLeft: 15,display:"inline-block"}}>{props.votes} votes</div> 
        <div style={{marginLeft: 10,display:"inline-block"}}>({props.percntage}%)</div>
        </div>
}

function Result(props){
    //const[width,setwidth] = useState(100)
    let bars = [];
    let winner = "";
    for(let i = 0 ;i<props.userdata.length;i++){
        bars = [...bars,<Bar name = {props.userdata[i]} width = {props.userdata[i].vote_percentage*3} votes = {props.userdata[i].vote_count} percntage = {props.userdata[i].vote_percentage}/>]
        {
            props.userdata[i].rank === 1 ?
            winner = props.userdata[i]:<></>
        }
    }
    
    return <div>
        {
            props.phase === 0 ? props.setPageFunc(0):<></>
        }
        <h1>Result</h1>
        <h2>Winner is {winner}
        </h2>
        {bars}
    </div>
}
export default Result