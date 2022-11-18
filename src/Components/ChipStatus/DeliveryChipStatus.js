import React from "react";

// import Components
import { Typography } from "@mui/material";

// import Icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// import Styles
import { deliveryChipStatusStyles } from "./DeliveryChipStatusStyles";

const getIconChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'On Delivery':
            return <LocalShippingIcon style={{ color:'#ffffff', width:14, height:14, marginTop:6 }} />
        case 'Too Early':
            return <ArrowDropUpIcon style={{ color:'#ffffff', width:16, height:16, marginTop:6}} />
        default:
            return <></>
    }
}

const getColorChipStatus = tourStatus => {
    switch (tourStatus) {
        case 'On Delivery':
            return '#0cb74d'
        case 'Too Early':
            return '#d4b305'
        default:
            return ''
    }
}

const DeliveryChipStatus = props => {

    const { tourStatus } = props

    const classes = deliveryChipStatusStyles()

    return (
        <div className={classes.chip} style={{ backgroundColor : getColorChipStatus(tourStatus) }}>
            <div style={{ marginRight: 6 }}>
                {getIconChipStatus(tourStatus)}
            </div>
            <div>
                <Typography fontSize={11} sx={{ color:'#ffffff', fontFamily:'Eina04-Bold' }}>
                    {tourStatus}
                </Typography>
            </div>
        </div>
    )
}

DeliveryChipStatus.defaultProps = {
    tourStatus: 'On Delivery'
}




export default DeliveryChipStatus