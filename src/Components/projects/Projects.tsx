import React, {useState} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../App/store";
import {addProjectAC, ProjectsType} from "../../Features/projects-reducer";
import {ProjectCard} from "./ProjectCard";
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
    display: 'flex',
    justifyContent: 'center'
};

export function Projects() {

    let projects = useSelector<AppRootStateType, Array<ProjectsType>>(state => state.projects)

    const dispatch = useAppDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [title, setTitle] = useState('')

    /*useEffect(() => {

        dispatch(setProjectsTC()) // написать AC

    }, [])
*/
    const setProjectTitle = (value: string) => {
        setTitle(value)
    }

    const addProject = (title: string) => {
        setTitle('')
        setOpenModal(false)
        dispatch(addProjectAC(title))
    }

    const setModalHandler = (value: boolean) => {
        setOpenModal(value)
    }

    return (
        <div>
            <div style={{width: "100%"}}>
                <Button style={{margin: "5px"}}
                        variant="contained"
                        onClick={() => setModalHandler(true)}
                >new project
                </Button>
            </div>
            <Modal
                open={openModal}
                onClose={() => setModalHandler(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description">
                            <TextField
                                value={title}
                                onChange={(e) => setProjectTitle(e.currentTarget.value)}
                                id="standard-textarea"
                                label="project name"
                                multiline
                                variant="standard"
                            />
                        <AddCircleOutlineIcon style={{marginTop: "15px", marginLeft: "10px"}}
                                              onClick={() => addProject(title)}
                        />
                    </Typography>
                </Box>
            </Modal>

            <div>
                {projects.map(p => <ProjectCard key={p.id}
                                                title={p.title}
                                                id={p.id}
                />)}
            </div>
        </div>
    )
}

type addProjectModalPropsType = {}

export const AddProjectModal = ({}: addProjectModalPropsType) => {


    return <>

    </>
}