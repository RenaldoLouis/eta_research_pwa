import React from "react";

// import Components
import { Typography } from "@mui/material";

// import Icons
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import Styles
import { deliveryChipStatusStyles } from "./DeliveryChipStatusStyles";

const getIconChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'All OK':
            return <CheckIcon style={{ color:'#7a64e5', width:14, height:14, marginTop:6 }} />
        case 'Discrepancy':
            return <ErrorOutlineIcon style={{ color:'#ea0000', width:14, height:14, marginTop:6 }} />
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

    const classes = deliveryChipStatusStyles()

    return (
        <div className={classes.chip} style={{ backgroundColor : getColorChipStatus(stopStatus) }}>
            <div style={{ marginRight: 6 }}>
                {getIconChipStatus(stopStatus)}
            </div>
            <div>
                <Typography fontSize={11} sx={{ fontFamily:'Eina04-Bold', color:getTextStatusColor(stopStatus) }} >
                    {stopStatus}
                </Typography>
            </div>
        </div>
    )
}

StopChipStatus.defaultProps = {
    stopStatus: 'All OK',
}




export default StopChipStatus