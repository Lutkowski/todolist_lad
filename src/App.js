import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import './styles/App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="*" element={<Navigate to="/not-found"/>}/>
                <Route path="/not-found" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;