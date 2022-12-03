import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../App/store";
import {addProjectAC, ProjectsType} from "../../Features/projects-reducer";
import {ProjectCard} from "./ProjectCard";

export function Projects() {

    const projects = useSelector<AppRootStateType, Array<ProjectsType>>(state => state.projects)

    const dispatch = useAppDispatch()

    const addProjectHandler = (title: string) => {
        dispatch(addProjectAC(title))
    }

    return (
        <div>
            название проекта:
            <input></input>
            <button onClick={() => addProjectHandler('test')}>+</button>

            <div>
                {projects.map(p => <ProjectCard key={p.id}
                                                title={p.title}
                />)}
            </div>
        </div>
    )
}

