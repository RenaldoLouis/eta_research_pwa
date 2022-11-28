import React from "react";

// import theme color
import { useTheme } from "@mui/material/styles";

// import material Components
import { Typography } from "@mui/material";

// import Icons
import DoneAllIcon from '@mui/icons-material/DoneAll';

const DoneDeliveryStatus = props => {

    const { isMobile } = props

    // theme color
    const theme = useTheme()

    return (
        <div style={{ marginTop: 80, display: 'inline-block', marginRight: 20, width: isMobile ? '100%' : 800 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DoneAllIcon style={{ color: '#9e8df0', width: 67, height: 61 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography fontSize={isMobile ? 20 : 40} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                    {`Delivery for today is`}
                </Typography>
                <div style={{ borderRadius: 5, border: '1px solid #9e8df0', padding:'0px 10px 0px 10px', marginLeft:10, marginRight:10,backgroundColor:'#9e8df0' }}>
                    <Typography fontSize={isMobile ? 20 : 40} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                        {`Done`}
                    </Typography>
                </div>
                <Typography fontSize={isMobile ? 20 : 40} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                    {`!`}
                </Typography>
            </div>

        </div>
    )
}


export default DoneDeliveryStatus