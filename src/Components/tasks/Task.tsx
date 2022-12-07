import {
    addSubTaskAC,
    changeTaskTitleAC,
    deleteTaskAC,
    PriorityType,
    SubTaskType,
    TimeType
} from "../../Features/tasks-reducer";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Modal,
    Tooltip,
    Typography
} from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import React, {useState} from "react";
import {TimeComponent} from "./TimeComponent";
import {RatingUtils} from "../../utils/RatingUtils";
import {ModalEditMode} from "../../utils/ModalEditMode";
import {useAppDispatch} from "../../App/store";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/Download';
import {UploadedFilesModal} from "../../utils/UploadedFilesModal";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

type TaskPropsType = {
    id: string
    title: string
    taskNumber: number
    priority: PriorityType
    lifeCycleTime: TimeType
    description: string
    subTasks: Array<SubTaskType>
}

export const Task = ({id, title, taskNumber, priority, lifeCycleTime, description, subTasks}: TaskPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState(false)
    const [addSubTasksModalOpen, setAddSubTasksModalOpen] = useState(false)
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

    const addSubTaskHandler = (title: string) => {
        setAddSubTasksModalOpen(false)
        dispatch(addSubTaskAC(id, title))
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
                            <Tooltip title="add sub tasks" arrow>
                                <AddToPhotosIcon onClick={() => setAddSubTasksModalOpen(true)}/>
                            </Tooltip>
                            <Tooltip style={{marginLeft: "8px"}} title="show sub tasks" arrow>
                                <ArrowCircleDownIcon/>
                            </Tooltip>
                        </Typography>
                        {}
                        <AddSubTasksModal editMode={addSubTasksModalOpen}
                                          addSubTaskHandler={addSubTaskHandler}
                        />
                    </div>

                    <div>
                        priority:
                        <div>
                            <RatingUtils id={id} priority={priority}/>
                        </div>
                    </div>
                </div>
                <div>
                    {subTasks &&
                        subTasks.map((st) => {
                            return <SubTask key={st.id}
                                            title={st.title}
                            />
                        })
                    }
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

type AddSubTasksModalPropsType = {
    editMode: boolean
    addSubTaskHandler: (value: string) => void
}

export const AddSubTasksModal = ({editMode, addSubTaskHandler}: AddSubTasksModalPropsType) => {

    const [text, setText] = useState('')

    return <Modal
        open={editMode}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
                <div>
                    set task title:
                    <input value={text} onChange={(e) => setText(e.currentTarget.value)}/>
                </div>
                <button onClick={() => addSubTaskHandler(text)}>add</button>
            </Typography>
        </Box>
    </Modal>
}


type SubTaskPropsType = {
    title: string
}

export const SubTask = ({title}: SubTaskPropsType) => {
    return <div>
        {title}
    </div>
}