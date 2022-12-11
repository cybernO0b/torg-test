import React from "react";
import TimeButtons from "../TimeButtons";
import Timeleft from "../Timeleft";
import "./index.css"



const Main = () => {
    

    return (
        <>
        <div className="main">
            <Timeleft/>
            <div className="container">
                
                <div className="box1">
                
                </div>
                <div className="box2">

                </div>
                <div className="box2">
               
                </div>
                <div className="box2">

                </div>
                <div className="box2">

                </div>
                <div className="box2">

                </div>

                
            </div>
            <TimeButtons/>
        </div>

        </>
    )
}

export default Main;