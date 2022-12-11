const defaultState = {
    deystvo: false
}

const THIS_TRUE = "THIS_TRUE"
const THIS_FALSE = "THIS_FALSE"
export const trueReducer = (state = defaultState, action) => {
    switch (action.type) {
        case THIS_TRUE:
            return {...state, deystvo: state.cash == action.payload}
        case THIS_FALSE:
            return {...state, deystvo: state.cash != action.payload}
            
        default:
            return state
    }
}

export const thisTrueAction = (payload) => ({type: THIS_TRUE, payload})