import React from "react";

// import theme color
import { useTheme } from "@mui/material/styles";

// import material Components
import { Typography } from "@mui/material";

// import Icons
import DoneAllIcon from '@mui/icons-material/DoneAll';

// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";


const DoneDeliveryStatus = props => {

    const { isMobile } = props

    // theme color
    const theme = useTheme()

    return (
        <div style={{ marginTop: 80, display: 'inline-block', marginRight: 20, width: isMobile ? '100%' : 800 }}>
            <DivFlexCenter>
                <DoneAllIcon sx={{ color: '#9e8df0', width: 67, height: 61 }} />
            </DivFlexCenter>
            <DivFlexCenter>
                <Typography fontSize={isMobile ? 20 : 40} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                    {`Delivery for today is`}
                </Typography>
                <div style={{ borderRadius: 5, border: '1px solid #9e8df0', padding:'0px 10px 0px 10px', marginLeft:10, marginRight:10,backgroundColor:'#9e8df0' }}>
                    <Typography fontSize={isMobile ? 20 : 40} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                        {`DONE`}
                    </Typography>
                </div>
                <Typography fontSize={isMobile ? 20 : 40} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                    {`!`}
                </Typography>
            </DivFlexCenter>

        </div>
    )
}


export default DoneDeliveryStatus