import {makeAutoObservable} from "mobx";



class TestBuyers {
    companies = [
        {id:1, name:"Север"},
        {id:2, name:"Юг"},
        {id:3, name:"Запад"},
        {id:4, name:"Восток"}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    betBuyers(company) {
            this.companies.push(company)
    }

    testBuyers(id) {
        this.companies.filter(company => company.id !== id)
    }

    completeBuyers(id) {
        this.companies.map(company => company.id === id ? {...company, completed: !company.completed} : company)
    }


    
}

export default new TestBuyers()