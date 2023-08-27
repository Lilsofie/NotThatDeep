import { getPhase } from "../apiCalls";
import { useState } from "react";

function Waiting(props) {
    {
        props.phase === 1 ?
        props.setPageFunc(3) : <></>
    }

    return <div style={
        {
            display: 'flex',
            width: '100vw',
            justifyContent: "center",
            fontSize: '36px',
            fontFamily: 'Impact',
            color: '#ffffff',
            marginTop: '150px'
        }
    }>
        <div>Counting Votes . . .</div>
    </div>
}

export default Waiting