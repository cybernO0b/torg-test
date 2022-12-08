import {makeAutoObservable} from "mobx";



class TimeButtons1 {
    
    btnbet1 = 2 * 60
    constructor() {
        makeAutoObservable(this)
    }

    handleReset() {
        
        this.btnbet1 = 2 * 60
        
        
    }
    
}

export default new TimeButtons1()