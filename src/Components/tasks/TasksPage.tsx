import React from "react";
import {Grid} from "@mui/material";
import {AppRootStateType, useAppDispatch} from "../../App/store";
import {addTaskAC, TasksType} from "../../Features/tasks-reducer";
import {useSelector} from "react-redux";
import {TasksList} from "./TasksList";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

//console.log(format(new Date(), "'Today is a' eee"))
//=> "Today is a Saturday"

//console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }))
//=> "3 days ago"

//console.log(formatRelative(subDays(new Date(), 3), new Date()))
//=> "last Friday at 7:26 p.m."

type TasksPropsType = {}

export function TasksPage(props: TasksPropsType) {

    const tasks = useSelector<AppRootStateType, Array<TasksType>>(state => state.tasks)
    const dispatch = useAppDispatch()

    const addTaskHandler = (title: string) => {
        const timeData = new Date()

        dispatch(addTaskAC(title, timeData))
    }

    const QueueTasks = tasks.filter(el => el.status === "Queue")
    const DevelopmentTasks = tasks.filter(el => el.status === "Development")
    const DoneTasks = tasks.filter(el => el.status === "Done")

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <button onClick={() => {
                        addTaskHandler('new test')
                    }}>add task
                    </button>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{paddingTop: "15px"}}>
                <Grid item xs={4}>
                    <TasksList tasks={QueueTasks}
                               status={"Queue"}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TasksList tasks={DevelopmentTasks}
                               status={"Development"}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TasksList tasks={DoneTasks}
                               status={"Done"}
                    />
                </Grid>
            </Grid>
        </>

    )
}

