import { useState } from "react"
import "./result.css"

function Bar(prop){  
    let width = prop.width;
    console.log(width)
    return <div>
       <div className = 'name'> {prop.name} </div>  
       <div className = 'bar'style = {{width:width}}></div> 
       <div className = 'space' style = {{width:(300-width)}}></div> 
       <div className = 'votes'>{prop.votes} votes</div> 
        <div className = "percentage">({prop.percntage}%)</div>
        </div>
}

function Result(props){
    let bars = [];
    let winner = "";
    console.log(props.userdata)
    for(let i = 0 ;i<props.userdata.length;i++){
        bars = [...bars,<Bar name = {props.userdata[i][0]} width = {(props.userdata[i][1].vote_percentage)*3} votes = {props.userdata[i][1].vote_count} percntage = {props.userdata[i][1].vote_percentage}/>]
        {
            props.userdata[i][1].rank === 1 ?
            winner = props.userdata[i][0]:<></>
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