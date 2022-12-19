import React from "react";

// import color theme
import { useTheme } from "@mui/material/styles";

// import material Components
import { Typography } from "@mui/material";

// import Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexStart from "../ReusableComponents/DivFlexStart";

const LinkExpiredStatus = props => {

    const { isMobile } = props

    // color theme
    const theme = useTheme()
    
    return (
        <DivFlexCenter sx={{ mt:15, width:'100%', flexWrap:'wrap', padding:'0px 10px 0px 10px' }}>
            <div style={{ width:335 }}>
            <DivFlexStart sx={{ width:'100%' }}>
                <Typography fontSize={32} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                    {`:(`}
                </Typography>
            </DivFlexStart>
            <DivFlexCenter sx={{ width:'100%' }}>
                <Typography fontSize={32} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                    Your Link has Expired
                </Typography>
            </DivFlexCenter>
            </div>
        </DivFlexCenter>
    )
}


export default LinkExpiredStatus