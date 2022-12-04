import {PriorityType, TimeType} from "../../Features/tasks-reducer";
import {Box, Card, CardActions, CardContent, Tooltip, Typography} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import React from "react";
import {TimeComponent} from "./TimeComponent";
import {RatingUtils} from "../../utils/RatingUtils";

type TaskPropsType = {
    id: string
    title: string
    taskNumber: number
    priority: PriorityType
    lifeCycleTime: TimeType
    description: string
}

export const Task = ({id, title, taskNumber, priority, lifeCycleTime, description}: TaskPropsType) => {

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
                            <RatingUtils id={id} priority={priority} />
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