
const timeObject = {
    createDate: '',
    dateOfCompletion: '',
    tameAtWork: ''
}

const initialState: Array<TasksType> = [
    /*{id: '100', title: 'test 1', taskNumber: 1, status: "Queue", priority: "Low", lifeCycleTime: timeObject},
    {id: '200', title: 'test 2', taskNumber: 2, status: "Development", priority: "middle", lifeCycleTime: timeObject},
    {id: '300', title: 'test 3', taskNumber: 3, status: "Queue", priority: "Low", lifeCycleTime: timeObject},*/
]

export type TaskStatusType = 'Queue' | 'Development' | 'Done'

export const tasksReducer = (state: Array<TasksType> = initialState, action: ActionType): Array<TasksType> => {
    switch (action.type) {
        case 'TASK/ADD-TASK':
            return [{
                id: '1',
                title: action.title,
                taskNumber: 3,
                status: "Queue",
                priority: "Low",
                lifeCycleTime: action.timeData
            }, ...state]
        case "TASK/CHANGE-TASK-PRIORITY":
        /*return [{...state, ...state.find(el => el.id === action.id ? el.priority = action.newPriority)}]*/
        default:
            return state
    }
}

// actions

export const addTaskAC = (title: string, timeData: any) => {

    /*let day = timeData.getDate()
    let month = timeData.getMonth()
    let year = timeData.getFullYear()
    let hours = timeData.getHours()
    let minutes = timeData.getMinutes()

    let timeNewData = {day, month, year, hours, minutes}*/

    return {
        type: 'TASK/ADD-TASK', title, timeData
    } as const
}
export const changeTaskPriorityAC = (newPriority: string, id: string) => ({
    type: 'TASK/CHANGE-TASK-PRIORITY',
    newPriority,
    id
} as const)

// thunks

//types

export type PriorityType = "Low" | "middle" | "High"

type ActionType =
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeTaskPriorityAC>
export type TasksType = {
    title: string
    id: string
    taskNumber: number
    status: TaskStatusType
    priority: PriorityType
    lifeCycleTime: TimeType
}
export type TimeType = {
    createDate: any
    dateOfCompletion: any
    tameAtWork: any
}