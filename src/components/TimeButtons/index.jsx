import React from "react";
import timebuttons from "../../store/timebuttons";
import timebuttons1 from "../../store/timebuttons1";
import {observer} from "mobx-react-lite"

import "./index.css"


const TimeButtons = observer(() => {
    

    return (
        <div className="timeleft">
            
            <div className="buttons">
                <button onClick={() => timebuttons.handleStart()}>Запуск</button>
                <button onClick={() => timebuttons.handleStop()}>Остановка</button>
                <button onClick={() => timebuttons1.handleReset()}>Ставка</button>
            </div>
        </div>
    )
})

export default TimeButtons;