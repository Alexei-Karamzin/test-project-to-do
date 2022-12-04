import {changeTaskTitleAC, deleteTaskAC, PriorityType, TimeType} from "../../Features/tasks-reducer";
import {Box, Card, CardActions, CardContent, Modal, Tooltip, Typography} from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import React, {useState} from "react";
import {TimeComponent} from "./TimeComponent";
import {RatingUtils} from "../../utils/RatingUtils";
import {ModalEditMode} from "../../utils/ModalEditMode";
import {useAppDispatch} from "../../App/store";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/Download';
import {UploadedFilesModal} from "../../utils/UploadedFilesModal";

type TaskPropsType = {
    id: string
    title: string
    taskNumber: number
    priority: PriorityType
    lifeCycleTime: TimeType
    description: string
}

export const Task = ({id, title, taskNumber, priority, lifeCycleTime, description}: TaskPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState(false)
    const dispatch = useAppDispatch()

    const activateEditHandler = () => {
        setEditMode(true)
    }

    const onChangeTextHandler = (newText: string) => {
        dispatch(changeTaskTitleAC(id, newText))
        setEditMode(false)
    }

    const deleteTaskHandler = () => {
        dispatch(deleteTaskAC(id))
    }

    const uploadedFilesHandler = () => {
        setUploadedFiles(true)
    }

    return <Box style={{margin: "8px"}} sx={{width: 450}}>
        <Card variant="outlined">
            <CardContent>
                <Typography style={{display: "flex", justifyContent: "space-between"}}
                            sx={{fontSize: 12}}
                            color="text.secondary"
                            gutterBottom
                >
                    <span>task number: {taskNumber}</span>
                    <span>
                        <Tooltip title="delete task" arrow>
                            <DeleteOutlineIcon onClick={deleteTaskHandler}/>
                        </Tooltip>
                        <Tooltip title="uploaded files" arrow>
                            <DownloadIcon onClick={uploadedFilesHandler}/>
                        </Tooltip>
                            <TimeComponent id={id} timeData={lifeCycleTime}/>
                        <UploadedFilesModal editMode={uploadedFiles}/>
                    </span>
                </Typography>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <Typography onDoubleClick={activateEditHandler} variant="h5" component="div">
                            {title}
                            <ModalEditMode editMode={editMode}
                                           changeText={onChangeTextHandler}
                                           text={title}
                            />
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            description: {description}
                        </Typography>
                        <Typography variant="body2">
                            subtasks
                        </Typography>
                    </div>
                    <div>
                        priority:
                        <div>
                            <RatingUtils id={id} priority={priority}/>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <Tooltip title="open comments" arrow>
                    <InsertCommentIcon/>
                </Tooltip>
            </CardActions>
        </Card>

    </Box>

}



