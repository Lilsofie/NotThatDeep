import { useState } from "react"
import "./result.css"

function Bar(prop) {
    let width = prop.width;
    return <div style={{
        color: '#001a33',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10px',
        fontFamily:'Impact'
    }}>
        <div className='name' style={{ width: '120px' }}> {prop.name} </div>
        <div className='bar' style={{ backgroundColor: '#F7B95C', width: width }}></div>
        <div className='space' style={{ backgroundColor: '#33658A', width: (300 - width) }}></div>
        &nbsp;&nbsp;
        <div className='votes'>{prop.votes} votes</div>
        <div className="percentage" style={{}}>({Math.round(prop.percntage)}%)</div>
    </div>
}

function Result(props) {
    let bars = [];
    let winner = "";
    for (let i = 0; i < props.userdata.length; i++) {
        bars = [...bars, <Bar name={props.userdata[i][0]} width={(props.userdata[i][1].vote_percentage) * 3} votes={props.userdata[i][1].vote_count} percntage={props.userdata[i][1].vote_percentage} />]
        {
            props.userdata[i][1].rank === 1 ?
                winner = props.userdata[i][0] : <></>
        }
    }

    return <div style={{
       
        width: '100vw',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundRepeat:"repeat-y"
    }}>
        <div style={{
            backgroundColor: 'rgba(255,255,255,0.4)',
            width: '80vw',
            height: '200vh',
        
        }}>
            {
                props.phase === 0 ? props.setPageFunc(0) : <></>
            }
            <div style={{
                marginTop: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0px',
            }}>
                <div style={{

                    marginTop: '100px',
                }}>

                    <div style={
                        {
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            animation: `rotate 24s linear infinite`,

                        }
                    }>
                        <div style={
                            {
                                position: 'absolute',
                                width: '200px',
                                height: '200px',
                                backgroundColor: '#f6ae2d',
                                rotate: '45deg'
                            }
                        }></div>
                        <div style={
                            {
                                position: 'absolute',
                                width: '200px',
                                height: '200px',
                                backgroundColor: '#f6ae2d',
                                rotate: '0deg',

                            }
                        }></div>

                    </div>
                    <div style={{
                        zIndex: '30000',
                        width: '300px',
                        height: '300px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            zIndex: '300100',
                            fontSize: '16px',
                            color: '#ffffff',
                        }}>And the winner is...</div>
                        <div style={{
                            color: '#ffffff',
                            zIndex: '301000',
                            fontSize: '64px'
                        }}>{winner}!</div>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
            }}>
                {bars}
            </div>
        </div>
    </div>
}
export default Result