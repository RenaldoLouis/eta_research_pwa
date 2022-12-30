import React from "react";

// import Components
import { Typography } from "@mui/material";

// import Icons
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import reusable Component
import Chip from "../ReusableComponents/Chip";

const DiscrepancyChip = props => {

    return (
        <Chip sx={{ backgroundColor: '#ffc9c9' }}>

            <ErrorOutlineIcon sx={{ color: '#da1e28', width: 14, height: 14, mr: 1 }} />

            <Typography fontSize={11} sx={{ fontFamily: 'Eina04-Bold', color: '#da1e28' }}>
                Discrepancy
            </Typography>
        </Chip>
    )
}


export default DiscrepancyChip