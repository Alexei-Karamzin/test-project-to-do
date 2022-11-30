import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import { Projects } from '../Components/Projects';
import { TasksPage } from '../Components/TasksPage';
import {Header} from "../Header";
import {Container} from "@mui/material";

export function App() {

    return (
        <div>
            <Container maxWidth="lg">
                <Header/>

                <Routes>
                    <Route path={'/'} element={<div>start page</div>}/>
                    <Route path={'/tasks'} element={<TasksPage/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                </Routes>
            </Container>
        </div>
    );
}



