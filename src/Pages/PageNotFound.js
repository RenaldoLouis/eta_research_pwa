import { Typography } from "@mui/material"

import DivFlexCenter from "../Components/DivFlexCenter"

import { FontFamily } from "../Constants/FontFamily"

const PageNotFound = () => {
    return (
        <DivFlexCenter sx={{ height: 'calc(100vh)' }}>
            <Typography
                sx={{
                    fontFamily: FontFamily.EINA04BOLD,
                    fontSize: 24
                }}
            >
                404 Page Not Found
            </Typography>
        </DivFlexCenter>
    )
}

export default PageNotFound