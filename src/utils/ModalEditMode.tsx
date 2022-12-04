import React, {useState} from 'react';
import {Box, Modal, Typography} from "@mui/material";

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

type ModalEditModePropsType = {
    editMode: boolean
    changeText: (newText: string) => void
    text: string
}

export const ModalEditMode = ({editMode, changeText, text}: ModalEditModePropsType) => {

    const [newText, setNewText] = useState(text)

    const closeModalHandler = () => {

    }

    return (
        <Modal
            open={editMode}
            onClose={closeModalHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <div>
                        set task title:
                        <input value={newText} onChange={(e) => setNewText(e.currentTarget.value)}/>
                    </div>
                    <button onClick={() => changeText(newText)}>refactor</button>
                </Typography>
            </Box>
        </Modal>
    );
};

