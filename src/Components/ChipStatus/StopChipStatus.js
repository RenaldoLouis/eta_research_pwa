import React from "react";

// import Components
import { Typography } from "@mui/material";

// import Icons
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import reusable Component
import Chip from "../ReusableComponents/Chip";

const getIconChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'All OK':
            return <CheckIcon sx={{ color: '#7a64e5', width: 14, height: 14, mr: 1 }} />
        case 'Discrepancy':
            return <ErrorOutlineIcon sx={{ color: '#ea0000', width: 14, height: 14, mr: 1 }} />
        default:
            return <></>
    }
}

const getColorChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'All OK':
            return '#cec4ff'
        case 'Discrepancy':
            return '#ffa4a4'
        default:
            return ''
    }
}

const getTextStatusColor = tourStatus => {
    switch (tourStatus) {
        case 'All OK':
            return '#7a64e5'
        case 'Discrepancy':
            return '#ea0000'
        default:
            return ''
    }
}

const StopChipStatus = props => {

    const { stopStatus } = props

    return (
        <Chip sx={{ backgroundColor: getColorChipStatus(stopStatus) }}>
            
            {getIconChipStatus(stopStatus)}

            <Typography fontSize={11} sx={{ fontFamily: 'Eina04-Bold', color: getTextStatusColor(stopStatus) }} >
                {stopStatus}
            </Typography>
        </Chip>
    )
}

StopChipStatus.defaultProps = {
    stopStatus: 'All OK',
}




export default StopChipStatus