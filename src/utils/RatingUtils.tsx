import Box from '@mui/material/Box/Box';
import Rating from '@mui/material/Rating/Rating';
import React from 'react';
import {useAppDispatch} from "../App/store";
import {changeTaskPriorityAC, PriorityType} from "../Features/tasks-reducer";

type RatingUtilsPropsType = {
    id: string
    priority: PriorityType
}

export const RatingUtils = ({id, priority}: RatingUtilsPropsType) => {

    const [value, setValue] = React.useState<number | null>(2);
    const dispatch = useAppDispatch()

    const changePriorityHandler = (newValue: PriorityType) => {
        dispatch(changeTaskPriorityAC(newValue, id))
    }

    return (
        <Box
            sx={{
                '& > legend': {mt: 2},
            }}
        >
            <Rating
                name="simple-controlled"
                value={priority}
                size={'small'}
                onChange={(event, newValue) => {
                    changePriorityHandler(newValue);
                }}
            />
        </Box>
    );
};

