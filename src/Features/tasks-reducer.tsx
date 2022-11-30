
const initialState: Array<TasksType> = [
    {id: '100', title: 'test 1', taskNumber: 1, status: "Queue"},
    {id: '200', title: 'test 2', taskNumber: 2, status: "Development"},
    {id: '300', title: 'test 3', taskNumber: 3, status: "Queue"},
]

export type TaskStatusType = 'Queue' | 'Development' | 'Done'

export const tasksReducer = (state: Array<TasksType> = initialState, action: ActionType): Array<TasksType> => {
    switch (action.type) {
        case 'TASK/ADD-TASK':
            return [{id: '1', title: action.title, taskNumber: 3, status: "Queue"} ,...state]
        default:
            return state
    }
}

// actions

export const addTaskAC = (title: string) =>
    ({type: 'TASK/ADD-TASK', title} as const)

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
    | ReturnType<typeof addTaskAC>
export type TasksType = {
    title: string
    id: string
    taskNumber: number,
    status: TaskStatusType
}