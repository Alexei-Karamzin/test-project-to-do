import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Card, Tooltip, Typography} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useAppDispatch} from "../../App/store";
import {deleteProjectAC} from "../../Features/projects-reducer";

type ProjectCardPropsType = {
    title: string,
    id: string
}

export const ProjectCard = ({title, id}: ProjectCardPropsType) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const deleteTaskHandler = () => {
        dispatch(deleteProjectAC(id))
    }

    return (
        <Box style={{padding: "5px"}} sx={{width: 450, height: "80px"}}>
            <Card style={{padding: "8px"}} variant="outlined">
                <Typography variant="h5"
                            component="div"
                            style={{display: "flex", justifyContent: "space-between"}}
                >
                    {title}
                    <Tooltip title="Delete">
                        <DeleteOutlineIcon onClick={deleteTaskHandler}/>
                    </Tooltip>
                </Typography>

                <Button size="small"
                        variant="outlined"
                        onClick={() => {
                            navigate('/' + id)
                        }}
                >
                    go to tasks
                </Button>
            </Card>
        </Box>
    );
};
