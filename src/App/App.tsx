import React from 'react';
import {Route, Routes} from 'react-router-dom';
import '../App.css';
import {Projects} from '../Components/projects/Projects';
import {TasksPage} from '../Components/tasks/TasksPage';
import {Header} from "../Header";
import {Container} from "@mui/material";

export function App() {

    return (
        <div>
            <Header/>
            <Container maxWidth="xl">


                <Routes>
                    <Route path={'/'} element={<Projects/>}/>
                    <Route path={'/:projectId'} element={<TasksPage/>}/>
                    {/*<Route path={'/*'} element={<div>404 page note found</div>}/>*/}
                </Routes>
            </Container>
        </div>
    );
}



