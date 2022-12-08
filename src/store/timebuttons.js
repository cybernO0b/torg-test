import {makeAutoObservable} from "mobx";



class TimeButtons {
    btnbet1 = 2 * 60
    btnbet = false
    constructor() {
        makeAutoObservable(this)
    }


    handleStart() {
        this.btnbet = true
        
    }

    handleStop() {
        this.btnbet = false
     
    }
    handleReset() {
        this.btnbet = false;
        this.btnbet1 = 2 * 60
        
        
    }
    
}

export default new TimeButtons()