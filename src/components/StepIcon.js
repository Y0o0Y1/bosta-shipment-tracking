import { styled } from '@mui/material/styles';

export const StepIcon = styled('div')(({ iconState }) => {
    console.log(iconState)
    return ({
        color: iconState.completed ? iconState.color : "gray",
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(iconState.active && {
            color: iconState.color,
        }),
        '& .QontoStepIcon-completedIcon': {
            color: iconState.color,
            zIndex: 1,
            fontSize: 18,
        },
        '& .QontoStepIcon-circle': {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: iconState.color,
        },
    })
});

export default StepIcon;