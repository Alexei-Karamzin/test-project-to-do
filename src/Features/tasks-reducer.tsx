import {v1} from "uuid";

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
                projectId: action.projectId,
                taskId: v1(),
                title: action.title,
                taskNumber: 3,
                status: "Queue",
                priority: 1,
                lifeCycleTime: action.timeData,
                description: action.taskDescription
            }, ...state]
        case "TASK/CHANGE-TASK-PRIORITY":
            return state.map(ts => ts.taskId === action.id ? {...ts, priority: action.newPriority} : ts)
        default:
            return state
    }
}

// actions

export const addTaskAC = (projectId: string, title: string, timeData: any, taskDescription: string) => {

    /*let day = timeData.getDate()
    let month = timeData.getMonth()
    let year = timeData.getFullYear()
    let hours = timeData.getHours()
    let minutes = timeData.getMinutes()

    let timeNewData = {day, month, year, hours, minutes}*/

    localStorage.setItem('new task', '')

    return {
        type: 'TASK/ADD-TASK', title, timeData, taskDescription, projectId
    } as const
}
export const changeTaskPriorityAC = (newPriority: PriorityType, id: string) => ({
    type: 'TASK/CHANGE-TASK-PRIORITY',
    newPriority,
    id
} as const)

// thunks

//types

export type PriorityType = number | null

type ActionType =
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeTaskPriorityAC>
export type TasksType = {
    title: string
    projectId: string
    taskId: string
    taskNumber: number
    status: TaskStatusType
    priority: PriorityType
    lifeCycleTime: TimeType
    description: string
}
export type TimeType = {
    createDate: any
    dateOfCompletion: any
    tameAtWork: any
}