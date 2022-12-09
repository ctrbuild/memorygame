import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Login from "./Components/login";
import EndGame from "./EndGame";
import Home from "./Components/Home";
import Admin from "./Components/Admin";

function App() {
    const [state, setState] = useState(0)
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/EndGame" element={<EndGame />}></Route>
                    <Route path="/Admin" element={<Admin />}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
