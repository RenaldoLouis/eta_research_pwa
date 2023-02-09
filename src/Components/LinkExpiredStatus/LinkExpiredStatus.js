import React from "react";

// import color theme
import { useTheme } from "@mui/material/styles";

// import material Components
import { Box, Typography } from "@mui/material";

// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexStart from "../ReusableComponents/DivFlexStart";

const LinkExpiredStatus = props => {

    // color theme
    const theme = useTheme()

    return (
        <DivFlexStart sx={{ mt: 5, width: '100%', flexWrap: 'wrap', }}>
            <Box sx={{ width: 335 }}>
                <DivFlexStart sx={{ width: '100%' }}>
                    <Typography fontSize={72} color={'#A8A8A8'} sx={{ fontFamily: 'Eina04-Regular' }}>
                        {`:(`}
                    </Typography>
                </DivFlexStart>
                <DivFlexCenter sx={{ width: '100%' }}>
                    <Typography fontSize={32} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                        Your link has expired
                    </Typography>
                </DivFlexCenter>
            </Box>
        </DivFlexStart>
    )
}


export default LinkExpiredStatus