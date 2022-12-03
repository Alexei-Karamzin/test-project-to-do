import React, {useState} from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Box, Modal, Typography} from "@mui/material";
import {TimeType} from "../../Features/tasks-reducer";

type TimeComponentPropsTime = {
    id: string
    timeData: TimeType
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const TimeComponent = ({id}: TimeComponentPropsTime) => {
    const [openTime, setOpenTime] = useState(false)

    const getTimeHandler = (id: string) => setOpenTime(true)

    const closeTimeHandler = () => setOpenTime(false)

    return <>
        <AccessTimeIcon onClick={() => getTimeHandler(id)}/>
        <Modal
            open={openTime}
            onClose={closeTimeHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    Create date: 
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    date of completion: TIME
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    time at work: TIME
                </Typography>
            </Box>
        </Modal>
    </>
}