import React from "react";

// import Components
import { Typography } from "@mui/material";

// import Icons
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DoneIcon from '@mui/icons-material/Done';

// import reusable Component
import Chip from "../ReusableComponents/Chip";

const getIconChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'All OK':
            return <CheckIcon sx={{ color: '#7a64e5', width: 14, height: 14, mr: 1 }} />
        case 'Discrepancy':
            return <ErrorOutlineIcon sx={{ color: '#da1e28', width: 14, height: 14, mr: 1 }} />
        case 'Done':
            return <DoneIcon sx={{ color: '#979797', width: 14, height: 14, mr: 0.3, mt:-0.1 }} />
        default:
            return <></>
    }
}

const getColorChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'All OK':
            return '#cec4ff'
        case 'Discrepancy':
            return '#f4c8c8'
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
        case 'Done':
            return '#626262'
        default:
            return ''
    }
}

const getTextStatus = tourStatus => {
    switch (tourStatus) {
        case 'Discrepancy':
            return 'Discrepancy'
        case 'Done':
            return 'DONE'
        default:
            return ''
    }
}

const getTextFont = tourStatus => {
    switch (tourStatus) {
        case 'Discrepancy':
            return 'Eina04-Bold'
        case 'Done':
            return 'Eina04-Regular'
        default:
            return ''
    }
}

const StopChipStatus = props => {

    const { stopStatus } = props

    return (
        <Chip sx={{ backgroundColor: getColorChipStatus(stopStatus) }}>

            {getIconChipStatus(stopStatus)}

            <Typography fontSize={11} sx={{ fontFamily: getTextFont(stopStatus), color: getTextStatusColor(stopStatus) }} >
                {getTextStatus(stopStatus)}
            </Typography>
        </Chip>
    )
}

StopChipStatus.defaultProps = {
    stopStatus: 'All OK',
}




export default StopChipStatus