import React from "react";
import { useState, useEffect } from "react";
import timebuttons from "../../store/timebuttons"
import timebuttons1 from "../../store/timebuttons1"
import { getPadTime } from "../getPadTime";
import './index.css';
import {observer} from "mobx-react-lite"




const Timeleft = observer(() => {
    const [timeleft, setTimeleft] = useState(timebuttons1.btnbet1)
    // const [isCounting, setIsCounting] = useState(false)
    
    
    const minutes = getPadTime(Math.floor(timeleft / 60))
    const seconds = getPadTime(timeleft - minutes * 60)
/////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const interval = setInterval(() => {
            timebuttons.btnbet &&  setTimeleft((timeleft) => timeleft >=1 ? timeleft - 1 : 0)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, []) 
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
            
            {/* <div className="buttons">
                <button onClick={handleStart}>start</button>
                <button onClick={handleStop}>stop</button>
                <button onClick={handleReset}>reset</button>
            </div> */}
        </div>
        </>
    )
}
)
export default Timeleft;