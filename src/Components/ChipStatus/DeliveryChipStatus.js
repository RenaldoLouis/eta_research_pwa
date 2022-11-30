import React from "react";

// import Material component
import { Typography } from "@mui/material";

// import Icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DoneAllIcon from '@mui/icons-material/DoneAll';

// import reusable component
import Chip from "../ReusableComponents/Chip";

const getIconChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'On Delivery':
            return <LocalShippingIcon sx={{ color: '#ffffff', width: 14, height: 14, mr: 1 }} />
        case 'Too Early':
            return <ArrowDropUpIcon sx={{ color: '#ffffff', width: 16, height: 16, mr: 1 }} />
        case 'Done':
            return <DoneAllIcon sx={{ color: '#ffffff', width: 16, height: 16, mr: 1 }} />
        default:
            return <>-</>
    }
}

const getColorChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'On Delivery':
            return '#0cb74d'
        case 'Too Early':
            return '#d4b305'
        case 'Done':
            return '#9e8df0'
        default:
            return ''
    }
}

const DeliveryChipStatus = props => {

    const { tourStatus } = props

    return (
        <Chip sx={{ backgroundColor: getColorChipStatus(tourStatus) }}>

            {getIconChipStatus(tourStatus)}
            
            <Typography fontSize={11} sx={{ color: '#ffffff', fontFamily: 'Eina04-Bold' }}>
                {tourStatus}
            </Typography>
        </Chip>
    )
}

DeliveryChipStatus.defaultProps = {
    tourStatus: 'On Delivery'
}




export default DeliveryChipStatus