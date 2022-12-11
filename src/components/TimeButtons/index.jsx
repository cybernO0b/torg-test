import React from "react";
import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction } from "../../store/customerReducer";
import { addCashAction } from "../../store/cashReducer";


const TimeButtons = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const deystvo = useSelector(state => state.deystvo.deystvo)
    const customers = useSelector(state => state.customers.customers)


    const thisReducer = () => {
        dispatch({})
    }

     const addCash = () => {
            
            dispatch({type: "ADD_CASH", payload: 60 * 2})
        }

    const getCash = () => {
        dispatch({type: "GET_CASH", payload: 60 * 2})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }


    const removeCustomer = (customer) => {
        
        dispatch(removeCustomer(customer.id))
    }

    const getPadTime = (time) => time.toString().padStart(2, "0");
    const minutes = getPadTime(Math.floor(cash / 60))
    const seconds = getPadTime(cash - minutes * 60)
    return (
        <div className="timeleft">
            <div>{cash} {minutes}:{seconds}</div>
            <div className="buttons">
                <button onClick={() => getCash()}>getCash</button>
                
                <button onClick={() => addCash()}>addCash</button>

                <button onClick={() => addCustomer(prompt())}>Добавитьь</button>

                <button onClick={() => getCash()}>Удалить</button>
                
            </div>
            {customers.length > 0 ?
            

            <div>
                {customers.map(customer =>
                    <div onClick={() => removeCustomer(customer)}>{customer.name}</div>)}
            </div>

            :
            <div>Клиенты остсутсвуют</div>
                }
        </div>
    )
}

export default TimeButtons;