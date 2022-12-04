import { Dispatch } from "redux";
import {v1} from "uuid"
import {TasksType} from "./tasks-reducer";
import {AppRootStateType} from "../App/store";

const initialState: Array<ProjectsType> = []

export const projectsReducer = (state: Array<ProjectsType> = initialState, action: ActionType): Array<ProjectsType> => {
    switch (action.type) {
        case "PROJECTS/ADD-PROJECT":
            return [{id: v1(), title: action.title, tasks: []}, ...state]
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

// thunks

/*export const addProjectTC = (title: string) => (dispatch: Dispatch<ActionType>, getState: () => AppRootStateType) => {
    dispatch(addProjectAC(title))
}*/

export const setProjectsTC = () => (dispatch: Dispatch<ActionType>) => {
    //localStorage.getItem(`project:`)
    //dispatch(addProjectAC(title))
}

//types

type ActionType =
    | ReturnType<typeof addProjectAC>
    | ReturnType<typeof setProjectsAC>

export type ProjectsType = {
    title: string,
    id: string,
    tasks: Array<TasksType>,
}