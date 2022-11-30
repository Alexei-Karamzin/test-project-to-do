import React from 'react';
import {TaskStatusType, TasksType} from "../Features/tasks-reducer";
import {Task} from "./TasksPage";

type TaskListPropsType = {
    tasks: Array<TasksType>
    status: TaskStatusType
}

export const TasksList = ({tasks, status}: TaskListPropsType) => {
    return (
        <div style={{border: '1px solid black', minHeight: '200px', marginTop: '5px'}}>
            {
                tasks.map((el) => {
                    return <Task key={el.id}
                                 id={el.id}
                                 title={el.title}
                                 taskNumber={el.taskNumber}
                    />
                })
            }
            <div>{status}</div>
        </div>
    );
};

