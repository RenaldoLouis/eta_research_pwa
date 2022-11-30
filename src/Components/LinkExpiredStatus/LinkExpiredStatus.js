import React from "react";

// import color theme
import { useTheme } from "@mui/material/styles";

// import material Components
import { Typography } from "@mui/material";

// import Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";

const LinkExpiredStatus = props => {

    const { isMobile } = props

    // color theme
    const theme = useTheme()
    
    return (
        <div style={{ marginTop:80, marginBottom:isMobile?80:100 }}>
            <DivFlexCenter>
                <AccessTimeIcon style={{ color: '#9e8df0', width: isMobile? 37:67, height: isMobile?31:61 }} />
            </DivFlexCenter>
            <DivFlexCenter>
                <Typography fontSize={isMobile ? 20 : 40} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                    Your Link has Expired
                </Typography>
            </DivFlexCenter>
        </div>
    )
}


export default LinkExpiredStatus