import { getPhase } from "../apiCalls";
import { useState } from "react";

async function gettingPhase(){
    settingPhase(await getPhase());
    await setTimeout(gettingPhase,5000)
}

var settingPhase = () => {};
gettingPhase();

function Waiting(props){
   const[phase,setPhase] = useState(0);
   settingPhase = setPhase;
   console.log(phase)
   {phase === 1 ?
    props.setPageFunc(3): <></>
    }

    return <>Waiting</>
}

export default Waiting