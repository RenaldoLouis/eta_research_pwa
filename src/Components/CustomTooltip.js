import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: '#0F62FE',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#0F62FE',
        borderRadius: 0
    },
}));