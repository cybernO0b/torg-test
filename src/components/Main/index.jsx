import React from "react";
import TimeButtons from "../TimeButtons";
import Timeleft from "../Timeleft";
import testbuyers from "../../store/testbuyers";
import {observer} from "mobx-react-lite"
import "./index.css"
import TestBuyers from "../TestBuyers/TestBuyers";


const Main = observer(() => {
    

    return (
        <>
        <main>
            <Timeleft/>
            <div className="container">
                
                <div className="box1">
                
                </div>
                <div className="box2">

                </div>
                <div className="box2">
                <TestBuyers/>
                </div>
                <div className="box2">

                </div>
                <div className="box2">

                </div>
                <div className="box2">

                </div>

                
            </div>
            <TimeButtons/>
        </main>

        </>
    )
}
)
export default Main;