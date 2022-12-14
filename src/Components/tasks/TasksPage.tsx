import React, {useState} from "react";
import {Box, Button, Divider, Grid, Modal, Stack, Tooltip, Typography} from "@mui/material";
import {AppRootStateType, useAppDispatch} from "../../App/store";
import {addTaskAC, TasksType} from "../../Features/tasks-reducer";
import {useSelector} from "react-redux";
import {TasksList} from "./TasksList";
import {format, formatDistance, formatRelative, subDays} from 'date-fns'
import {useNavigate, useParams} from "react-router-dom";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

//console.log(format(new Date(), "'Today is a' eee"))
//=> "Today is a Saturday"

//console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }))
//=> "3 days ago"

//console.log(formatRelative(subDays(new Date(), 3), new Date()))
//=> "last Friday at 7:26 p.m."

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 20,
    p: 3,
};

type TasksPropsType = {}

export function TasksPage({}: TasksPropsType) {

    const [openModal, setOpenModal] = useState(false)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const params = useParams<'projectId'>()
    const navigate = useNavigate()

    const tasks = useSelector<AppRootStateType, Array<TasksType>>(state => state.tasks)
    const dispatch = useAppDispatch()

    const addTaskHandler = (title: string, taskDescription: string) => {
        const timeData = new Date()

        dispatch(addTaskAC(params.projectId, title, timeData, taskDescription))
        setTaskTitle('')
        setTaskDescription('')
        setOpenModal(false)
    }

    const onKeyPressHandler = (e: any, title: string, taskDescription: string) => {
        if (e.charCode === 13) {
            const timeData = new Date()

            dispatch(addTaskAC(params.projectId, title, timeData, taskDescription))
            setTaskTitle('')
            setTaskDescription('')
            setOpenModal(false)
        }
    }

    const closeModalHandler = () => setOpenModal(false)

    const projectTasks = tasks.filter(ts => params.projectId === ts.projectId)

    const QueueTasks = projectTasks.filter(el => el.status === "Queue")
    const DevelopmentTasks = projectTasks.filter(el => el.status === "Development")
    const DoneTasks = projectTasks.filter(el => el.status === "Done")

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{margin: "8px"}}>
                    <Tooltip title="back to projects" arrow>
                        <ReplyAllIcon style={{marginRight: "10px"}} onClick={() => navigate('/')}/>
                    </Tooltip>
                    <Button variant="contained"
                            onClick={() => setOpenModal(true)}
                    >
                        add task
                    </Button>
                    <Tooltip title="search task" arrow>
                        <ContentPasteSearchIcon />
                    </Tooltip>
                </Grid>
            </Grid>
            <Modal
                open={openModal}
                onClose={closeModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <div>
                            set task title:
                            <input value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
                        </div>
                        <div>
                            set description:
                            <input value={taskDescription} onChange={(e) => setTaskDescription(e.currentTarget.value)}/>
                        </div>
                        <button onClick={() => addTaskHandler(taskTitle, taskDescription)}>add</button>
                    </Typography>
                </Box>
            </Modal>
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
