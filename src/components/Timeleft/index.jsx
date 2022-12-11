import React from "react";
import { useEffect, useState } from "react";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { addCashAction } from "../../store/cashReducer";
    
const Timeleft = () => {

    
    const getPadTime = (time) => time.toString().padStart(2, "0");
   
        const dispatch = useDispatch()
        const cash = useSelector(state => state.cash.cash)
        const deystvo = useSelector(state => state.deystvo.deystvo)
        


        const addCash = (cash) => {
            
            dispatch(addCashAction(cash))
        }

        const getCash = () => {
            dispatch({type: "GET_CASH", payload: 60 * 2})
        }
        
            
   
    // const [tleft, setTimeleft] = useState(60 * 2)
    // const [isCounting, setIsCounting] = useState(false)
    
    
    const minutes = getPadTime(Math.floor(cash / 60))
    const seconds = getPadTime(cash - minutes * 60)
/////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
    const interval = setInterval(() => {
        addCash((cash >= 1 ? cash -1 : 0))
    }, 1000) 
    return () => {
        clearInterval(interval)
    }
}, [cash]) 
///////////////////////////////////////////////////////////////////////////////////чтобы счетчик не уходил в минус
    console.log(cash)
    // const handleStart = () => {
    //     setIsCounting(true)
    // }
    // const handleStop = () => {
    //     setIsCounting(false)
    // }
    // const handleReset = () => {
    //      setIsCounting(false)
    //      setTimeleft(60 * 2)}

    
    
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
            <button onClick={() => getCash()}>getCash</button>
                
                <button onClick={() => addCash()}>addCash</button>
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