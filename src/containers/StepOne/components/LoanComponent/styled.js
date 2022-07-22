import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const LoanSlider = styled(Slider)({
    color: '#2d8f43',
    height: 4,
    cursor: "default",
    '& .MuiSlider-track': {
        border: 'none',
        heigth: '50px'
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        marginLeft: '12px',
        // marginRight: '24px!important',
        backgroundColor: '#fff',
        border: '7px solid #2d8f43',
        cursor: 'grab',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
export default LoanSlider
