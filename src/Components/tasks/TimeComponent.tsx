import React, {useState} from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Box, Modal, Tooltip, Typography} from "@mui/material";
import {TimeType} from "../../Features/tasks-reducer";
import { format } from "date-fns"

type TimeComponentPropsTime = {
    id: string
    timeData: any
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

export const TimeComponent = ({id, timeData}: TimeComponentPropsTime) => {
    const [openTime, setOpenTime] = useState(false)
    //const createDate = format(timeData, 'dd/MM/yy')
    //const createTime = format(timeData, 'hh:mm')

    const getTimeHandler = (id: string) => setOpenTime(true)

    const closeTimeHandler = () => setOpenTime(false)

    return <>
        <Tooltip title="time" arrow>
            <AccessTimeIcon onClick={() => getTimeHandler(id)}/>
        </Tooltip>
        <Modal
            open={openTime}
            onClose={closeTimeHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    Create date: {/*{createDate} || {createTime}*/}
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    date of completion:
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    time at work: TIME
                </Typography>
            </Box>
        </Modal>
    </>
}