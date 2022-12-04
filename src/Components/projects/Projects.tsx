import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../App/store";
import {addProjectAC, ProjectsType, setProjectsTC} from "../../Features/projects-reducer";
import {ProjectCard} from "./ProjectCard";

export function Projects() {

    let projects = useSelector<AppRootStateType, Array<ProjectsType>>(state => state.projects)

    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')

    /*useEffect(() => {

        dispatch(setProjectsTC()) // написать AC

    }, [])
*/
    const onChangeInputHandler = (value: string) => {
        setValue(value)
    }

    const addProjectHandler = (title: string) => {
        dispatch(addProjectAC(title))
    }

    return (
        <div>
            название проекта:
            <input value={value} onChange={(e) => onChangeInputHandler(e.currentTarget.value)} />
            <button onClick={() => addProjectHandler(value)}>+</button>

            <div>
                {projects.map(p => <ProjectCard key={p.id}
                                                title={p.title}
                                                id={p.id}
                />)}
            </div>
        </div>
    )
}

