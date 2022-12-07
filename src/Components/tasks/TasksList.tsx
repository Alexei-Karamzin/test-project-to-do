import React from 'react';
import {TaskStatusType, TasksType} from "../../Features/tasks-reducer";
import {Task} from "./Task";

type TaskListPropsType = {
    tasks: Array<TasksType>
    status: TaskStatusType
}

export const TasksList = ({tasks, status}: TaskListPropsType) => {
    return (
        <div style={{border: '1px solid black', minHeight: '200px', marginTop: '5px'}}>
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
            <div>{status}</div>
        </div>
    );
};

