import {Box, Modal, Typography} from "@mui/material";
import React, {ChangeEvent, useState} from "react";

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

type uploadedFilesModalPropsType = {
    editMode: boolean
}

export const UploadedFilesModal = ({editMode}: uploadedFilesModalPropsType) => {

    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [uploaded, setUploaded] = useState(null)

    const closeModalHandler = () => {

    }

    const handleChange = (event: ChangeEvent ) => {
        //setSelectedFile(event.target.files[0])
    }

    return <Modal
        open={editMode}
        onClose={closeModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
                <input type="file"
                       onChange={(e) => handleChange(e)}
                />
            </Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>

            </Typography>
        </Box>
    </Modal>
}