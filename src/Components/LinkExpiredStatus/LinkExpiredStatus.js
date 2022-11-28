import React from "react";

// import color theme
import { useTheme } from "@mui/material/styles";

// import material Components
import { Typography } from "@mui/material";

// import Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const LinkExpiredStatus = props => {

    const { isMobile } = props

    // color theme
    const theme = useTheme()
    
    return (
        <div style={{ marginTop:80, display: 'inline-block', marginRight: 20, width: '100%', marginBottom:isMobile?80:100 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AccessTimeIcon style={{ color: '#9e8df0', width: isMobile? 37:67, height: isMobile?31:61 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography fontSize={isMobile ? 20 : 40} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                    Your Link has Expired
                </Typography>
            </div>

        </div>
    )
}


export default LinkExpiredStatus