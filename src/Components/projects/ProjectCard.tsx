import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

type ProjectCardPropsType = {
    title: string,
    id:string
}

export const ProjectCard = ({title, id}: ProjectCardPropsType) => {

    const navigate = useNavigate()

    return (
        <div style={{width: '200px', height: '300px', border: '1px solid black'}}>
            <div>project name: {title}</div>
            <button onClick={() => {navigate('/' + id)}}>go to tasks</button>
        </div>
    );
};
