import React from "react";
import {Box, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {AppRootStateType, useAppDispatch} from "../App/store";
import {addTaskAC, TasksType} from "../Features/tasks-reducer";
import {useSelector} from "react-redux";
import ChatIcon from '@mui/icons-material/Chat';
import {TasksList} from "./TasksList";

type TasksPropsType = {}

export function TasksPage(props: TasksPropsType) {

    const tasks = useSelector<AppRootStateType, Array<TasksType>>(state => state.tasks)
    const dispatch = useAppDispatch()

    const addTaskHandler = (title: string) => {
        dispatch(addTaskAC(title))
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
            <Grid container spacing={2}>
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

type TaskPropsType = {
    id: string
    title: string
    taskNumber: number
}

export const Task = ({id, title, taskNumber}: TaskPropsType) => {


    return <Box style={{margin: "8px"}} sx={{minWidth: 275}}>
        <Card variant="outlined">
            <CardContent>
                <Typography style={{display: "flex", justifyContent: "space-between"}} sx={{fontSize: 12}}
                            color="text.secondary" gutterBottom>
                    <span>task number: {taskNumber}</span>
                    <span>time create: 05/12/2022</span>
                </Typography>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            description: BLA BLA
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </div>
                    <div>
                        priority
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <ChatIcon />
            </CardActions>
        </Card>

    </Box>

}