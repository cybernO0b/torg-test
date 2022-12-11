import React from "react";
import { useEffect} from "react";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { addCashAction } from "../../store/cashReducer";

const Timeleft = () => {

    
    const getPadTime = (time) => time.toString().padStart(2, "0");
   
        const dispatch = useDispatch()
        const cash = useSelector(state => state.cash.cash)
        const flag = useSelector(state => state.flag.flag)
        
        

        const addCash = (cash) => {
            dispatch(addCashAction(cash))
        }
        
    
    
    const minutes = getPadTime(Math.floor(cash / 60))
    const seconds = getPadTime(cash - minutes * 60)

useEffect(() => {
    const interval = setInterval(() => {
        flag && addCash((cash >= 1 ? cash -1 : 0))
    }, 1000) 
    
    return () => {
        clearInterval(interval)
    }
}, [flag, cash]) 
    
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
            
           
        </div>
        </>
    )
}

export default Timeleft;