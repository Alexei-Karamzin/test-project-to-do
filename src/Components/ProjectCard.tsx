import React from 'react';

type ProjectCardPropsType = {
    title: string
}

export const ProjectCard = ({title}: ProjectCardPropsType) => {
    return (
        <div style={{width: '200px', height: '300px', border: '1px solid black'}}>
            <div>project name: {title}</div>
        </div>
    );
};
