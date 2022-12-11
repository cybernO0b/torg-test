const defaultState = {
    cash: 60*2
}

const ADD_CASH = "ADD_CASH"

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: action.payload}
        case "GET_CASH":
            return {...state, cash: 60*2}
            
        default:
            return state
    }
}

export const addCashAction = (payload) => ({type: ADD_CASH, payload})