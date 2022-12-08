import React, {useState} from 'react';
import {Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import { UserCtx } from './components/UserContext';




const App = () => {
    
    const [user, setUser] = useState(localStorage.getItem("user") || "");

    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id)
    }
    const [token, setToken] = useState(localStorage.getItem("token") || "")

    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data)
    }
    return (
        <>
    <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler}}>
        <Header/>
       <Routes>
           <Route path="/" element={<Main/>}/>
           <Route path="/signin" element={<Signin/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/profile" element={<Profile/>}/>
       </Routes>
        <Footer/>
    </UserCtx.Provider>
        </>
    )
}

export default App;
