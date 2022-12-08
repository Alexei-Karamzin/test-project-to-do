import React from 'react';
import {TaskStatusType, TasksType} from "../../Features/tasks-reducer";
import {Task} from "./Task";

type TaskListPropsType = {
    tasks: Array<TasksType>
    status: TaskStatusType
}

export const TasksList = ({tasks, status}: TaskListPropsType) => {
    return (
        <div style={{backgroundImage: "linear-gradient(90deg, #D3D3D3 0%, #C0C0C0 35%, #B0B0B0 100%)", borderRadius: "3%" ,border: '1px solid black', minHeight: '200px', marginTop: '5px'}}>
            <TaskListHead status={status}/>
            {
                tasks.map((el) => {
                    return <Task key={el.taskId}
                                 id={el.taskId}
                                 title={el.title}
                                 taskNumber={el.taskNumber}
                                 priority={el.priority}
                                 lifeCycleTime={el.lifeCycleTime}
                                 description={el.description}
                                 subTasks={el.subTasks}
                    />
                })
            }
        </div>
    );
};





type TaskListHeadPropsType = {
    status: string
}

export const TaskListHead = ({status}: TaskListHeadPropsType) => {
    return <div style={{display: "flex", width: "100%", height: "30px", fontSize: "large", justifyContent: "center"}}>
        <div style={{}}>{status}</div>
    </div>
}
