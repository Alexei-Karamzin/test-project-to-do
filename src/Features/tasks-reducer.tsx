import {v1} from "uuid";

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
                taskNumber: 1,
                status: "Queue",
                priority: 1,
                lifeCycleTime: action.timeData,
                description: action.taskDescription,
                subTasks: []
            }, ...state]
        case "TASK/CHANGE-TASK-PRIORITY":
            return state.map(ts => ts.taskId === action.id ? {...ts, priority: action.newPriority} : ts)
        case "TASK/CHANGE-TASK-TITLE":
            return state.map(ts => ts.taskId === action.taskId ? {...ts, title: action.newText} : ts)
        case "TASK/DELETE-TASK":
            return state.filter(ts => ts.taskId !== action.taskId)
        case "TASK/ADD-SUB-TASK":
            return state.map(ts => ts.taskId === action.taskId ? {...ts, subTasks: [{title: action.title, id: v1(), ...ts.subTasks}]} : ts)
        default:
            return state
    }
}

// actions

export const addTaskAC = (projectId: string | undefined, title: string, timeData: any, taskDescription: string) => {
    return {
        type: 'TASK/ADD-TASK', title, timeData, taskDescription, projectId
    } as const
}
export const changeTaskPriorityAC = (newPriority: PriorityType, id: string) => ({
    type: 'TASK/CHANGE-TASK-PRIORITY',
    newPriority,
    id
} as const)
export const changeTaskTitleAC = (taskId: string, newText: string) => ({
    type: 'TASK/CHANGE-TASK-TITLE',
    taskId,
    newText
} as const)
export const deleteTaskAC = (taskId: string) => ({
    type: 'TASK/DELETE-TASK',
    taskId,
} as const)
export const addSubTaskAC = (taskId: string, title: string) => {
    return {
        type: 'TASK/ADD-SUB-TASK', title, taskId
    } as const
}

//types

export type PriorityType = number | null
type ActionType =
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeTaskPriorityAC>
    | ReturnType<typeof changeTaskTitleAC>
    | ReturnType<typeof deleteTaskAC>
    | ReturnType<typeof addSubTaskAC>

export type TasksType = {
    title: string
    projectId: string | undefined
    taskId: string
    taskNumber: number
    status: TaskStatusType
    priority: PriorityType
    lifeCycleTime: TimeType
    description: string
    subTasks: Array<SubTaskType>
}
export type TimeType = {
    createDate: any
    dateOfCompletion: any
    tameAtWork: any
}
export type SubTaskType = {
    id: string
    title: string
}