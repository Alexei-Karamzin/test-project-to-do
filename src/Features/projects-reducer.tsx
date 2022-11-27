import {Dispatch} from "redux";

const initialState: any = [
    {id: '100', title: 'test'}
]

export const projectsReducer = (state: Array<ProjectsType> = initialState, action: ActionType): Array<ProjectsType> => {
    switch (action.type) {
        case 'ADD-PROJECT':
            return [{id: '1', title: action.title} ,...state]
        default:
            return state
    }
}

// actions

export const addProjectAC = (title: string) =>
    ({type: 'ADD-PROJECT', title} as const)

// thunks

/*export const removeTodolistTC = (id: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(changeTodolistEntityStatusAC(id, "loading"))
    dispatch(setAppStatusAC('loading'))
    todolistsApi.deleteTodolist(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(removeTodolistAC(id))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch(err => {
            handleServerNetworkError(err, dispatch)
        })
}
export const changeTodolistTitleTC = (id: string, title: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setAppStatusAC('loading'))
    todolistsApi.updateTodolist(title, id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(changeTodolistTitleAC(id, title))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch(err => {
            handleServerNetworkError(err, dispatch)
        })
}*/

//types

type ActionType =
    | ReturnType<typeof addProjectAC>
export type ProjectsType = {
    title: string,
    id: string
}