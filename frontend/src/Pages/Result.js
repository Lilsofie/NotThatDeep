function Result(props){
    return <div>
    <h1>Result</h1>
    <h2>Winner</h2>
    <button onClick = {()=>{
        props.setPageFunc(0)
        }}>EXIT</button>
    </div>
}
export default Result