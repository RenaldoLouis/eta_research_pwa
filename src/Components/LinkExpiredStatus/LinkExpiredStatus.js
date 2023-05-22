import React from "react";

// import color theme
import { useTheme } from "@mui/material/styles";

// import material Components
import { Box, Typography } from "@mui/material";

// import component
import DivFlexCenter from "../DivFlexCenter";
import DivFlexStart from "../DivFlexStart";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

const LinkExpiredStatus = props => {

    // color theme
    const theme = useTheme()

    return (
        <DivFlexStart sx={{ pt: 10, width: '100%', flexWrap: 'wrap', }}>
            <Box sx={{ width: 335 }}>
                <DivFlexStart sx={{ width: '100%' }}>
                    <Typography fontSize={72} color={theme.palette.background.iconStatus} sx={{ fontFamily: FontFamily.EINA04REGULAR }}>
                        {`:(`}
                    </Typography>
                </DivFlexStart>
                <DivFlexCenter sx={{ width: '100%' }}>
                    <Typography fontSize={32} color={theme.palette.text.primary} sx={{ fontFamily: FontFamily.EINA04REGULAR }}>
                        Your link has expired
                    </Typography>
                </DivFlexCenter>
            </Box>
        </DivFlexStart>
    )
}


export default LinkExpiredStatus