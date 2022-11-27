import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import { Projects } from '../Components/Projects';
import { Tasks } from '../Components/Tasks';
import {Header} from "../Header";

export function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/tasks'} element={<Tasks/>}/>
                <Route path={'/projects'} element={<Projects/>}/>
            </Routes>
        </div>
    );
}



