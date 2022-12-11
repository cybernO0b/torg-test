import { createStore, combineReducers } from "redux"
import { cashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
import { trueReducer } from "./trueReducer"

const rootReducer = combineReducers(
    {
        cash: cashReducer,
        customers: customerReducer,
        flag: trueReducer,
    }
)

export const store = createStore(rootReducer)