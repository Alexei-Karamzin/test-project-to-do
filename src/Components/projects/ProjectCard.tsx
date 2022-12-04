import React from 'react';
import {Navigate, NavLink} from 'react-router-dom';

type ProjectCardPropsType = {
    title: string,
    id:string
}

export const ProjectCard = ({title, id}: ProjectCardPropsType) => {

    const redirectToTasksHandler = () => {
        return <NavLink to={'/tasks/' + id}/>
    }

    return (
        <div style={{width: '200px', height: '300px', border: '1px solid black'}}>
            <div>project name: {title}</div>
            <button onClick={() => redirectToTasksHandler()}>go to tasks</button>
        </div>
    );
};
