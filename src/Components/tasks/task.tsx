import {PriorityType, TimeType} from "../../Features/tasks-reducer";
import {Box, Card, CardActions, CardContent, Modal, Typography} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React, {useState} from "react";
import {TimeComponent} from "./TimeComponent";

type TaskPropsType = {
    id: string
    title: string
    taskNumber: number
    priority: PriorityType
    lifeCycleTime: TimeType
}

export const Task = ({id, title, taskNumber, priority, lifeCycleTime}: TaskPropsType) => {


    const changeTaskPriority = () => {

    }

    return <Box style={{margin: "8px"}} sx={{width: 400}}>
        <Card variant="outlined">
            <CardContent>
                <Typography style={{display: "flex", justifyContent: "space-between"}} sx={{fontSize: 12}}
                            color="text.secondary" gutterBottom>
                    <span>task number: {taskNumber}</span>
                    <TimeComponent id={id} timeData={lifeCycleTime}/>
                </Typography>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>17897477
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
                        priority:
                        <div>
                            {priority === "Low" && <div><ErrorIcon/><ErrorOutlineIcon/><ErrorOutlineIcon/></div>}
                            {priority === "middle" && <div><ErrorIcon/><ErrorIcon/><ErrorOutlineIcon/></div>}
                            {priority === "High" && <div><ErrorIcon/><ErrorIcon/><ErrorIcon/></div>}
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <InsertCommentIcon/>
            </CardActions>
        </Card>

    </Box>

}