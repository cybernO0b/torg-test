import React from "react";
import counter from "../../store/counter";
import {observer} from "mobx-react-lite"

import "./index.css"


const Counter = observer(() => {
    

    return (
        <div className="timeleft">
            
            <div className="buttons">
                <button onClick={() => counter.handleStart()}>start</button>
                <button onClick={() => counter.handleStop()}>stop</button>
                <button >reset</button>
            </div>
        </div>
    )
})

export default Counter;