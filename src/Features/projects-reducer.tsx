import {v1} from "uuid"
import {TasksType} from "./tasks-reducer";

const initialState: Array<ProjectsType> = []

export const projectsReducer = (state: Array<ProjectsType> = initialState, action: ActionType): Array<ProjectsType> => {
    switch (action.type) {
        case "PROJECTS/ADD-PROJECT":
            return [{id: v1(), title: action.title, tasks: []}, ...state]
        case "PROJECTS/DELETE-PROJECT":
            return state.filter(pr => pr.id !== action.id)
        case "PROJECTS/SET-PROJECTS":
            return state
        default:
            return state
    }
}

// actions

export const addProjectAC = (title: string) => {
    return {type: 'PROJECTS/ADD-PROJECT', title} as const
}
export const setProjectsAC = () => {
    return {type: 'PROJECTS/SET-PROJECTS'} as const
}
export const deleteProjectAC = (id: string) => {
    return {type: 'PROJECTS/DELETE-PROJECT', id} as const
}
export const setTaskCountAC = (id: string) => {
    return {type: 'PROJECTS/SET-TASK-COUNT', id} as const
}

//types

type ActionType =
    | ReturnType<typeof addProjectAC>
    | ReturnType<typeof setProjectsAC>
    | ReturnType<typeof deleteProjectAC>
    | ReturnType<typeof setTaskCountAC>

export type ProjectsType = {
    title: string,
    id: string,
    tasks: Array<TasksType>,
}