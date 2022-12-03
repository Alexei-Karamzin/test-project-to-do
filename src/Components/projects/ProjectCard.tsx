import React from 'react';
import { Navigate } from 'react-router-dom';

type ProjectCardPropsType = {
    title: string
}

export const ProjectCard = ({title}: ProjectCardPropsType) => {

    const redirectToTasksHandler = () => {
        return <Navigate to='/tasks' replace={true}/>
    }

    return (
        <div style={{width: '200px', height: '300px', border: '1px solid black'}}>
            <div>project name: {title}</div>
            <button onClick={redirectToTasksHandler}>go to tasks</button>
        </div>
    );
};
