import {makeAutoObservable} from "mobx";



class Counter {
    count = false
    constructor() {
        makeAutoObservable(this)
    }


    handleStart() {
        this.count = true
        console.log('handleStart', this.count)
    }

    handleStop() {
        this.count = false
        console.log('handleStop', this.count)
    }
    
}

export default new Counter()