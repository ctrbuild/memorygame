import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Login from "./Components/login";
import EndGame from "./EndGame";
import Home from "./Components/Home";

function App() {
    const [state, setState] = useState(0)
    return (
        <div className="ui container">
            <div className="App">

    </div>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/EndGame" element={<EndGame />}></Route>
                        </Routes>
                </BrowserRouter>
            </div>

        </div>
    );
}

export default App;