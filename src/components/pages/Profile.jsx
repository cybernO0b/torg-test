import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Auth from '../Authorization/index'


export default () => {
    const navigate = useNavigate();
    
    
    const logout = (e) => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
        <>
         <div className='container'>
        <div className='container-cabinet'>
            <h1>Личный кабинет</h1>
            </div>
            <div className='container-cabinet'>
            
            <h1><button className='logout'
            onClick={logout} >Выйти</button></h1>
            </div>
        </div>
        
        
        </>
    )
}