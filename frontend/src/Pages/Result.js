import { useState } from "react"

function Bar(prop){  
    let width = prop.width;
    console.log(width)
    return <div>
        shows
       <div style = {{width:85,display:'inline-block'}}> {prop.name} </div>  
       <div style = {{marginLeft:5,display:'inline-block',height:10,width:width,backgroundColor:'mediumaquamarine'}}></div> 
       <div style = {{display:'inline-block',height:10,width:(300-width)}}></div> 
       <div style={{marginLeft: 15,display:"inline-block"}}>{prop.votes} votes</div> 
        <div style={{marginLeft: 10,display:"inline-block"}}>({prop.percntage}%)</div>
        </div>
}

function Result(props){
    //const[width,setwidth] = useState(100)
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