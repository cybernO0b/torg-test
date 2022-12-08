import React from "react";
import { useState, useEffect } from "react";
import Counter from "../TimeButtons"
import counter from "../../store/counter"
import { getPadTime } from "../getPadTime";
import './index.css';




const Timeleft = () => {
    const [timeleft, setTimeleft] = useState(2 * 60)
    const [isCounting, setIsCounting] = useState(false)
    

    const minutes = getPadTime(Math.floor(timeleft / 60))
    const seconds = getPadTime(timeleft - minutes * 60)
/////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const interval = setInterval(() => {
           counter.count &&  setTimeleft((timeleft) => timeleft >=1 ? timeleft - 1 : 0)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [counter.count]) 
///////////////////////////////////////////////////////////////////////////////////чтобы счетчик не уходил в минус

    // const handleStart = () => {
    //     setIsCounting(true)
    // }
    // const handleStop = () => {
    //     setIsCounting(false)
    // }
    // const handleReset = () => {
    //     setIsCounting(false)
    //     setTimeleft(60 * 2)}

    return (
    <>
        <div>
            
        </div>
         <div className="timeleft">
             <div className="timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>
            <Counter/>
            {/* <div className="buttons">
                <button onClick={handleStart}>start</button>
                <button onClick={handleStop}>stop</button>
                <button onClick={handleReset}>reset</button>
            </div> */}
        </div>
        </>
    )
}

export default Timeleft;